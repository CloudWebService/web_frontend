import React from "react";

import { D001 } from "../../assets"
import SeoulMap from "../../components/SeoulMap/SeoulMap";

const SeoulCongestionPage = () => {
    return(
        <>
            <div>혼잡도</div>
            <SeoulMap />
        </>
        
    );
}

export default SeoulCongestionPage;