# TiledScript

[![Build](https://github.com/geoffb/tiledscript/actions/workflows/build.yml/badge.svg)](https://github.com/geoffb/tiledscript/actions/workflows/build.yml)

[Tiled map editor](https://www.mapeditor.org) interfaces and utilities for [TypeScript](https://www.typescriptlang.org).

## Generate Custom Types

Generate [TypeScript type declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html) from [Tiled custom types](https://doc.mapeditor.org/en/stable/manual/custom-properties/#custom-types).

```sh
tiled-gen-types path/to/example.tiled-project src/types.ts
```

For example, the following custom type from a Tiled project file:

```json
{
	"propertyTypes": [
		{
			"id": 1,
			"name": "ExampleClass",
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
export interface ExampleClass {
	elapsed: number;
	state: boolean;
	type: string;
}
```
