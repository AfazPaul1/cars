 import { Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from '../store';
function CarSearch() {
    const sum = useSelector((state: RootState) => {
        //cammot annotate type when we destructured in the function parameter
        const {carsList, searchTerm} = state.cars;
        return carsList
                    .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .reduce((sum, car) => sum + car.cost, 0)
})

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