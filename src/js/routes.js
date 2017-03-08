import React from 'react';
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';

import App from './App';
import Chart from './components/Chart';
import NotFound from './views/NotFound';

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="Chart" />
		<Route path="Chart" component={Chart} />
		<Route path="404" component={NotFound} />
		<Redirect from="*" to="404" />
	</Route>
);

