import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App';
import Product from './components/Product';

let Home = () => (
	<div>
		<h2>Home</h2>
		<ul>
			<li><a href="/product/100/">/product/100/</a></li>
			<li><a href="/product/123/">/product/123/</a></li>
		</ul>
	</div>
);

ReactDOM.render(
	<Router>
		<App path="/">
			<Home path="/" />
			<Product path="/product/:id" />
		</App>
	</Router>,
	document.getElementById('root')
);
