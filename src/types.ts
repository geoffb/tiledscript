/*
 * Types for the Tiled JSON map format
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/
 */

/**
 * Tiled Map
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#map
 */
export interface Map {
	width: number;
	height: number;
	layers: Layer[];
	tilewidth: number;
	tileheight: number;
	tilesets: TilesetReference[];
	backgroundcolor?: string;
	properties?: Property[];
	nextobjectid: number;
}

/**
 * Tiled Layer
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#layer
 */
export interface Layer {
	id: number;
	name: string;
	type: LayerType;
	x: number;
	y: number;
	width: number;
	height: number;
	opacity: number;
	visible: boolean;
	parallaxx?: number;
	parallaxy?: number;
}

/** Possible layer types */
export type LayerType = "tilelayer" | "objectgroup";

/**
 * Tiled Tile Layer
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#tile-layer-example
 */
export interface TileLayer extends Layer {
	type: "tilelayer";
	data: number[];
}

/**
 * Tiled Object Layer
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#object-layer-example
 */
export interface ObjectLayer extends Layer {
	type: "objectgroup";
	objects: Object[];
}

/**
 * Tiled Object
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#object
 */
export interface Object {
	id: number;
	name: string;
	rotation: number;
	type: string;
	x: number;
	y: number;
	width: number;
	height: number;
	visible: boolean;
	gid: number;
	properties?: Property[];
	template?: string;
}

/**
 * Tiled Tileset
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#tileset
 */
export interface Tileset {
	columns: number;
	image: string;
	imageheight: number;
	imagewidth: number;
	margin: number;
	name: string;
	spacing: number;
	tilecount: number;
	tiledversion: string;
	tileheight: number;
	tilewidth: number;
	type: "tileset";
	version: string;
	tiles?: Tile[];
}

/**
 * Tiled Tileset Tile
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#tile-definition
 */
export interface Tile {
	id: number;
	animation: Frame[];
}

/**
 * Tiled Animation Frame
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#json-frame
 */
export interface Frame {
	tileid: number;
	duration: number;
}

/**
 * Tiled Tileset Reference */
export interface TilesetReference {
	firstgid: number;
	source: string;
}

/**
 * Tiled Object Template
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#object-template
 */
export interface ObjectTemplate {
	type: "template";
	tileset: TilesetReference;
	object: Object;
}

/**
 * Tiled Property
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#property
 */
export interface Property {
	name: string;
	type: string;
	propertytype: string;
	propertyType: string;
	value: any;
}

/**
 * Tiled Point
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#point
 */
export interface Point {
	x: number;
	y: number;
}

/**
 * Tiled Project
 * @see https://doc.mapeditor.org/en/stable/manual/projects/
 */
export interface Project {
	propertyTypes: CustomTypes[];
}

/** All possible custom types */
export type CustomTypes = CustomClass | CustomEnum;

/** A generic custom type */
export interface CustomType {
	id: number;
	name: string;
	type: string;
}

/** A custom class type */
export interface CustomClass extends CustomType {
	type: "class";
	members: Property[];
}

/** A custom enum type */
export interface CustomEnum extends CustomType {
	type: "enum";
	storageType: string;
	values: string[];
	valuesAsFlags: boolean;
}
