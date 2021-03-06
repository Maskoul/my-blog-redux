import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../redux/actions/posts';


export class AddPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.startAddPost(post);
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className='content-container'>
                <h1>Add new post</h1>
                <PostForm
                    onSubmit={this.onSubmit}
                    />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);