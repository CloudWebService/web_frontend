import React from 'react';

import * as S from "./SeoulMap.styles";
import { D001 } from "../../assets"



const SeoulMap = () => {
  const handleD001 = () => {
    console.log('click!');
  }
  return (
    <>
      {/* <S.D style={{ pointerEvents: "none" }}><D001 style={{width: "100%", pointerEvents: "fill"}} onClick={handleD001} /></S.D> */}
    </>
  )
}

export default SeoulMap