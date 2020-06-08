import React, { Component } from 'react';
import classes from './Layout.module.css';
//import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
//import Login from '../../containers/Login/Login';
import Navbar from '../../components/Navigation/Navbar/Navbar';
//import {Container} from 'semantic-ui-react';



class Layout extends Component {
    render () {
        return (
            <>
                <Navbar/>
                {/*<SideDrawer/>*/}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}


export default Layout;