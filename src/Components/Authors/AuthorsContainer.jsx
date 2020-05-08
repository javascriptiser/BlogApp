import React from "react";
import Authors from "./Authors";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {
    changeAuthorsPageThunkCreator,
    getAuthorsThunkCreator,
} from "../../redux/reducers/authors-reducer";


class AuthorsContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthorsThunkCreator(this.props.currentPage, this.props.authorsOnPage)
    }

    render() {
        return (
            <Authors
                authors={this.props.authors}
                authorsCount={this.props.authorsCount}
                currentPage={this.props.currentPage}
                authorsOnPage={this.props.authorsOnPage}
                changeAuthorsPageThunkCreator={this.props.changeAuthorsPageThunkCreator}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authors: state.Authors.authors,
        authorsCount: state.Authors.authorsCount,
        currentPage: state.Authors.currentPage,
        authorsOnPage: state.Authors.authorsOnPage
    }
}

let withRouterPostsContainer = withRouter(AuthorsContainer)
export default connect(mapStateToProps,
    {
        getAuthorsThunkCreator, changeAuthorsPageThunkCreator
    })(withRouterPostsContainer)
