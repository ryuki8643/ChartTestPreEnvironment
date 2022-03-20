import * as React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './map.css'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    fontSize:'15px',
    textAlign: 'center',

    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '30px',
    fontWeight:'bolder',


}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
type AverageBoxType={
    textLine:string
}
export  function AverageBox(props:AverageBoxType) {
    return (
        <div className="AverageBox">


                <ThemeProvider theme={darkTheme}  >
                    <Box
                        sx={{
                            p: 2,
                            borderRadius:'30px',
                            backgroundColor: 'background.default',
                            display: 'grid',

                            gap: 1,
                        }}
                    >
                        <Item key={24} elevation={24}>
                            Average {props.textLine}
                        </Item>

                    </Box>
                </ThemeProvider>
        </div>

    );
}
