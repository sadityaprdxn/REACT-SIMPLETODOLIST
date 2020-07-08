import React, {Component} from 'react';

class Li extends Component {

    render() {
      return (
            <li>
                <span>{this.props.content}</span>
                <a href="#FIXME" className="delete" onClick={() => this.props.deleteItem(this.props.uniqueId)}>delete</a>
            </li>
        );
    }
  
}

export default Li;
