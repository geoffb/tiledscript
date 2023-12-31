# TiledScript

[![Build](https://github.com/geoffb/tiledscript/actions/workflows/build.yml/badge.svg)](https://github.com/geoffb/tiledscript/actions/workflows/build.yml)

[Tiled map editor](https://www.mapeditor.org) interfaces and utilities for use in [TypeScript](https://www.typescriptlang.org) or JavaScript projects.

## Features

- TypeScript interfaces, types, etc for the [Tiled JSON format](https://doc.mapeditor.org/en/stable/reference/json-map-format/)
- Utility functions for interacting with Tiled data
- Generate TypeScript declarations from Custom Types

## Install

Install via [Yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com):

```sh
yarn add tiledscript
```

## Generate Custom Types

Generate [TypeScript type declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html) from [Tiled custom types](https://doc.mapeditor.org/en/stable/manual/custom-properties/#custom-types).

Custom Types are stored within a [Tiled Project](https://doc.mapeditor.org/en/stable/manual/projects/) file.

To generate types, run the following command:

```sh
tiled-gen-types path/to/example.tiled-project src/types.ts
```

For example, the following custom type from a project file:

```json
{
	"propertyTypes": [
		{
			"id": 1,
			"name": "Example",
			"type": "class",
			"members": [
				{
					"name": "elapsed",
					"type": "int",
					"value": 0
				},
				{
					"name": "state",
					"type": "bool",
					"value": false
				},
				{
					"name": "type",
					"type": "string",
					"value": ""
				}
			],
			"color": "#ffa0a0a4",
			"drawFill": true,
			"useAs": ["property"]
		}
	]
}
```

Would result in the following TypeScript declaration:

```ts
export interface Example {
	elapsed: number;
	state: boolean;
	type: string;
}
```
