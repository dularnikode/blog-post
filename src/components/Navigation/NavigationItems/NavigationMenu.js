import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class NavigationMenu extends Component {
  state = {activeItem:'posts'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item header>Blog Post</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item
            name='posts'
            active={activeItem === 'posts'}
            onClick={this.handleItemClick}
            as={Link} to='posts'
            >Posts</Menu.Item>

            <Menu.Item
        
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
            as={Link} to={this.props.isLoggedIn ? 'logout' : 'login'}
            >Logout</Menu.Item>
        </Menu.Menu> 
      </Menu>
    );
  }
}

// const mapStateToProps=state=>{
//   return{

//   };
// }
export default NavigationMenu;