import { ErrorMessage, Field, Form, Formik } from "formik";
import *as yup from "yup";

export function FormikComponentDemo(){
    return(
        <div className="container-fluid p-4 "> 
            <h3>Registration</h3>
            <Formik initialValues={{}} validationSchema={yup.object({username:yup.string().required("Name is required").min(4,"Name should contain minimum 4 characters"),
                                            mobile:yup.string().required("Mobile no is required").matches(/^\+91\d{10}$/,"Mobile no should start with +91 followed by 10 digits")
            })} onSubmit={(user)=>{console.log(user)}}  >
                {
                userData =>
                <Form>
                    <dl>
                    <dt>UserName</dt>
                    <dd><Field type="text" name="username" ></Field></dd>
                    <dd className="text-danger"><ErrorMessage name="username"></ErrorMessage></dd>
                    <dd><Field  type="text" name="mobile"></Field></dd>
                    <dd className="text-danger"><ErrorMessage name="mobile"></ErrorMessage></dd>
                    </dl>
                    <button type="submit" disabled={(userData.isValid ? false:true)} className="mx-2">Submit</button>
                    <button type="submit" className={(userData.dirty ? 'd-inline':'d-none')}>Save</button>
                </Form>
                } 
            </Formik>

        </div>
    )
}