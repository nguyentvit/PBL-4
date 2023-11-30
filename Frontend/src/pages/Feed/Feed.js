import React, { Component, Fragment } from 'react';

class Feed extends Component {
    state = {
        isEditing: false,
        posts: [],
        totalPosts: 0,
        editPost: null,
        status: '',
        postPage: 1,
        postsLoading: true,
        editLoading: false
    }
    componentDidMount() {
        fetch('http://localhost:3030/feed/user', {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch user status.');
                }
                return res.json();
            })
            .then(resData => {
                this.setState({status: resData.status})
            })
            .catch(this.catchError);
        this.loadUser();
    }

    loadUser = direction => {
        
    }

    errorHandler = () => {
        this.setState({ error: null });
      };
    catchError = error => {
        this.setState({ error: error });
      };
}