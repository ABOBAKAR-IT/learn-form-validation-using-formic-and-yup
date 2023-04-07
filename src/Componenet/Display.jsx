import { Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Dispaly(){
    const {full_name,
        user_name,
        phone_no,
        email,
        cnic,
        type,
        password}=useSelector(state=>state.register.person) 
    return(
<>
<Paper style={{textAlign:"center"}}>
    <h2>Show Data</h2>
    <Typography variant="h2">{full_name}</Typography>
    <Typography variant="h2">{user_name}</Typography>
    <Typography variant="h2">{email}</Typography>
    <Typography variant="h2">{cnic}</Typography>
    <Typography variant="h2">{type}</Typography>
    <Typography variant="h2">{password}</Typography>
</Paper>
</>
    )
}
