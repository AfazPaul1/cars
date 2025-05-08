import { TextField, Grid, styled, Paper, Button, Box } from "@mui/material";
import { addName, addCost } from "../store";
import { UseSelector, useDispatch, useSelector } from "react-redux";
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#1A2027',
//     }),
//   }));
function CarForm() {
    const dispatch = useDispatch()
    const onNameChange = (event) => {
        dispatch(addName(event.target.value))
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} component='form' justifyContent="center">
                <Grid size={{xs: 8, sm:6, md:4, lg: 3}}>
                    
                    <TextField 
                    onChange={onNameChange}
                    fullWidth
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined"
                    helperText="Please enter your car name"
                    value={useSelector((state) => {
                        return state.form.name
                    })}
                    />
                    
                </Grid>
                <Grid size={{xs: 8,sm:6,md:4, lg: 3}}>
                    
                    <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Cost" 
                    variant="outlined"
                    helperText="Please enter the cost of your car"
                    value={0}
                    />
                    
                </Grid>
                <Grid size={{xs: 8,sm:6,md:4, lg: 3}}>
                    
                    <Button 
                    fullWidth
                    variant="contained"
                    
                    type="submit">
                        Sumbit
                    </Button>
                    
                </Grid>
        </Grid>
        
        </Box>
)
}

export default CarForm;