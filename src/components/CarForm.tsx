import { TextField, Grid, Button, Box } from "@mui/material";
import { addName, addCost, addCar } from "../store";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../store';
function CarForm() {
    const dispatch = useDispatch()
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addName(event.target.value))
    }
    const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addCost(Number(event.target.value) || 0))
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addCar({name, cost}))
    }
    const {name, cost} = useSelector((state: RootState) => {
        return state.form
    })
    
    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey',  margin:2}}>
        <Grid container spacing={2} component='form' justifyContent="center" onSubmit={handleSubmit}>
                <Grid size={{xs: 8, sm:6, md:4, lg: 3}}>
                    
                    <TextField 
                    onChange={handleNameChange}
                    fullWidth
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined"
                    helperText="Please enter your car name"
                    value={name}
                    />
                    
                </Grid>
                <Grid size={{xs: 8,sm:6,md:4, lg: 3}}>
                    
                    <TextField 
                    fullWidth
                    onChange={handleCostChange}
                    id="outlined-basic" 
                    label="Cost" 
                    variant="outlined"
                    helperText="Please enter the cost of your car"
                    value={cost || "" }
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