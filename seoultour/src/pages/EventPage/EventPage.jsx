import React from "react";

import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import AccordionMenu from "../../components/AccordionMenu/AccordionMenu"
import DateRange from "../../components/\bDatePicker/DatePicker";


// import { useNavigate } from "react-router-dom";

const EventPage = () => {
    return (
        <>
            <Typography variant="h5" component="div">행사 목록</Typography>

            <AccordionMenu isEvent={true} />
            
            <div style={{ paddingTop: "20px" }}>
                <DateRange label={'시작 날짜'} />
            </div>
            <div style={{ paddingTop: "10px" }}>
                <DateRange label={'끝 날짜'} />
            </div>
            <div style={{ position: "absolute", right: "0px", margin: "8px" }}>
                <Button variant="contained">검색</Button>
            </div>
            
        </>
    );
}

export default EventPage;