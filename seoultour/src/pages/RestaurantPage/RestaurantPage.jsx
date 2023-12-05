import React from "react";

import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import AccordionMenu from "../../components/AccordionMenu/AccordionMenu"
import DateRange from "../../components/\bDatePicker/DatePicker";

const RestaurantPage = () => {
    return (
        <>
            <Typography variant="h5" component="div">맛집 목록</Typography>

            <AccordionMenu isEvent={false} />
            
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

export default RestaurantPage;