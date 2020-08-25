import React, { useState, Fragment } from 'react';
import Button from 'devextreme-react/button';

import './menu.scss';

const MenuButton = () => {
    const [detailVisible, setDetailVisible] = useState(false);
    const toggleMenu = () => setDetailVisible(!detailVisible);

    return(
        <Fragment>
            <Button icon={detailVisible ? 'close' : 'menu'} stylingMode="text" onClick={toggleMenu} />
            <div id="menuList" className={["menu-penal", detailVisible ? "menuShow" : "menuHide"].join(' ')} />
        </Fragment>
    );
};

export default MenuButton;