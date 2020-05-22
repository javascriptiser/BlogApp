import React from "react";
import s from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {editPostThunkCreator, setAddSuccess} from "../../../redux/reducers/posts-reducer";

class EditPostForm extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.editPost != prevProps.editPost) {
            this.props.initialize({title: this.props.editPost.Title, content: this.props.editPost.Content})
        }
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <Field placeholder={this.props.editPost.Title} name={"title"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={this.props.editPost.Content} name={"content"} component={"textarea"} rows={8}
                           cols={80}/>
                </div>
                <div>
                    <button>EDIT POST</button>
                </div>
            </form>
        );
    }
}


let MyPostsDetail = (props) => {
    const onSubmit = (formData) => {
        props.editPostThunkCreator(props.idUser, props.editPost.idPost, formData.title, formData.content);
    }
    if (props.addSuccess) {
        props.setAddSuccess(false)
        return <Redirect to={"/Blog/MyPosts"}/>
    }

    return <div className={s.MyPostsDetailsWrapper}>
        <EditPostReduxFormWithProps onSubmit={onSubmit}/>
    </div>
}

let mapStateToPropsEditPostForm = (state) => {
    return {
        editPost: state.Posts.editPost
    }
}
let mapStateToPropsMyPostDetail = (state) => {
    return {
        addSuccess: state.Posts.addSuccess,
        editPost: state.Posts.editPost,
        idUser: state.Auth.currentUser.idUser
    }
}
let EditPostReduxFormWithProps = connect(mapStateToPropsEditPostForm)(reduxForm({
    form: 'editForm',
    initialValues: {title: 'asd'},
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(EditPostForm))

export default connect(mapStateToPropsMyPostDetail, {editPostThunkCreator, setAddSuccess})(MyPostsDetail);