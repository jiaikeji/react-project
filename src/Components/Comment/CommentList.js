import React from 'react';
import Comment from './Comment'

class CommentList extends React.Component {
    render() {
        let comments = this.props.data.map((item, index) => {
            return (
                <Comment author={item.author} date={item.date} text={item.text} key={index}/>
            )    
        })
        return (<div className="ui list">{comments}</div>)
    }
}

export { CommentList as default }