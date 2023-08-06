export interface Property {
	name: string;
	type: string;
	propertytype: string;
	value: any;
}

export interface PropertyType {
	id: number;
	name: string;
	type: string;
	members: Property[];
}

export interface Project {
	propertyTypes: PropertyType[];
}

export interface Template {
	type: "template";
	tileset: TilesetReference;
	object: Object;
}

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
	tiles?: TilesetTile[];
}

export interface TilesetTile {
	id: number;
	animation: TileAnimationFrame[];
}

export interface TileAnimationFrame {
	tileid: number;
	duration: number;
}

export type LayerType = "tilelayer" | "objectgroup";

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

export interface TileLayer extends Layer {
	type: "tilelayer";
	data: number[];
}

export interface ObjectGroup extends Layer {
	type: "objectgroup";
	objects: Object[];
}

export interface Map {
	width: number;
	height: number;
	layers: Layer[];
	tilewidth: number;
	tileheight: number;
	tilesets: TilesetReference[];
	backgroundcolor?: string;
	properties?: CustomProperty[];
	nextobjectid: number;
}

export interface TilesetReference {
	firstgid: number;
	source: string;
}

export interface CustomProperty {
	name: string;
	type: string;
	value: string;
}
