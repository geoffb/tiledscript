import type { CustomProperty, Layer, LayerType } from "./types.js";

/** Optional type + JSON regex */
const ComplexValuePattern = /((.*):)?([\[{][^]*?[\]}])$/g;

/** Parse custom properties into a record */
export function parseCustomProperties(
	properties: CustomProperty[],
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

export function isComplexValue(value: string): boolean {
	return value.match(ComplexValuePattern) !== null;
}

export function parseComplexValueType(value: string): string {
	let type = "unknown";
	const match = value.match(ComplexValuePattern);
	console.log(match);
	return type;
}
