import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMore } from '../actions/pagination-action';

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(e) {
        const navInfo = JSON.parse(e.target.dataset.navInfo);
        console.log(navInfo);

        if (Object.keys(navInfo).length)
            this.props.loadMore(navInfo);
    }

    componentDidMount() {
        const pageNavButton = document.querySelector('.page-nav');
        if(pageNavButton) pageNavButton.addEventListener('click', this.handleNavigation);

    }

    componentDidUpdate(prevProps) {
        if (prevProps.pagination !== this.props.pagination) {
            this.createPaginationButton();
        }
    }

    componentWillUnmount() {
        const pageNavButton = document.querySelector('.page-nav');
        if(pageNavButton) pageNavButton.removeEventListener('click', this.handleNavigation);
        console.log('will unmount pagination');
    }

    createPaginationButton() {
        const { pagination } = this.props;
        const uiButtons = ["first", "prev", "next", "last"];
        if (pagination) {
            return uiButtons.map((item, i) => (<button key={i + 1}
                className="btn btn-small page-nav text-capitalize"
                type="button"
                disabled={pagination[item] === undefined ? "disabled" : false}
                data-nav-info={pagination[item] !== null ? JSON.stringify(pagination[item.toLowerCase()]) : ''}
                onClick={this.handleNavigation}>{item}</button>));
        }
    }

    render() {

        return (
            <div className="text-center pagination">
                {/* <PageButtonArray /> */}
                {this.createPaginationButton()}

                {/* <button className="btn btn-large"
                    onClick={this.handleLoadMore}
                >Load More</button> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { pagination: state.pagination }
};
const matchDispatchToProps = dispatch => bindActionCreators({
    loadMore
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Pagination);
