import React, { useState } from "react";
import axios from "axios";

import Button from '@mui/material/Button';

import AccordionMenu from "../../components/AccordionMenu/AccordionMenu"
import DatePick from "../../components/DatePick/DatePick";
import EventItems from "../../components/EventItems/EventItems";

const EventPage = () => {
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const [selectedEndDate, setSelectedEndDate] = useState("");
    const [events, setEvents] = useState([]);

    const handleDistrictChange = (district) => {
        setSelectedDistrict(district);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleStartDate = (startDate) => {
        setSelectedStartDate(startDate);
    };

    const handleEndDate = (endDate) => {
        setSelectedEndDate(endDate);
    };

    const handleSearch = async () => {
        console.log('Selected District: ', selectedDistrict);
        console.log('Selected Category: ', selectedCategory);
        console.log('Selected StartDate: ', selectedStartDate);
        console.log('Selected EndDate: ', selectedEndDate);  

        try {
            const apiUrl = `https://jfaacdyqeb.execute-api.us-east-2.amazonaws.com/api/cultural-events?district=${selectedDistrict || 'null'}&category=${selectedCategory.length > 0 ? selectedCategory.join(',') : 'null'}&start_date=${selectedStartDate || 'null'}&end_date=${selectedEndDate || 'null'}`;
            console.log('url:', apiUrl);
            const response = await axios.get(apiUrl);

            setEvents(response.data);

            console.log('API Response:', response.data);
        } catch (error) {
            console.log('API Request Error:', error);
        }
    }

    return (
        <>
            <div style={{ margin: "15px 0 15px 0" }}>
                <h2>행사 목록</h2>
            </div>

      <AccordionMenu
        isEvent={true}
        selectedDistrict={selectedDistrict}
        selectedCategory={selectedCategory}
        onDistrictChange={handleDistrictChange}
        onCategoryChange={handleCategoryChange}
      />

      <div style={{ paddingTop: "15px" }}>
        <DatePick
          label={"시작 날짜"}
          selectedDate={selectedStartDate}
          onDateChange={handleStartDate}
        />
      </div>
      <div style={{ paddingTop: "5px" }}>
        <DatePick
          label={"끝 날짜"}
          selectedDate={selectedEndDate}
          onDateChange={handleEndDate}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" onClick={handleSearch}>
          검색
        </Button>
      </div>
      <EventItems events={response} />
    </>
  );
};

export default EventPage;
