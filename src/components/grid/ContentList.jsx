import React from 'react';

export default function ContentList(props) {
    const {
        title,
        items,
    } = props;

    const renderedItems = items.map((item) => 
        <li key={item['text']}>{item['text']}</li>
    );

    return(
        <div style={{color: 'white', fontWeight: 200}}>
            <h2>
                {title}
            </h2>
            <ul>{renderedItems}</ul>
        </div>
    )
}