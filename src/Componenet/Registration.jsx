import { Button, TextField, MenuItem } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RegistrationSchema } from "../Schemas/index";
import { setData } from "../Redux/Slice/registerSlice";
import { useFormik } from "formik";
export default function Registration() {
  const dispatch = useDispatch();
  const initialValues = {
    full_name: "",
    user_name: "",
    phone_no: "",
    email: "",
    cnic: "",
    type: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
   validationSchema:RegistrationSchema,
      onSubmit: (values, action) => {
        console.log(errors);
        dispatch(setData(values));
        action.resetForm();
      },
    });
  return (
    <div
      div
      style={{ paddingLeft: "370px", paddingTop: "30px", width: "100px" }}
    >
      <h2>Registration</h2>
      <TextField
        id="outlined-basic"
        name="full_name"
        label="Full Name"
        variant="outlined"
        value={values.full_name}
        onChange={handleChange}
     
        onBlur={handleBlur}
        placeholder="RANA ABOBAKAR"
        // error={errors.full_name&&touched.full_name}
        helperText={errors.full_name && touched.full_name ? (
          <small style={{color:"red"}}>{errors.full_name}</small>
        ) : null}
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
       // error={errors.user_name&&touched.user_name}
         helperText={errors.user_name && touched.user_name ? (
          <small style={{color:"red"}}>{errors.user_name}</small>
        ) : null}

        label="User Name"
        variant="outlined"
        placeholder="abobakar-it"
        required
        value={values.user_name}
        onChange={handleChange}
        onBlur={handleBlur}
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
        // error={errors.email&&touched.email}
        helperText={errors.email && touched.email ? (
          <small style={{color:"red"}}>{errors.email}</small>
        ) : null}
        variant="outlined"
        placeholder="example@gmail.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
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
        // error={errors.phone_no&&touched.phone_no}
        helperText={errors.phone_no && touched.phone_no ? (
          <small style={{color:"red"}}>{errors.phone_no}</small>
        ) : null}
        variant="outlined"
        placeholder="03147593927"
        onBlur={handleBlur}
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
        
        // error={errors.cnic&&touched.cnic}
        helperText={errors.cnic && touched.cnic ? (
          <small style={{color:"red"}}>{errors.cnic}</small>
        ) : null}
        value={values.cnic}
        onBlur={handleBlur}

        onChange={handleChange}
        style={{
          width: "60ch",
          paddingRight: "10px",
          paddingBottom: "10px",
        }}

        //helperText="You are Farm Owner, Customer or Doctor"
      ></TextField>
      <TextField
        select
        onBlur={handleBlur}

        id="outlined-select-currency"
        label="You are Farm Owner, Customer or Doctor"
        name="type"
       // error={errors.type&&touched.type}
       helperText={errors.type && touched.type ? (
        <small style={{color:"red"}}>{errors.type}</small>
      ) : null}
   
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
        onBlur={handleBlur}

        label="Password"
       // error={errors.password&&touched.password}
        
       helperText={errors.password && touched.password ? (
        <small style={{color:"red"}}>{errors.password}</small>
      ) : null}
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
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />{" "}
      <br />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
