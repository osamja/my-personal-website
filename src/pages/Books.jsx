import React from 'react';
import ContentList from "../components/grid/ContentList";
import {books2020} from "../scripts/Gallery/books/2020";
import {books2019} from "../scripts/Gallery/books/2019";
import {books2018} from "../scripts/Gallery/books/2018";
import {books} from "../scripts/Gallery/books/books";

export default function Homepage() {
    return (
        <div style={{}}>
            <ContentList title="2023" items={books['2023']} />
            <ContentList title="2022" items={books['2022']} />
            <ContentList title="2021" items={books['2021']} />
            <ContentList title="2020" items={books2020} />
            <ContentList title="2019" items={books2019} />
            <ContentList title="2018" items={books2018} />
        </div>
    )
}
