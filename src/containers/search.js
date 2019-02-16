import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//we need search-action
import { onUserSearch } from '../actions/search-action';

class Search extends Component {
    timeout = null;
    state = {
        keyword: ''
    }

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    }

    // componentWillReceiveProps(nxtProps) {
    //     let { searchKeyword } = this.props;

    //     if (nxtProps.searchKeyword !== searchKeyword) {
    //         this.setState({ keyword: this.props.searchKeyword });
    //     }
    // }
    
    componentDidMount() {
        let { searchKeyword } = this.props;
        this.setState({ keyword: searchKeyword });

    }

    handleInputChange(e) {
        const val = e.target.value;
        this.setState({ keyword: val });
    }

    handleInputKeyUp(e) {
        const { keyword } = this.state;
        clearTimeout(this.timeout);

        if (keyword !== '') {
            this.timeout = setTimeout(() => {
                // console.log('TIMEOUT: make a call for api');
                //calling redux method to fetch resultss
                this.props.onSearch(keyword);
            }, 500);
        }
    }

    renderLoader() {
        // const { loaderFlag } = this.state;
        // if (loaderFlag) {

        // }
        return (<div className="loaderWrapper">
            <div className="dot-loader"><span className="loaderButton"></span></div>
        </div>);
    }

    render() {

        return (
            <div className="search-panel">

                {this.props.searchLoaderStatus ? this.renderLoader() : ''}

                <input type="text" name="search"
                    className="search-input float-left"
                    placeholder="Search users here"
                    value={this.state.keyword}
                    onKeyUp={this.handleInputKeyUp}
                    onChange={this.handleInputChange}
                />
                <input type="button" name="btnClearSearch"
                    className="btn close float-right"
                    value="Clear"
                    onClick={() => this.setState({ keyword: '' })} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchKeyword: state.searchKeyword,
        searchLoaderStatus: state.searchLoaderStatus
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onSearch: onUserSearch
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Search);
