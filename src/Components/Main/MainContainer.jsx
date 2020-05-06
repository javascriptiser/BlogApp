import React from "react";
import Main from "./Main";
import {connect} from "react-redux";
class MainContainer extends React.Component {


    componentDidMount() {

    }


    render() {
        return (
            <Main currentIdUser={this.props.currentIdUser}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        currentIdUser: state.Auth.currentUser
    }
}

export default connect(mapStateToProps, {})(MainContainer);
