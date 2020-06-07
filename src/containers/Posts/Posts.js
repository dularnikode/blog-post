import React,{Component} from 'react';

import Modal from '../../components/Modal/Modal';
import classes from './Posts.module.css';

class Posts extends Component {
    render(){
        return(
            <div className={classes.Modal}>
                <Modal/>
            </div>
           
        );
    }
}

export default Posts;