import React, { Fragment } from 'react';

export const SettingItem = ({ TargetKeys }) => {
    return (
        <Fragment>
            {TargetKeys.map((list, index) => (
                <option key={list}  id={index.toString()} value={list}>{list}</option>
            ))}
        </Fragment>
    );
};
