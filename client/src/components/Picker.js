import React from 'react';
import Select from 'react-select';

const Picker = ({ className, label, value, options, onChange }) => (
	<div className={className}>
		<span className="label">{label}: </span>
		<Select
			value={value}
			options={options}
			onChange={onChange}
		/>
	</div>
);

export default Picker;
