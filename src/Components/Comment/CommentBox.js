import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import axios from 'axios'

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: '/MockJson/comments.json',
            responseType:'json',
            // transformRequest: [function (data, headers) {
            //   // Do whatever you want to transform the data
        
            //   return JSON.stringify(data);
            // }],
        }).then(res => {
            this.setState({ data: res.data})
        }).catch(function (error) {
            console.log(error);
        })
    }
    handleSubmit(author, text) {
        let comments = this.state.data,
            newComment = { author: author, text: text, date: '刚刚' }
        this.setState({
            data: comments.concat(newComment)
        })
    }
    render() {
        return (
            <div style={styles.commentBox}>
                <h1 style={styles.header}>评论</h1>
                {/* <Divider/> */}
                <div className="ui divider"></div>
                <CommentList data={this.state.data}/>
                <CommentForm handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}
const styles = {
    commentBox: {
        width: '80%',
        marginTop: '10%'
    },
    header: {
        textAlign: 'left',
        paddingLeft: '10%'
    }
}
export {
    CommentBox as
    default
}