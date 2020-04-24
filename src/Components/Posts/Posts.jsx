import * as React from "react";
import * as axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Posts extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:4000/api/posts")
            .then(response => {
                this.props.showPosts(response.data.results)
            })
    }


    render() {
        return (
            <div>
                {
                    this.props.posts.map(p => <div key={p.idPost}> {
                        <div className={"wrapper"}>
                            <div>
                                <h1>{p.Title}</h1>
                                <h4>Дата создания : {p.DateCreated}</h4>
                            </div>
                        </div>
                    }</div>)
                }
            </div>
        )
    }
}

export default Posts