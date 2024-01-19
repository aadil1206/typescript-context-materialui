
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import {useContext} from "react";

import { useLocalStorage } from "../LocalStorage/LocalStorage";
import Logincontext from "../context/logincontext";

interface FormValues {
    name: string;
    mobileNumber: string;
    email: string;
    
    
    
  }

const Login = () => {
  const {setopen,open} =useContext(Logincontext)
  
  const navigate = useNavigate();
  {console.log(open)}
  const handleSubmit = () => {
     navigate('/page');
  };
  
  
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        mobileNumber: Yup.string()
        .matches(/^[1-9]{1}[0-9]{6,}/, "Mobile Number must be a valid  number")
          .required('Mobile number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
       
      });
 const {setItem} =useLocalStorage('values')

  return (
    <div className="col-6">
    <Formik <FormValues>
      initialValues={{
        name: "",
        mobileNumber:  "",
        email: ""
       
      }}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        setItem(values)
         setopen(true)
        console.log(values)
      }}    >
           {({
                      values,
                      
                      handleBlur,
                      handleChange,
                     
                    })=>(
      <Form>
        <div className="col-12 rounded-2 bg-white p-4">
          <div className="row justify-content-between">
            <div className="col-12 mt-3 flex-column d-flex c100">
              <label htmlFor="name">Your Name</label>
              
              <TextField id="outlined-basic" label="Enter here" variant="outlined"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name" />
              <ErrorMessage
                name="name"
                component="div"
              
               
                className="error-message"
              />
            </div>
            <div className="col-12 mt-3 flex-column d-flex c100">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <TextField id="outlined-basic" label="Enter Mobile No. here" variant="outlined" name="mobileNumber" type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobileNumber}/>
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="error-message"
                
               
              />
            </div>
            <div className="col-12 mt-3 flex-column d-flex c100">
              <label htmlFor="email">Email Address</label>
              <TextField id="outlined-basic" label="Enter email here" variant="outlined"  name="email" type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}/>
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
                
               
              />
            </div>
          </div>
        
         
         
          <Button variant="contained" type="submit" onClick={handleSubmit}>
      Submit
    </Button>
        </div>
      </Form>
                    )}</Formik>
  </div>
  )
}

export default Login
