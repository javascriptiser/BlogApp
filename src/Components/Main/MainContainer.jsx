import React from "react";
import Main from "./Main";
import {connect} from "react-redux";
class MainContainer extends React.Component {


    componentDidMount() {

    }


    render() {
        return (
            <Main/>
        )

    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(MainContainer);
