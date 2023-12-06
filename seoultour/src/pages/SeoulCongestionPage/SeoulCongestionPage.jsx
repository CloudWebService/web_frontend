import React from "react";

import SeoulMap from "../../components/SeoulMap/SeoulMap";

const SeoulCongestionPage = () => {
    return(
        <>
            <div style={{ margin: "15px 0 15px 0" }}>
                <h2>주요 관광지 혼잡도</h2>
            </div>
            <SeoulMap />
        </>
        
    );
}

export default SeoulCongestionPage;