import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import AccordionMenu from "../../components/AccordionMenu/AccordionMenu"
import DatePick from "../../components/\bDatePick/DatePick";
import EventItems from "../../components/EventItems/EventItems";

const EventPage = () => {
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const [selectedEndDate, setSelectedEndDate] = useState("");

    const handleDistrictChange = (district) => {
        setSelectedDistrict(district);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleStartDate = (startDate) => {
        setSelectedStartDate(startDate);
    }

    const handleEndDate = (endDate) => {
        setSelectedEndDate(endDate);
    }

    const handleSearch = () => {
        console.log('Selected District: ', selectedDistrict);
        console.log('Selected Category: ', selectedCategory);
        console.log('Selected StartDate: ', selectedStartDate);
        console.log('Selected EndDate: ', selectedEndDate);        
    }

    const response = [
      {
        title: "건국 예디대 졸업전시회",
        category: "전시/미술",
        district: "광진구",
        date: "2023-12-01~2023-12-03",
        place: "건국대학교 대운동장",
        introduction: "건국대학교 대운동장에서 열리는 예디대 학생들의 졸업 전시회",
        paidOrfree: "무료",
        age: "누구나",
        lat: "37.5408",
        lon: "127.0793",
        review: "100회",
      },
      {
        title: "연세 예디대 졸업전시회",
        category: "축제-문화/예술",
        district: "서대문구",
        date: "2023-11-01~2023-11-03",
        place: "연세대학교 대운동장",
        introduction: "연세대학교 대운동장에서 열리는 예디대 학생들의 졸업 전시회",
        paidOrfree: "무료",
        age: "누구나",
        lat: "37.5408",
        lon: "127.0793",
        review: "99회",
      },
    ];

    return (
        <>
            <div style={{ margin: "15px 0 15px 0" }}>
                <Typography variant="h5" component="div">행사 목록</Typography>
            </div>

            <AccordionMenu isEvent={true} selectedDistrict={selectedDistrict} selectedCategory={selectedCategory} onDistrictChange={handleDistrictChange} onCategoryChange={handleCategoryChange}/>
            
            <div style={{ paddingTop: "15px" }}>
                <DatePick label={'시작 날짜'} selectedDate={selectedStartDate} onDateChange={handleStartDate} />
            </div>
            <div style={{ paddingTop: "5px" }}>
                <DatePick label={'끝 날짜'} selectedDate={selectedEndDate} onDateChange={handleEndDate} />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px"}}>
                <Button variant="contained" onClick={handleSearch}>검색</Button>
            </div>
            <EventItems events={response} />
        </>
    );
}

export default EventPage;