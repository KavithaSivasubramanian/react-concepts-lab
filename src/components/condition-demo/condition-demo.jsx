export function ConditionDemo(){
    function handleSignInClick(){
    sessionStorage.setItem("uname", "Kavitha");
    location.reload();
    }
    function handleSignOutClick(){
    sessionStorage.removeItem("uname");
    location.reload();
    }
    return(
        <div className="container-fluid p-4">
            <h3>Conditional Render</h3>
            <nav className="d-flex justify-content-between p-2 border border-1">
             <div className="fs-4 fw-bold">Shopping</div>
             
             <div>
                {(sessionStorage.getItem("uname")===null?<button className="btn btn-info" onClick={handleSignInClick}>SignIn</button>:<div><span>{sessionStorage.getItem("uname")}</span><button className="btn bi bi-link" onClick={handleSignOutClick}>Sign Out</button></div>)}
             </div>
            </nav>

        </div>
    )
}