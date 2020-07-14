import React from 'react';

class GuidanceItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td><img src={this.props.image} alt={this.props.title}/></td>
                <td>{this.props.description}</td>
                <td>{'⭐️'.repeat(this.props.stars)}</td>
                <td>{this.props.isPriority ? 'YES' : 'NO'}</td>
            </tr>
        )
    }

}

export default GuidanceItem;