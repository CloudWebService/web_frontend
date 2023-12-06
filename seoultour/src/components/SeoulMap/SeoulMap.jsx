import React, { useState, useEffect } from 'react';
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import axios from "axios";

const SeoulMap = () => {
  const [hotspotDataList, setHotspotDataList] = useState([
    { hotspotName: '서울역', congestionLevel: null, lat: 37.555981, lng: 126.972376 },
    { hotspotName: '미아사거리역', congestionLevel: null, lat: 37.6138408, lng: 127.0305202 },
    { hotspotName: '연신내역', congestionLevel: null, lat: 37.6245393, lng: 126.9157179 },
    { hotspotName: '서울식물원·마곡나루역', congestionLevel: null, lat: 37.5656482, lng: 126.8277867 },
    { hotspotName: '합정역', congestionLevel: null, lat: 37.5498288, lng: 126.9142324 },
    { hotspotName: '천호역', congestionLevel: null, lat: 37.53745, lng: 127.1271538 },
    { hotspotName: '건대입구역', congestionLevel: null, lat: 37.5401594, lng: 127.0705779 },
    { hotspotName: '역삼역', congestionLevel: null, lat: 37.5001561, lng: 127.0349246 },
    { hotspotName: '서울대입구역', congestionLevel: null, lat: 37.4811894, lng: 126.9526401 },
    { hotspotName: '구로역', congestionLevel: null, lat: 37.5030592, lng: 126.8821118 },    
  ]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchHotspotInfo = async (hotspot) => {
      try {
        const response = await axios.get(
          `http://openapi.seoul.go.kr:8088/${API_KEY}/json/citydata_ppltn/1/5/${hotspot.hotspotName}`
        );

        console.log("API 응답: ", response);

        const areaData = response.data['SeoulRtd.citydata_ppltn'][0];

        const areaCongestLevel = areaData.AREA_CONGEST_LVL;
        console.log("레벨:", areaCongestLevel)

        setHotspotDataList(prevList => prevList.map(item => 
          item.hotspotName === hotspot.hotspotName
            ? { ...item, congestionLevel: areaCongestLevel }
            : item
        ));
        console.log("list: ", hotspotDataList);
      } catch (error) {
        console.error('API 요청 에러:', error);
      }
    };

    const fetchDataSequentially = async () => {
      for (const hotspot of hotspotDataList) {
        await fetchHotspotInfo(hotspot);
      }
    };

    fetchDataSequentially();
    
  }, []);

  const getCongestionColor = (congestionLevel) => {
    console.log(congestionLevel);
    if (congestionLevel === '붐빔') {
      return 'rgb(255,138,125,0.5)';
    } else if (congestionLevel === '약간 붐빔') {
      return 'rgb(255,164,125,0.5)';
    } else if (congestionLevel === '보통') {
      return 'rgb(255,215,118,0.5)';
    } else if (congestionLevel === '여유') {
      return 'rgb(138,220,140,0.5)';
    } else {
      return 'rgb(76,76,76,0.5)';
    }
  };

  return (
    <>
      <Map
        center={{ lat: 37.566535, lng: 126.9779692 }}
        style={{ width: "100%", height: "400px" }}
        level={9}
      >
        {hotspotDataList.map((hotspot, index) => (
          <CustomOverlayMap key={index} position={{ lat: hotspot.lat, lng: hotspot.lng }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: getCongestionColor(hotspot.congestionLevel),
                textAlign: 'center',
                lineHeight: '50px',
                color: '#000', // 글자색
                fontSize: '12px',
              }}
            >
              {hotspot.hotspotName && hotspot.congestionLevel}
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
    </>
  )
}

export default SeoulMap