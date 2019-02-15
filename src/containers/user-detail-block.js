import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlockData } from '../actions/user-detail-action';

// import 
class UserDetailBlock extends Component {
    state = {
        blockData: []
    }
    componentDidMount() {

        if (this.props.apiURL) {
            fetchBlockData(this.props.apiURL)
                .then(data => {
                    // console.log(data);
                    this.setState({ blockData: data });
                    // this.buildBlockData(data);
                    return data;
                })
                .catch(err => new Error(console.error(err)));
        }
    }

    buildBlockData(data) {
        const { blockData } = this.state;

        if (!blockData.length) return (<p className="text-left">...building block...</p>);

        const items = blockData.map(item => {
            return (
                <li key={item.id}>
                    <a href={item.html_url} rel="noopener noreferrer" target="_blank">{item.login ? item.login : item.name} <small>(external)</small></a>
                </li>
            )
        });
        return (<ul className="block-list">{items}</ul>);
    }


    render() {

        const { blockData } = this.state;
        const { cssClasses, title } = this.props;
        if (blockData.length) {
            return (
                <div className={cssClasses}>
                    <h3>{title} {this.state.blockData.length !== 0 ? (<span className="badge badge-small">{`${this.state.blockData.length}`}</span>) : ''}</h3>
                    {this.buildBlockData()}
                </div>
            )
        } else {
            return (
                <div className={cssClasses}>
                    <h3>{title} <span className="badge badge-small">{this.state.blockData.length !== 0 ? this.state.blockData.length : ''}</span></h3>
                    Checking for data...</div>)
        }
    }
}

function mapStateToProps(state) {
    return {
    }
}
export default connect(mapStateToProps)(UserDetailBlock);
