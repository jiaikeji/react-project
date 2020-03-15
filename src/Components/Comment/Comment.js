import React from 'react';
import { Divider } from 'semantic-ui-react'

class Comment extends React.Component {
    render() {
        return (
            <div className="item">
                {/* <div className="ui avatar">{this.props.author}</div> */}
                <div className="content">
                    <div>
                        <div className="ui grid">
                            <div className="eight wide column header" style={{ marginBottom: '10px' }}>{this.props.author}</div>
                            <div className="eight wide column extra">{this.props.date}</div>
                        </div>
                    </div>
                    <div className="description" style={{ textAlign: 'left', paddingLeft: '17%' }}>{this.props.text}</div>
                </div>
                <Divider/>
            </div>
        )
    }
}

export default Comment;