import React, { useState, Fragment } from 'react';
import Button from 'devextreme-react/button';

import MenuPanel from './ModelMenu';

const MenuButton = () => {
    const [detailVisible, setDetailVisible] = useState(false);
    const toggleMenu = () => setDetailVisible(!detailVisible);

    return(
        <Fragment>
            <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
            {detailVisible && <MenuPanel />}
        </Fragment>
    );
};

export default MenuButton;