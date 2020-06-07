import React, { Component } from 'react';
import classes from './Layout.module.css';
//import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
//import Login from '../../containers/Login/Login';
import Navbar from '../../components/Navigation/Navbar/Navbar';
//import {Container} from 'semantic-ui-react';

import {connect} from 'react-redux';

class Layout extends Component {
    render () {
        return (
            <>
                <Navbar isLoggedIn={this.props.isAuthenticated}/>
                {/*<SideDrawer/>*/}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}
const  mapStateToProps =state =>{
    return {
        isAuthenticated:state.token !==null
    };
};

export default connect(mapStateToProps)(Layout);