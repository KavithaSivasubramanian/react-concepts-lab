export function TimeoutDemo(){
   function handleSignIn(){
    sessionStorage.setItem("uname","kavitha");
    alert("Signed In");
    setTimeout(handleSignOut,10000);
   }
   function handleSignOut(){
        alert("Time out, you are Signed Out");
        sessionStorage.removeItem("uname");
        window.location.reload();
   }

    return(
        <div className="p-4">
            <button  onClick={handleSignIn}>SignIn</button>
        </div>
    )
}