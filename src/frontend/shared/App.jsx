import React, { Component } from 'react';
import Loadable from 'react-loadable';
import LoadingComponent from '../components/Loading.component';
import ErrorBoundary from '../components/ErrorBoundary';

// import includes...
import Header from '../components/pages/includes/header';
import Footer from '../components/pages/includes/footer';
import Content from '../components/pages/includes/content';

// code splitting with react loadable
const HomePage = Loadable({
	loader: () => import('../components/pages/home/'),
	loading: LoadingComponent
});

class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Header />

				<Content>
					You can use react-router to dynamically render pages here by using react router's switch
					<HomePage />
				</Content>

				<Footer />
			</ErrorBoundary>
		);
	}
}

export default App;
