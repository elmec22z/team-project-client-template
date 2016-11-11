import React from 'react';
import ReactDOM from 'react-dom';
import ResultCity from './components/resultcity';

class ResultPage extends React.Component {
	render() {
		return (
				<Navbar />
		)
	}
}

ReactDOM.render(
	<ResultCity />,
	document.getElementById('app')
);