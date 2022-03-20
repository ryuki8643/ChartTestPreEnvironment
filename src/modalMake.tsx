import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { allCountriesMetaData,  SDGStargetNames} from "./dataExmples";
import './map.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import {Autocomplete} from "@mui/material";
import {TextField} from "@mui/material";
import {YearSlider} from "./TimeBar";


const ButtonStyle={
    width:'100%',
    height: '100%',
    color:"white",
    backgroundColor:'#FF6600',
    fontSize:'160%',
    fontWeight:'bolder'

}

type ModalMake={
    clickComponent(e :React.MouseEvent<HTMLButtonElement, MouseEvent>):void,
    countryComponent(name:string):void
    dataSource:string
    timeArray:number[]
    yearChange(value:number|number[]):void
    currentStatus:string
    defaultYear:number

}




export function BasicModal(props:ModalMake) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper" as "paper" | "body" | undefined);

    const handleClickOpen = (scrollType:"paper" | "body" | undefined) => () => {
        setOpen(true);
        setScroll(scrollType );
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);


    return (
        <div>
            <Button variant='contained' onClick={handleClickOpen("paper")} sx={ButtonStyle}>OPTIONS</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">SDGs Map List</DialogTitle>
                <Typography>　Current Data</Typography>
                <Typography>{props.currentStatus}</Typography>
                <YearSlider timeArray={props.timeArray} yearChange={props.yearChange} />
                <div className='topTable'>
                    <Autocomplete

                        disablePortal
                        id="combo-box-demo"
                        options={Object.keys(allCountriesMetaData)}
                        sx={{
                            width: 300 ,
                            marginLeft:'3%'
                        }}
                        renderInput={(params) => <TextField {...params} label="Country or Region" />}
                        onInputChange={(event, value, reason)=>props.countryComponent(allCountriesMetaData[value])}
                    />
                    <Button variant='contained' className="resetButton" onClick={()=>props.countryComponent('world')}>Reset to World Map</Button>
                </div>

                <DialogContent dividers={scroll === 'paper'}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Click SDGs target! Map Change
                    </Typography>
                    {SDGStargetNames.map((tableTitle)=>
                        <Button sx={{

                            marginLeft:'10%',
                            textAlign: 'left',
                        }} value={tableTitle} key={tableTitle} onClick={(event => props.clickComponent(event))}>{tableTitle}</Button>
                    )}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        SDGs target data from © {props.dataSource}
                    </Typography>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
