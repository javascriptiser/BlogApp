import React from "react";
import s from './login.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


let Login = (props) => {

    return <div className={s.loginWrapper}>{
        <div className={s.form}>
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Логин</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"
                                   placeholder="Login" name="login"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Пароль</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   placeholder="Password" name="password"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-primary btn-sm"
                            >Войти
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
    </div>
}
export default Login