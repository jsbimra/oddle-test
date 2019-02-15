import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMore } from '../actions/pagination-action';

class Pagination extends Component {
    state = {
        totalRecords: 0,
        prevCnt: 0,
        nextCnt: 0,
        currentPage: 1
    }

    constructor(props) {
        super(props);
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    handleLoadMore(e) {
        const { items } = this.props.records;
        if(items.length){

        }
    }

    componentWillMount() {
        if (this.props.records) {
            const totalRecords = this.props.records.items ? this.props.records.items.length : 0;
            this.setState({ totalRecords });
        }
    }

    render() {
        const { totalRecords } = this.state;

        console.log('totalRecords ', totalRecords);

        return (
            <div className="text-center">
                <button className="btn btn-large"
                    onClick={this.handleLoadMore}
                >Load More</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ loadMoreStatus: state.loadMoreStatus });
const matchDispatchToProps = dispatch => bindActionCreators({
    loadMore
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Pagination);
