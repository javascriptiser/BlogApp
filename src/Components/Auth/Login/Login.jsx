import React from "react";
import s from './login.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


let Login = (props) => {
    //  let bodyParams = {
    //     login: 'qspeak',
    //     password: 'barbariska'
    // }
    let loginValue = React.createRef()
    let passwordValue = React.createRef()

    let onSubmit = (loginValueInput, passwordInput) => {
        props.onSubmit({login: loginValueInput.current.value, password: passwordInput.current.value})
    }
    return <div className={s.loginWrapper}>{
        <div className={s.form}>
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Логин</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                               placeholder={props.authData.login ? props.authData.login : "Login"} name="login"
                               ref={loginValue}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Пароль</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                               placeholder={props.authData.password ? props.authData.password : "Password"}
                               name="password" ref={passwordValue}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="not_attach_ip"/> Не прикреплять к IP (не безопасно)
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-primary btn-sm" onClick={() => {
                            onSubmit(loginValue, passwordValue)
                        }}
                        >Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }
    </div>
}
export default Login