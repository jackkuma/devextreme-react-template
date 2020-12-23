import React, { Fragment } from 'react';

export const ResponseItem = ({ Source }) => {
    return (
        <Fragment>
            {Source.map((list, index) => (
                <option key={list} id={index.toString()} value={list}>{list}</option>
            ))}
        </Fragment>
    );
};
