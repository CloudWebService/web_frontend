import React, {useState} from "react";

import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import AccordionMenu from "../../components/AccordionMenu/AccordionMenu"
import RestaurantItems from "../../components/RestaurantItems/RestaurantItems";

const RestaurantPage = () => {
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const handleDistrictChange = (district) => {
        setSelectedDistrict(district);
    };

    const handleSearch = () => {
        console.log('Selected District: ', selectedDistrict);     
    }

    const response = [
        {
            _id: "mongodb 고유 object_id",
            name: "내가 찜한 닭",
            lat: 37.5518,
            lon: 127.0736,
            info: "건대 맛의거리 내가 찜한 닭 입니다.",
            views: ["음식이 맛있어요", "가족식사하기 좋네요."],
            addr: "서울 광진구 아차산로33길 63",
            phone_num: "02-450-3234",
            menu: "매콤 찜닭, 로제 찜닭",
            time: "09:30~22:00",
            review: "100회",
        },
        {
            _id: "mongodb 고유 object_id",
            name: "왕가탕후루",
            lat: "37.4964",
            lon: "126.9572",
            info: "건대 탕후루 맛집입니다.",
            views: ["음식이 맛있어요", "가족식사하기 좋네요."],
            addr: "서울특별시 광진구 아차산로29길 7 1층",
            phone_num: "02-450-1934",
            menu: "탕후루",
            time: "09:30~23:00",
            review: "120회",
        },
      ];

    return (
        <>
            <div style={{ margin: "15px 0 15px 0" }}>
                <Typography variant="h5" component="div">맛집 목록</Typography>
            </div>

            <AccordionMenu isEvent={false} selectedDistrict={selectedDistrict} selectedCategory={null} onDistrictChange={handleDistrictChange} onCategoryChange={null}/>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px"}}>
                <Button variant="contained" onClick={handleSearch}>검색</Button>
            </div>

            <RestaurantItems events={response} />
            
        </>
    );

}

export default RestaurantPage;