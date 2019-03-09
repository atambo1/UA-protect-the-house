import React, { Fragment, useState, useEffect } from 'react';

import Picker from './Picker';
import Image from './Image';

import './Product.css';

// TODO: Remove the following two lines when the api endpoint is ready
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const item = JSON.parse(
	`{
  "category": "Socks",
  "materials": [
    {
      "color": {
        "hex": "#808080",
        "name": "gray"
      },
      "image": "https://via.placeholder.com/150/c0c0c0/ffffff",
      "material": 1,
      "variants": [
        {
          "price": 30,
          "size": "large",
          "sku": "100-1-LG",
          "variant": "LG"
        },
        {
          "price": 30,
          "size": "medium",
          "sku": "100-1-MD",
          "variant": "MD"
        },
        {
          "price": 30,
          "size": "small",
          "sku": "100-1-SM",
          "variant": "SM"
        }
      ]
    },
    {
      "color": {
        "hex": "#c08020",
        "name": "orange"
      },
      "image": "https://via.placeholder.com/150/c08020/ffffff",
      "material": 2,
      "variants": [
        {
          "price": 30,
          "size": "large",
          "sku": "100-2-LG",
          "variant": "LG"
        },
        {
          "price": 30,
          "size": "medium",
          "sku": "100-2-MD",
          "variant": "MD"
        },
        {
          "price": 30,
          "size": "small",
          "sku": "100-2-SM",
          "variant": "SM"
        }
      ]
    },
    {
      "color": {
        "hex": "#c02020",
        "name": "red"
      },
      "image": "https://via.placeholder.com/150/c02020/ffffff",
      "material": 4,
      "variants": [
        {
          "price": 35,
          "size": "large",
          "sku": "100-4-LG",
          "variant": "LG"
        },
        {
          "price": 35,
          "size": "medium",
          "sku": "100-4-MD",
          "variant": "MD"
        },
        {
          "price": 35,
          "size": "small",
          "sku": "100-4-SM",
          "variant": "SM"
        }
      ]
    }
  ],
  "name": "Streamlined Fastsock",
  "style": 100
}
`
);

const Product = ({ id }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [product, setProduct] = useState({});
	const [material, setMaterial] = useState({});
	const [variant, setVariant] = useState({});
	const [colorOptions, setColorOptions] = useState([]);
	const [selectedColorOption, setSelectedColorOption] = useState({});
	const [sizeOptions, setSizeOptions] = useState([]);
	const [selectedSizeOption, setSelectedSizeOption] = useState({});

	const getProduct = async style => {
		setLoading(true);

		// TODO: Remove the following line when the api endpoint is ready
		await delay(350);

		// TODO: Uncomment the following line when the api endpoint is ready
		// const item = await fetch(`/your/api/${style}`).then((res) => res.json())

		setLoading(false);

		if (item.style !== parseInt(style, 10)) {
			return setError('Product Not Found');
		}

		const _colorOptions = item.materials.map(material => ({
			value: material.material,
			label: material.color.name
		}));
		const _sizeOptions = item.materials[0].variants.map(variant => ({
			value: variant.variant,
			label: variant.size
		}));

		setProduct(item);
		setMaterial(item.materials[0]);
		setVariant(item.materials[0].variants[0]);
		setColorOptions(_colorOptions);
		setSelectedColorOption(_colorOptions[0]);
		setSizeOptions(_sizeOptions);
		setSelectedSizeOption(_sizeOptions[0]);
	};

	const handleColorChange = option => {
		const _material = product.materials.find(material => material.material === option.value);
		const _sizeOptions = product.materials
			.find(material => material.material === option.value)
			.variants.map(variant => ({ value: variant.variant, label: variant.size }));
		setSelectedColorOption(option);
		setSizeOptions(_sizeOptions);
		setSelectedSizeOption(_sizeOptions[0]);
		setMaterial(_material);
		setVariant(_material.variants[0]);
	};

	const handleSizeChange = option => {
		setSelectedSizeOption(option);
		setVariant(material.variants.find(variant => variant.variant === option.value));
	};

	useEffect(() => {
		getProduct(id);
	}, []);

	return (
		<div className="product">
			{loading && <p className="loading">Loading...</p>}
			{!loading && error && <p className="error">An Error Occurred</p>}
			{!loading && !error && (
				<Fragment>
					<div className="product-image-wrapper">
						<Image
							className="product-image"
							imageUrl={material.image}
							altText={product.name}
						/>
					</div>
					<div className="product-details">
						<div className="product-title">
							<h2>{product.name}</h2>
							<span>{product.category}</span>
						</div>
						<span className="product-price">${parseFloat(variant.price).toFixed(2)}</span>
						<div className="product-options">
							<Picker
								className="product-option"
								label="Color"
								value={selectedColorOption}
								options={colorOptions}
								onChange={handleColorChange}
							/>
							<Picker
								className="product-option"
								label="Size"
								value={selectedSizeOption}
								options={sizeOptions}
								onChange={handleSizeChange}
							/>
						</div>
						<div>
							<button className="add-to-cart">Add to Cart</button>
						</div>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default Product;
