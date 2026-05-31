//import {useRef} from"react"
import {useFormik} from "formik"
export function FormDemo(){
    //using e.target.fieldName.value - console.log({username:e.target.username.value,password:e.target.password.value});
    

     /*function handleSubmit(e){
     e.preventDefault();
     
     }*/
   //using “useRef()” hook for configuring reference memory for HTML form elements, so that you can access the value of element using reference.
   //console.log({username:nameRef.current.value,password:passwordRef.current.value});
    
    /*let nameRef = useRef();
    let passwordRef = useRef();
    let emailRef = useRef();
    let mobileRef = useRef();*/

   //using FormData() API
     //let data = new FormData(e.target);
     //console.log({username:data.get("username"),password:data.get("password")});

    function ValidateUser(user){
      var errors = {};
      if(user.username.length===0){
        errors.username = "Username is required";
      }
        else{
          if(user.username.length <=3){
            errors.username = "Username must be atleast 4 characters";
          }
         
        }
      if(user.mobile.length===0){
        errors.mobile = "Mobile number is required";
      }
        else{
          if(!user.mobile.match(/^\+91\d{10}$/)){
            errors.mobile = "Mobile no should start with +91 and followed by 10 digit";
          }
          
        }
      return errors;
    }

     //Using useFormik() hook from formik - third party library
     const userData = useFormik({
       initialValues:{
        username:'',
        password:'',
        email:'',
        mobile:''
       },
       validate:ValidateUser,
       onSubmit:(user)=>{
       console.log("Submitted");
       console.log(user);
       }
     })

    return(
        <div className="container-fluid p-3">
        <h3>Register</h3>
        <form /*onSubmit={handleSubmit}*/ onSubmit={userData.handleSubmit}>
        <dl>
            <dt>Username</dt>
            <dd><input type="text" name="username" /*ref={nameRef} value={nameRef.current}*/onChange={userData.handleChange} value={userData.values.username}/></dd>
            <dd><div className="text-danger">{userData.errors.username}</div></dd>
            <dt>Password</dt>
            <dd><input type="text" name="password" /*ref={passwordRef} value={passwordRef.current}*/ onChange={userData.handleChange} value={userData.values.password}/></dd>
            <dt>Email</dt>
            <dd><input type="text" name="email" /*ref={emailRef} value={emailRef.current}*/ onChange={userData.handleChange} value={userData.values.email}/></dd>
            <dt>Mobile</dt>
            <dd><input type="text" name="mobile" /*ref={mobileRef} value={mobileRef.current}*/ onChange={userData.handleChange} value={userData.values.mobile}/></dd>
            <dd><div className="text-danger">{userData.errors.mobile}</div></dd>
            <button type="submit">Submit</button>
        </dl>
        </form>
        </div>
    )
}