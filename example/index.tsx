import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import {Grid, GridItem} from '../.';

const App = () => {
	return (
		<div>
			<Grid columns={2} gap={3}>
				<GridItem>
					Test
				</GridItem>
				<GridItem>
					Test
				</GridItem>
			</Grid>
		</div>
	);
};

ReactDOM.render(<App/>, document.getElementById('root'));
