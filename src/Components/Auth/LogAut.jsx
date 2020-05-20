import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {NavLink} from "react-router-dom";
import React from "react";

let LogAut = (props) => {
    return (
        <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.userLoginText}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink to="/auth" className={'dropdown-item'}>Выйти</NavLink>
            </div>
        </div>
    )
}

export default LogAut