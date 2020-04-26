import * as React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsers} from "../../redux/reducers/users-reducer";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:4000/api/users`)
            .then(response => {
                this.props.setUsers(response.data.users)
            })
    }


    render() {
        return <>
            <Users users={this.props.users}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
    }
}

export default connect(mapStateToProps, {setUsers})(UsersContainer)