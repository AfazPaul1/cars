import { changeSearchTerm } from "../store"
import { Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from '../store';
function CarSearch() {

    const dispatch = useDispatch()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchTerm(event.target.value))
        
    }
    const searchTerm = useSelector((state: RootState) => {
        return state.cars.searchTerm
    })

    return (
        <Grid container>
            <Grid size={7}>
                <div></div>
            </Grid>
            <Grid sx={{margin:1}} size={4}>
                <TextField
                onChange={handleChange} 
                fullWidth
                label="Search" 
                variant="outlined"
                helperText="Search for a car"
                value={searchTerm}
                >
                </TextField>
            </Grid>
        </Grid>
    )
}

export default CarSearch