import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import {useEffect} from "react";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'dark' ,
    ...theme.typography,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "black",

    fontSize:'100%',
    marginTop:'1%',
    marginLeft:'30%',

    marginBottom:'-0.8%',
    background:'green',
    display:"flex",




}));

export  function RowAndColumnSpacing() {
    return (

        <Grid container rowSpacing={0}>

            <Item>
                <SwapHorizontalCircleIcon/>

                <div>Year Change Bar</div>
            </Item>


        </Grid>

    );
}
