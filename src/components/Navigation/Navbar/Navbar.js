import React,{Component} from 'react';
import classes from './Navbar.module.css';
import NavigationMenu  from '../NavigationItems/NavigationMenu';
class Navbar extends Component{

    render(){
        return (
            <header>
                <NavigationMenu/>
            </header>            
        );
    }
}

export default Navbar;