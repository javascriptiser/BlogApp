import React from "react";
import UserDetails from "./UserDetails";
import {connect} from "react-redux";
import {setUserDetails} from "../../../redux/reducers/user-details-reducer";
import * as axios from "axios";
import {withRouter} from "react-router";

class UserDetailsContainer extends React.Component {
    componentDidMount() {
        let idUser = this.props.match.params.idUser;
        if (!idUser) {
            idUser = 1
        }
        axios.get(`http://localhost:4000/api/user/${idUser}`)
            .then(response => {
                this.props.setUserDetails(response.data.users)
            })
    }


    render() {
        return <> {
            <UserDetails userDetails={this.props.userDetails}/>
        }</>
    }

}

let mapStateToProps = (state) => {
    return {
        userDetails: state.UserDetailsPage.userDetails,
    }
}
let UserDetailsContainerWithRouter = withRouter(UserDetailsContainer)
export default connect(mapStateToProps, {setUserDetails})(UserDetailsContainerWithRouter)