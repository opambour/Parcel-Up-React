import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

// ------ code splitting with dynamic import and render
import(/* chunkName: "App" */ '../frontend/shared/App').then(({ default: App }) =>
	render(<App />, document.querySelector('#root'))
);
