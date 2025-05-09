 import { Grid, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux"
function CarSearch() {
    const sum = useSelector(({cars: {carsList, searchTerm}}) => 
        carsList
        .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((sum, car) => sum + car.cost, 0)
    )

    return (
        <Grid container>
            <Grid size={7}>
                <div></div>
            </Grid>
            <Grid sx={{margin:1}} size={4}>
                <Typography>Total Cost: ${sum}</Typography>
            </Grid>
        </Grid>
    )
}

export default CarSearch