import { useForm} from "react-hook-form";
import { Navbar } from "../../controlled-components/navbar";
export function HookFormDemo(){
    const{register,handleSubmit,formState:{errors}} = useForm();
    const submit =(data)=>{
        console.log(data);

    }
    return(
        <div className="container-fluid p-4">
            <Navbar theme='bg-warning text-white' brand="Shopping" menu={['Home','Shop','Pages','Docs','Blog','Offers']} />
            <Navbar theme='bg-danger text-white' brand="Amazon" menu={['Offers','Help','Mobiles','Fashion']} />
            
            <h3>Register</h3>
            <form onSubmit={handleSubmit(submit)}>
            <dl>
                <dt>Username</dt>
                <dd><input type = "text" name="username" {...register("username",{required:true,minLength:4})}/></dd>
                <dd className="text-danger" >{errors.username?.type==='required'?<span>Enter Username</span>:<span></span>&&
                     errors.username?.type==='minLength'?<span>Enter Username with atleast 4 characters</span>:<span></span>}</dd>

                <dt>Email</dt>
                <dd><input type = "email" name="email" {...register("email",{required:true,pattern:/^[A-Za-z0-9!$%_.-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/})}/></dd>
                <dd className="text-danger">
                    {
                        (errors.email?.type==="required")?<span>Email Required</span>:<span></span> &&
                        (errors.email?.type==="pattern")?<span>Invalid Email</span>:<span></span>
                    }
                </dd>

                <dt>Mobile</dt>
                <dd><input type = "text" name="mobile" {...register("mobile",{required:true,pattern:/^\+91\d{10}$/})}/></dd>
                <dd className="text-danger">{
                    (errors.mobile?.type==="required")?<span>Mobile Required</span>:<span></span> &&
                    (errors.mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>
                    }</dd>

                <button type="submit">Submit </button>
            </dl>
            </form>
        </div>
    )
}