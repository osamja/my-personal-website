import React from 'react';
import ContentList from "../components/grid/ContentList";
import {guitarSetList2018, guitarSetList2019, guitarSetList2020} from "../scripts/Gallery/guitar";

export default function Movies () {
    return (
        <div className="Guitar" style={{color: "white"}}>
            <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
                <ContentList title="2020" items={guitarSetList2020} />
                <ContentList title="2019" items={guitarSetList2019} />
                <ContentList title="2018" items={guitarSetList2018} />
            </div>
        </div>
    );
}
