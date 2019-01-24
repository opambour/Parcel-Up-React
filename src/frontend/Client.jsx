import '@babel/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';

import App from '../frontend/shared/App';

const store = '';

Loadable.preloadReady().then(() => {
	hydrate(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		document.querySelector('#root')
	);
});
