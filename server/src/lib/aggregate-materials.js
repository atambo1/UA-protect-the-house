const knownStyles = {};

const stylizeVariant = (variant) => {
	const partialSku = [variant.style, variant.materials].join('-');
	const style = knownStyles[partialSku] || {
		category: variant.category,
		materials: [],
		name: variant.name,
		style: variant.style
	};
	const partMaterial = [variant.material];
	const material = style[partMaterial] || {
		color: variant.color,
		image: variant.image,
		material: variant.material,
		variants: []
	};
	const partVariant = [material.color];
	const vari = style.materials[partVariant] || {
		price: variant.price,
		size: variant.size,
		sku: variant.sku,
		variant: variant.variant
	};
	material.variants.push(vari);
	style.materials.push(material);
	knownStyles[partialSku] = style;

	return style;
};

module.exports = (productData) => {
	productData.forEach(stylizeVariant);
	return Object.values(knownStyles);
};
