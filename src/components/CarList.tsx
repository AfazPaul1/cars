import { Button, Grid, Typography, Box, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {

    const dispatch = useDispatch()
    const carsList = useSelector(({cars: {carsList, searchTerm}}) => {
        return carsList.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
          }) 
    })
    const handleClick = (id) => {
        dispatch(removeCar(id))
    }
    const renderedList = carsList.map((car) => {
        return (
            <Paper key={car.id} sx={{p:1}} elevation={2}>
            <Grid sx={{margin:2}}  container spacing={2} justifyContent="center">
                
                    <Grid  size={{xs: 8, sm:6, md:4, lg: 3}}  alignItems="center">
                        <Typography sx={{p:1}} fullWidth variant="body1" gutterBottom>
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
        console.log(carsList);
        
    return (
        <div>
            {carsList.length!==0? 
            <Box component="section" sx={{ p: 2, margin:2 }}>
            {renderedList}
            </Box> : <div></div>}
        </div>
        
    )
}

export default CarList;