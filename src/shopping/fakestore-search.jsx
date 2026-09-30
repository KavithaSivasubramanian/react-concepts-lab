import { TextField, Button } from "@mui/material"

export function FakestoreSearch(){
    return(
        <div>
            <div>
            <h3>Search Products</h3>
            <form method="get" action="/results" className="input-group w-25 mx-2">
                <input type="text" name="category" className="form-control"/>
                <button type="submit" className="btn btn-info " >Search</button>
            </form>
            </div>
            <div>
                <h3>React MUI</h3>
                <form method="get" action="/results" className="input-group w-25 mx-2">
                <TextField type="text" name="category" variant="outlined"/>
                <Button type="submit" variant="contained" color="info">Search</Button>
            </form>
            </div>
        </div>

        
    )
}