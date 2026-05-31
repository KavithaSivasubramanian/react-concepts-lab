import "./login.css";
export function Login(){
    return(
        <div className="login-form">
            
            <form className="form-style">
                <h2 className="bi bi-person-circle">User Login</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control"/></dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </div>
    )
}