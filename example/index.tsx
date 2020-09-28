import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Alert, Badge, Button, Flex, Grid, GridItem, Size, Spinner, ThemeColor} from '../.';
import './index.css';

const App = () => {

    const pageStyles = {
        width: '800px',
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
    const gridItemContentStyles = {
        backgroundColor: '#be9fe1',
        padding: '10px'
    };

    return (
        <BrowserRouter>
            <Grid gap={'2.5rem'} style={pageStyles}>
                <GridItem>
                    <h4>Six equally sized columns</h4>
                    <Grid columns={6} style={gridStyles}>
                        <GridItem style={gridItemStyles}>
                            1/6
                        </GridItem>
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
                        <GridItem style={gridItemStyles}>
                            Item 3
                        </GridItem>
                    </Grid>
                    <h4>
                        Same as the above but the grid has a min height of <code>200px</code> and the content of the grid items is centered vertically and/or
                        horizontally.
                    </h4>
                    <Grid columns={{sm: 2}} gap={'1px'} style={{...gridStyles, minHeight: '200px'}}>
                        <GridItem style={gridItemStyles}>
                            <div style={gridItemContentStyles}>Normal alignment</div>
                        </GridItem>
                        <GridItem hAlignContent={'center'} style={gridItemStyles}>
                            <div style={gridItemContentStyles}>Centered horizontally</div>
                        </GridItem>
                        <GridItem vAlignContent={'center'} style={gridItemStyles}>
                            <div style={gridItemContentStyles}>Centered vertically</div>
                        </GridItem>
                        <GridItem hAlignContent={'center'} vAlignContent={'center'} style={gridItemStyles}>
                            <div style={gridItemContentStyles}>Centered both</div>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <h4>One column on <code>xs</code>, two equally sized columns with changed order from <code>sm</code> up</h4>
                    <Grid columns={{sm: 2}} gap={'1px'} style={gridStyles}>
                        <GridItem order={{sm: 1}} style={gridItemStyles}>
                            Item 1
                        </GridItem>
                        <GridItem style={gridItemStyles}>
                            Item 2
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <h4>
                        One column on <code>xs</code>, two columns on <code>sm</code>, three columns on <code>md</code> and one column on <code>lg</code> and
                        up.
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
                    <h4>Same as the above without a horizontal gap.</h4>
                    <Grid columns={{sm: 2, md: 3, lg: 1}} dense={true} gap={'.5rem 0'} style={gridStyles}>
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
                        Same as the above but with items centered vertically and only one column for everything below <code>md</code>.
                    </h4>
                    <Grid columns={{xs: 1, md: 'auto minmax(0, 1fr)'}} gap={'1px'} style={gridStyles}>
                        <GridItem style={gridItemStyles} vAlignContent={'center'}>
                            First name:
                        </GridItem>
                        <GridItem style={gridItemStyles} vAlignContent={'center'}>
                            <input type="text" placeholder="Enter your first name."/>
                        </GridItem>
                        <GridItem style={gridItemStyles} vAlignContent={'center'}>
                            Last name:
                        </GridItem>
                        <GridItem style={gridItemStyles} vAlignContent={'center'}>
                            <input type="text" placeholder="Enter your last name."/>
                        </GridItem>
                        <GridItem style={gridItemStyles} vAlignContent={'center'}>
                            Age:
                        </GridItem>
                        <GridItem style={gridItemStyles} vAlignContent={'center'}>
                            <input type="number" placeholder="Enter your age."/>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <Grid gap={'1rem'}>
                        <GridItem>
                            <Alert prefix={'★'} themeColor={{xs: ThemeColor.SECONDARY, lg: ThemeColor.PRIMARY}} alignItems={{xs: 'start', lg: 'center'}}>
                                <div>
                                    <a href={''}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et
                                    dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </div>
                            </Alert>
                        </GridItem>
                        <GridItem>
                            <Alert themeColor={ThemeColor.SECONDARY} suffix={'★'}>
                                <div>
                                    <a href={''}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et
                                    dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </div>
                            </Alert>
                        </GridItem>
                        <GridItem>
                            <Alert themeColor={ThemeColor.INFO}>
                                <div>
                                    <a href={''}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et
                                    dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </div>
                            </Alert>
                        </GridItem>
                        <GridItem>
                            <Alert themeColor={ThemeColor.SUCCESS}>
                                <div>
                                    <a href={''}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et
                                    dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </div>
                            </Alert>
                        </GridItem>
                        <GridItem>
                            <Alert themeColor={ThemeColor.WARNING}>
                                <div>
                                    <a href={''}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et
                                    dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </div>
                            </Alert>
                        </GridItem>
                        <GridItem>
                            <Alert themeColor={ThemeColor.DANGER}>
                                <div>
                                    <a href={''}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et
                                    dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </div>
                            </Alert>
                        </GridItem>
                        <GridItem>
                            <Alert themeColor={ThemeColor.LIGHT}>
                                <div>
                                    <a href={''}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et
                                    dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </div>
                            </Alert>
                        </GridItem>
                        <GridItem>
                            <Alert themeColor={ThemeColor.DARK}>
                                <div>
                                    <a href={''}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et
                                    dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </div>
                            </Alert>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <Flex alignItems={'center'} gap={'.25rem'} wrap={true}>
                        {Object.keys(Size).map((size: Size) => (
                            <Button key={size} size={size}>
                                {size.charAt(0) + size.substring(1).toLowerCase()} Button
                            </Button>
                        ))}
                        <Button disabled={true}>
                            Disabled
                        </Button>
                        <Button disabled={true} outline={true}>
                            Disabled with Outline
                        </Button>
                        <Button prefix={'★'} suffix={'★'}>
                            Prefix and Suffix
                        </Button>
                        <Button href={'#'}>
                            Link
                        </Button>
                        <Button href={'#'} disabled={true}>
                            Disabled Link
                        </Button>
                        <Button suffix={<Badge themeColor={ThemeColor.LIGHT}>Badge</Badge>}>
                            Button with
                        </Button>
                        <Button suffix={<Badge themeColor={ThemeColor.SUCCESS} soft={true}>Soft Badge</Badge>}>
                            Button with
                        </Button>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap={'.25rem'} wrap={true}>
                        {Object.keys(ThemeColor).map((themeColor: ThemeColor) => (
                            <Button key={themeColor} themeColor={themeColor}>
                                {themeColor.charAt(0) + themeColor.substring(1).toLowerCase()}
                            </Button>
                        ))}
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap={'.25rem'} wrap={true}>
                        {Object.keys(ThemeColor).map((themeColor: ThemeColor) => (
                            <Button key={themeColor} themeColor={themeColor} outline={{xs: false, lg: true}}>
                                {themeColor.charAt(0) + themeColor.substring(1).toLowerCase()}
                            </Button>
                        ))}
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap={'.25rem'} wrap={true}>
                        {Object.keys(ThemeColor).map((themeColor: ThemeColor) => (
                            <Spinner key={themeColor} themeColor={themeColor} style={{fontSize: '2rem'}}/>
                        ))}
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap={'.25rem'} wrap={true}>
                        {Object.keys(ThemeColor).map((themeColor: ThemeColor) => (
                            <Badge key={themeColor} themeColor={themeColor}>
                                {themeColor.charAt(0) + themeColor.substring(1).toLowerCase()}
                            </Badge>
                        ))}
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap={'.25rem'} wrap={true}>
                        {Object.keys(ThemeColor).map((themeColor: ThemeColor) => (
                            <Badge key={themeColor} themeColor={themeColor} soft={{xs: false, md: true}}>
                                Soft {themeColor.charAt(0) + themeColor.substring(1).toLowerCase()}
                            </Badge>
                        ))}
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap={'.25rem'} wrap={true}>
                        {Object.keys(ThemeColor).map((themeColor: ThemeColor) => (
                            <Badge key={themeColor} themeColor={themeColor} href={'#'} prefix={'★'} pill={{xs: false, md: true}}>
                                {themeColor.charAt(0) + themeColor.substring(1).toLowerCase()}
                            </Badge>
                        ))}
                    </Flex>
                </GridItem>
            </Grid>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
