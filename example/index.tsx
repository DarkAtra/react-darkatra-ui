import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import {Grid, GridItem} from '../.';
import './index.css';

const App = () => {

    const pageStyles = {
        width: '600px',
        margin: '40px auto'
    };
    const gridStyles = {
        backgroundColor: '#be9fe1',
        border: '1px solid #be9fe1'
    };
    const gridItemStyles = {
        backgroundColor: '#e1ccec',
        padding: '10px'
    };

    return (
        <Grid gap={'2.5rem'} style={pageStyles}>
            <GridItem>
                <h4>Six equally sized columns</h4>
                <Grid columns={6} style={gridStyles}>
                    <GridItem style={gridItemStyles}>
                        1/6
                    </GridItem>
                    {/* other GritItem's here */}
                </Grid>
            </GridItem>
            <GridItem>
                <h4>One column on <code>xs</code>, two equally sized columns from <code>sm</code> up</h4>
                <Grid columns={{sm: 2}} gap={'1px'} style={gridStyles}>
                    <GridItem style={gridItemStyles}>
                        Item 1
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        Item 2
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem>
                <h4>
                    One column on <code>xs</code>, two columns on <code>sm</code>, three columns on <code>md</code> and one column on <code>lg</code> and up.
                    Also adds a gap of <code>.5rem</code> between grid items.
                </h4>
                <Grid columns={{sm: 2, md: 3, lg: 1}} gap={'.5rem'} style={gridStyles}>
                    <GridItem style={gridItemStyles}>
                        Item 1
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        Item 2
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        Item 3
                    </GridItem>
                </Grid>
                <h4>Same as the above but Item 2 spans two columns on <code>sm</code> and <code>md</code> and the grid will try to fill gaps by reordering
                    items.</h4>
                <Grid columns={{sm: 2, md: 3, lg: 1}} dense={true} gap={'.5rem'} style={gridStyles}>
                    <GridItem style={gridItemStyles}>
                        Item 1
                    </GridItem>
                    <GridItem spanColumns={{sm: 2, lg: 1}} style={gridItemStyles}>
                        Item 2
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        Item 3
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem>
                <h4>
                    First column shrinks to fit it's content, second column takes the remaining space.
                    Also adds a gap of <code>1px</code> between grid items to make it easier to see the size of each item.
                </h4>
                <Grid columns={'auto minmax(0, 1fr)'} gap={'1px'} style={gridStyles}>
                    <GridItem style={gridItemStyles}>
                        First name:
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        <input type="text" placeholder="Enter your first name."/>
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        Last name:
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        <input type="text" placeholder="Enter your last name."/>
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        Age:
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        <input type="number" placeholder="Enter your age."/>
                    </GridItem>
                </Grid>
                <h4>
                    Same as the above but with only one column for everything below <code>md</code>.
                </h4>
                <Grid columns={{xs: 1, md: 'auto minmax(0, 1fr)'}} gap={'1px'} style={gridStyles}>
                    <GridItem style={gridItemStyles}>
                        First name:
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        <input type="text" placeholder="Enter your first name."/>
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        Last name:
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        <input type="text" placeholder="Enter your last name."/>
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        Age:
                    </GridItem>
                    <GridItem style={gridItemStyles}>
                        <input type="number" placeholder="Enter your age."/>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
