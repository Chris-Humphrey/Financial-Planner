import _ from "lodash";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import myImage from './images/gold.png';

import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

const NavBarMobile = ({
    children,
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible
}) => (
    <Sidebar.Pushable>
        <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={leftItems}
        vertical
        visible={visible}
        />
        <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
        >
        <Menu fixed="top" inverted>
            <Menu.Item>
            <Image size="mini" src="../../../public/images/gold.png" />
            </Menu.Item>
            <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Menu position="right">
            {_.map(rightItems, item => <Menu.Item {...item} />)}
            </Menu.Menu>
        </Menu>
        {children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
    );

const NavBarDesktop = () => (
    <Menu fixed="top" inverted>
        <Menu.Item>
            <Image as="a" href="/" size="mini" style={{paddingRight: "1em"}} src={myImage} />
            <a href='/'>Finance Tracker</a>
        </Menu.Item>
        <Menu.Item as={Link} to='/dashboard'>
            Dashboard
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item as={Link} to='/login'>
                Login
            </Menu.Item>
            <Menu.Item as={Link} to='/register'>
                Register
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

const NavBarChildren = ({ children }) => (
    <Container fluid style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
    state = {
        visible: false
    };

    handlePusher = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false });
    };

    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
        const { children, leftItems, rightItems } = this.props;
        const { visible } = this.state;

    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <NavBarMobile
                    leftItems={leftItems}
                    onPusherClick={this.handlePusher}
                    onToggle={this.handleToggle}
                    rightItems={rightItems}
                    visible={visible}
                >
                    <NavBarChildren>{children}</NavBarChildren>
                </NavBarMobile>
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <NavBarDesktop />
                <NavBarChildren>{children}</NavBarChildren>
            </Responsive>
        </div>
        );
    }
}

const App = (props) => (
    <NavBar>
        {props.children}
    </NavBar>
);

export default App;






// import React from 'react';
// import { Link } from 'react-router-dom';

// export default (props) => {
//     return (
//         <>
//             <Link to='/'>Home</Link><br/>
//             <Link to='/addincome'>Income</Link><br/>
//             <Link to='/addbills'>Bills</Link><br/>
//             <Link to='/dashboard'>Dashboard</Link><br/>
//             <Link to='/register'>Register</Link><br/>
//             <Link to='/login'>Login</Link><br/>
//             {props.children}
//         </>
//     )
// }