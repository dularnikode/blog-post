import React,{Component} from 'react';

import {connect} from 'react-redux';

import Modal from '../../components/Modal/CreatePostModal/CreatePostModal';
//import classes from './Posts.module.css';
import axios from '../../axios-posts';
import Cards from '../../components/Cards/cards';
import Spinner  from '../../components/Spinner/Spinner';

class Posts extends Component {

    state={
        post:{
            title:'',
            content:'',
            userId:''
        },
        allPosts:[],
        loading:false
    }
    

    componentDidMount(){
        if(this.props.isAuthenticatedToken){
            this.setState({loading:true});
            const fetchqueryParams='?auth='+this.props.isAuthenticatedToken+'&orderBy="userId"&equalTo="'+this.props.userId+'"';
            axios.get(`/posts.json${fetchqueryParams}`)
            .then( response => {
                //console.log("response Data[posts.js]",response.data);
                const fetchedPosts= [];
                for ( let Key in response.data ) {
                    fetchedPosts.push( {
                        ...response.data[Key],
                        id:Key
                    });
                }
                //console.log("fetched posts[Posts.js]",fetchedPosts);
                this.setState({
                    allPosts:fetchedPosts,
                    loading:false
                });
            })
            .catch(error=>{
                this.setState({
                    loading:false
                });
                console.log(error);
            })
        }
    }

    deletePostHandler=(deleteId)=>{
        console.log(deleteId);
        if(window.confirm('Are you sure to delete this Post ?')){
            axios.delete(`posts/${deleteId}.json?auth=${this.props.isAuthenticatedToken}`)
            .then(response=>{
                alert("Post deleted sucessfully");
                let postsAfterDelete=this.state.allPosts;
                let toDeleteIndex=postsAfterDelete.findIndex((post)=>{
                    if(post!==null && post.id===deleteId){return true;}
                });
                postsAfterDelete.splice(toDeleteIndex,1);
                this.setState({allPosts:postsAfterDelete});
            })
            .catch(error=>{
                console.error(error);
            })
        }
    }

    inputChangedHandler=(event)=>{
        let updatedPost={...this.state.post};
        updatedPost[event.target.name]=event.target.value;
        this.setState({post:updatedPost});
    }


    postDataHandler=()=>{
        if(this.props.isAuthenticatedToken){
            const postData={...this.state.post,userId:this.props.userId};
            console.log("databefore post",postData);
            axios.post('/posts.json?auth='+this.props.isAuthenticatedToken,postData)
            .then( response => {
                alert("Post added successfully !");
                console.log(response.data);
                this.setState(prevState=>(
                    prevState.allPosts.push({...postData,id:response.data.name})
                )); 
            })
            .catch(error=>{
                console.log(error);
                this.setState({
                    loading:false
                })
            })
        }
        else{
            this.props.history.push('/login');
        }
    }

    editInputChangedHandler=(event,editPostId)=>{
        event.preventDefault();
        let toEditPostsArray=[...this.state.allPosts];
        let toEditIndex=toEditPostsArray.findIndex((post)=>post.id===editPostId);
        toEditPostsArray[toEditIndex][event.target.name]=event.target.value;
        //this.toupdatePost[event.target.name]=event.target.value;
        this.setState({
            post:toEditPostsArray[toEditIndex]
        });
        this.setState({
            allPosts:toEditPostsArray
        });
    }

    onUpdateHandler =(updateId)=>{ 
        if(this.props.isAuthenticatedToken){
            const updatedPost={...this.state.post};
            axios.patch(`posts/${updateId}.json?auth=${this.props.isAuthenticatedToken}`,updatedPost)
            .then(response => {
                    console.log(response);
                    alert("Post Edited Sucessfully");
            })
            .catch(error => {
                console.log(error);
            });
        }
        else{
            this.props.history.push('/login');
        }
        
    }

    render(){
        let cards=(
            <Cards
            deletePostHandler={this.deletePostHandler} 
            allPosts={this.state.allPosts}
            editInputChangedHandler={this.editInputChangedHandler}
            onUpdateHandler={null}/>
        );
        if(this.state.loading){
            cards=(<Spinner/>);
        }
        return(
            <>
                <Modal 
                    inputChangedHandler={this.inputChangedHandler}
                    postDataHandler={this.postDataHandler}/> 
                {cards}                   
            </>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        isAuthenticatedToken:state.token,
        userId:state.userId,
    }
};
export default connect(mapStateToProps)(Posts);