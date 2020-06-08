import React,{Component} from 'react';

import {connect} from 'react-redux';

import Modal from '../../components/Modal/Modal';
import classes from './Posts.module.css';
import axios from '../../axios-posts';
class Posts extends Component {
    state={
        post:{
            title:'',
            content:'',
            userId:''
        },
        allPosts:[]
    }
    inputChangedHandler=(event)=>{
        let updatedPost={...this.state.post};
        updatedPost[event.target.name]=event.target.value;
        this.setState({post:updatedPost});
        console.log("postData",this.state.post);
    }
    postDataHandler=()=>{
        if(this.props.isAuthenticatedToken){
            const postData={...this.state.post,userId:this.props.userId};
            console.log("databefore post",postData);
            axios.post('posts.json?auth=' + this.props.isAuthenticatedToken,postData)
            .then( response => {
                console.log( response.data );
                alert("Post added successfully !");
                this.setState(prevState=>(
                    prevState.allPosts.push({...postData,id:response.data.name})
                ));
            })
            .catch(error=>{
                console.log(error);
            })
        }
        else{
            this.props.history.push('/login');
        }
    }
    render(){
        return(
            <>
                <div className={classes.Modal}>
                    <Modal 
                    inputChangedHandler={this.inputChangedHandler}
                    postData={this.postDataHandler}/>
                </div>
            </>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        isAuthenticatedToken:state.token,
        userId:state.userId
    }
};
export default connect(mapStateToProps)(Posts);