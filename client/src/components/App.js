import React from 'react';

import './App.css';

const App = ({ children }) => (
	<div className="App">
		<header className="App-header">Cool Shop</header>
		<div className="App-content">{children}</div>
		<footer className="App-footer">Cool Shop, Inc.</footer>
	</div>
);
export default App;
