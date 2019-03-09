import React from 'react';

const Image = ({className, imageUrl, altText}) => (
	<div className={className}>
		<img src={imageUrl} alt={altText} />
	</div>
);

export default Image;
