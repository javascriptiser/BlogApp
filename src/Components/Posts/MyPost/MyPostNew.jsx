import React from "react";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {putNewPostThunkCreator, setAddSuccess} from "../../../redux/reducers/posts-reducer";
import {connect} from "react-redux";
import s from "./MyPosts.module.css"

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Заголовок"} className={"form-control"} name={"title"} component={"input"}/>
            </div>
            <br/>
            <div>
                <Field placeholder={"Основной текст"} className={"form-control"} name={"content"} component={"textarea"}
                       rows={8} cols={80}/>
            </div>
            <br/>
            <div>
                <button className={"btn btn-primary"}>ADD NEW POST</button>
            </div>
        </form>
    );
}

let AddNewPostReduxForm = reduxForm({
    form: "newPost"
})(AddNewPostForm)


let MyPostNew = (props) => {
    const onSubmit = (formData) => {
        props.putNewPostThunkCreator(props.idUser, formData.title, formData.content);
    }
    if (props.addSuccess) {
        props.setAddSuccess(false)
        return <Redirect to={"/Blog/MyPosts"}/>
    }
    return <div className={s.MyPostNewWrapper}>
        <AddNewPostReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        addSuccess: state.Posts.addSuccess,
        idUser: state.Auth.currentUser.idUser
    }
}

export default connect(mapStateToProps, {setAddSuccess, putNewPostThunkCreator})(MyPostNew);