import React from 'react';
import ReactDOM from 'react-dom';
import Result from './components/result';

class ResultPage extends React.Component {
	render() {
		return (
				<Navbar />
		)
	}
}

ReactDOM.render(
	<Result />,
	document.getElementById('app')
);