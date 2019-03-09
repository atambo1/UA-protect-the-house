const assert = require('assert');

const aggregateMaterials = require('./aggregate-materials');
const productData = require('../product-data');

describe('Material-level aggregation', () => {
	it('should aggregate variants into materials', () => {
		const aggregated = aggregateMaterials(productData);
		const partialSkus = new Set();
		assert.ok(Array.isArray(aggregated), 'did not produce an array');
		aggregated.forEach(material => {
			const partialSku = [material.style, material.material].join('-');
			if (partialSkus.has(partialSku)) {
				assert.fail(`duplicated material ${partialSku}`);
			};
			partialSkus.add(partialSku);
		});
	});
});
