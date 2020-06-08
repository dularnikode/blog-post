import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

class NavigationMenu extends Component {
  state = {activeItem:'posts'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    console.log("isAuthenticated" ,this.props.isLoggedIn);
    return (
      <Menu inverted>
        <Menu.Item as={NavLink} to='/' header>Blog Post</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item
            name='posts'
            active={activeItem === 'posts'}
            onClick={this.handleItemClick}
            as={NavLink} to='/posts'
            >Posts</Menu.Item>

            <Menu.Item
            name={this.props.isLoggedIn ? 'logout' : 'login'}
            active={activeItem === this.props.isLoggedIn ? 'logout' : 'login'}
            onClick={this.handleItemClick}
            as={NavLink} to={this.props.isLoggedIn ? 'logout' : 'login'}
            >{this.props.isLoggedIn ? 'Logout' : 'Login'}</Menu.Item>

        </Menu.Menu> 
      </Menu>
    );
  }
}

const  mapStateToProps =state =>{
  return {
      isLoggedIn:state.token !==null
  };
};

export default connect(mapStateToProps)(NavigationMenu);