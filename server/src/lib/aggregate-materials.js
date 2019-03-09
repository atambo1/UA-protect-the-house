const knownMaterials = {};

const materializeVariant = (variant) => {
	const partialSku = [variant.style, variant.material].join('-');
	const material = knownMaterials[partialSku] || {
		name: variant.name,
		category: variant.category,
		style: variant.style,
		material: variant.material,
		variants: []
	};

	material.variants.push(variant);
	knownMaterials[partialSku] = material;

	return material;
};

module.exports = (productData) => {
	productData.forEach(materializeVariant);
	return Object.values(knownMaterials);
};
