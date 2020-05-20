import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {


    componentDidMount() {

    }


    render() {
        return (
            <Header userLoginText={this.props.userLoginText}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        userLoginText : state.Auth.currentUser.login
    }
}

export default connect(mapStateToProps, {})(HeaderContainer);
