import {
  
    Button,
  
    TextField,
    MenuItem,
  
  } from "@mui/material";
  
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
  import IconButton from '@mui/material/IconButton';
  import InputAdornment from '@mui/material/InputAdornment';
   import { useState } from "react";
   import { useFormik } from "formik";
export default function Registration()
{   
  const initialValues={
    full_name:"",
    user_name:"",
    phone_no:"",
    email:"",
    cnic:"",
    type:"",
    password:""

  }
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    
    onSubmit: (values, action) => {
    console.log(values);
      action.resetForm();
    },
  });
    return (
        <div div style={{paddingLeft:"370px",paddingTop:"30px",width:"100px"}}>
            <h2>Registration</h2>
            <TextField
              id="outlined-basic"
              name="full_name"
              label="Full Name"
              variant="outlined"
              value={values.full_name}
              onChange={handleChange}
              placeholder="RANA ABOBAKAR"
             
              required
              style={{
                paddingBottom: "10px",
                paddingRight: "10px",
                width: "60ch",
              }}
            />
            <TextField
              id="outlined-basic"
              name="user_name"
            
              label="User Name"
              variant="outlined"
              placeholder="abobakar-it"
              required
              value={values.user_name}
              onChange={handleChange}
              style={{
                paddingBottom: "10px",
                paddingRight: "10px",
                width: "60ch",
              }}
            />{" "}
            <br />
            <TextField
              id="outlined-basic"
              name="email"
          
              label="Email"
              variant="outlined"
              placeholder="example@gmail.com"
              value={values.email}
              onChange={handleChange}
              style={{
                paddingBottom: "10px",
                paddingRight: "10px",
                width: "60ch",
              }}
            />
            <TextField
              id="outlined-basic"
              name="phone_no"
           
              label="Phone No"
              variant="outlined"
              placeholder="03147593927"
              value={values.phone_no}
              onChange={handleChange}
              style={{
                paddingBottom: "10px",
                paddingRight: "10px",
                width: "60ch",
              }}
            />{" "}
            <TextField
              
              id="outlined-select-currency"
            
          
              label="CNIC"
              name="cnic"
              value={values.cnic}
              onChange={handleChange}
              style={{
                width: "60ch",
                paddingRight: "10px",
                paddingBottom: "10px",
              }}

              //helperText="You are Farm Owner, Customer or Doctor"
            >
              
            </TextField>
            <TextField
              select
          
              id="outlined-select-currency"
              
              label="You are Farm Owner, Customer or Doctor"
              name="type"
              value={values.type}
              onChange={handleChange}
              style={{
                width: "60ch",
                paddingRight: "10px",
                paddingBottom: "10px",
              
              }}
              place=""
              //helperText="You are Farm Owner, Customer or Doctor"
            >
              <MenuItem key="1" value="farm">
                Farm Owner
              </MenuItem>
              <MenuItem key="2" value="customer">
                Customer
              </MenuItem>
              <MenuItem key="3" value="doctor">
                Doctor
              </MenuItem>
            </TextField>
            <TextField
              id="outlined-basic"
              name="password"            
              label="Password"
              variant="outlined"
              placeholder="password"
              required
              value={values.password}
              onChange={handleChange}
              style={{
                paddingBottom: "10px",
                paddingRight: "10px",
                width: "60ch",
              }}

              type={showPassword ? 'text' : 'password'}
           
               
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
              onClick={handleClickShowPassword}
              >

                      {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                      </IconButton>
                    
                    </InputAdornment>
                  )
                }}
               
              

            />{" "}
            <br />
            
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
    )
}
