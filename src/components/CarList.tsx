import { Button, Grid, Typography, Box, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
import type { RootState } from '../store';

function CarList() {

    const dispatch = useDispatch()
    const {carsList, name} = useSelector((state:RootState) => {
        const {form, cars: {carsList, searchTerm}} = state
        return {
            carsList: carsList.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())),
            name: form.name
        }
    })
    const handleClick = (id: string) => {
        dispatch(removeCar(id))
    }
    const renderedList = carsList.map((car) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

        return (
            <Paper key={car.id} sx={{p:1}} elevation={2}>
            <Grid sx={{margin:2}}  container spacing={2} justifyContent="center">
                
                    <Grid  size={{xs: 8, sm:6, md:4, lg: 3}}  alignItems="center">
                        <Typography sx={{p:1,  fontWeight: `${bold && 'bold'}`}}>
                            {car.name} - {car.cost}
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 2, sm:2, md:2, lg: 1}}>
                        <Button 
                        onClick={() => handleClick(car.id) } 
                        fullWidth variant="contained"> 
                            Delete
                        </Button>
                    </Grid>
                
            </Grid>
            </Paper>
            )
        })
        
    return (
        <div>
            {renderedList && <Box component="section" sx={{ p: 2, margin:2 }}>
            {renderedList}
            </Box>}
        </div>
        
    )
}

export default CarList;