import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {changePage, getProducts,changeFilterPrice} from "../../store/reducers/products";

export default function FilterPrice() {

  const {filter}= useSelector((state)=> state.products)
    const dispatch = useDispatch()

    const handleChange = (event) => {
     dispatch(changeFilterPrice(event.target.value))
        dispatch(changePage(1))
    };

    return (
        <Box sx={{ maxWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Порядок</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.filterPrice}
                    label="Порядок"
                    onChange={handleChange}
                >
                    <MenuItem value={'default'}>По умолчанию</MenuItem>
                    <MenuItem value={'asc'}>По возростанию</MenuItem>
                    <MenuItem value={'desc'}>По убыванию</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
