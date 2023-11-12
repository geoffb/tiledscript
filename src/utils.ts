import type { Property, Layer, LayerType } from "./types.js";

/** Parse properties into a record */
export function parseProperties(
	properties: Property[],
): Record<string, unknown> {
	const props: Record<string, unknown> = {};
	for (const prop of properties) {
		props[prop.name] = prop.value;
	}
	return props;
}

/** Get layers of a specified type from a list of layers */
export function getLayersByType<T extends Layer = Layer>(
	layers: Layer[],
	type: LayerType,
): T[] {
	const matches: T[] = [];
	for (const layer of layers) {
		if (layer.type === type) {
			matches.push(layer as T);
		}
	}
	return matches;
}
