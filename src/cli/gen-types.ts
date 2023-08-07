#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import type { CustomClass, CustomEnum, Project } from "../types";

const projectFilename = process.argv[2];
const outputFilename = process.argv[3];

/** Tiled primitives -> JavaScript type lookups */
const TypeLookup: Record<string, string> = {
	int: "number",
	float: "number",
	object: "number",
	string: "string",
	file: "string",
	bool: "boolean",
};

/** Parse an interface from a Tiled class */
function parseInterface(type: CustomClass) {
	let members = "";
	for (const member of type.members) {
		let type =
			member.propertyType !== undefined
				? member.propertyType
				: TypeLookup[member.type];
		members += `\t${member.name}: ${type};\n`;
	}
	return `export interface ${type.name} {\n${members}}\n`;
}

/** Parse an enum from a Tiled enum */
function parseEnum(type: CustomEnum) {
	let values = "";
	for (const value of type.values) {
		values += `\t${value} = "${value}",\n`;
	}
	return `export enum ${type.name} {\n${values}}\n`;
}

// Load and parse Tiled data
const data = readFileSync(projectFilename);
const project = JSON.parse(data.toString()) as Project;

// Content header
let content = "// Tiled custom type definitions for TypeScript\n";
content += "// Generated by TiledScript\n";
content += `// Source: ${projectFilename}\n`;
content += "// DO NOT EDIT\n";

// Synthetic enum for property types
const types: CustomEnum = {
	id: -1,
	name: "Type",
	type: "enum",
	storageType: "string",
	values: [],
	valuesAsFlags: false,
};

// Process Tiled's custom types
for (const propertyType of project.propertyTypes) {
	types.values.push(propertyType.name);
	content += "\n";
	switch (propertyType.type) {
		case "class":
			content += parseInterface(propertyType as CustomClass);
			break;
		case "enum":
			content += parseEnum(propertyType as CustomEnum);
			break;
	}
}

// Write types enum
content += "\n" + parseEnum(types);

// Write content to file
writeFileSync(outputFilename, content);