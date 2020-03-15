import React from 'react';
import { Button } from 'semantic-ui-react'

class CommentForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault()
        this.props.handleSubmit(this.refs.author.value, this.refs.text.value)
    }
    render() {
        return (
            <form className="ui form" style={{ marginLeft: '10%' }} onSubmit={this.handleSubmit.bind(this)}>
                <h4 className="ui dividing header" style={{ textAlign: 'left' }}>发表评论</h4>
                <div className="field">
                    <input ref="author" type="text" name="author" placeholder="请输入名字"/>
                </div>
                <div className="field">
                    <label style={{ textAlign: 'left' }}>请输入您的评论</label>
                    <textarea ref="text" name="text"></textarea>
                </div>
                <div style={{ textAlign: 'left' }}>
                    <Button color="blue" type="submit">发表</Button>
                </div>
            </form>
        )
    }
}

export default CommentForm;