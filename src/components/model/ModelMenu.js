import React from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

import './menu.scss';

const MenuPanel = () => {
    const menuLink = true;
    return createPortal(
        <div className="menu-penal">
            {menuLink ? <a href="https://google.com" rel="remoteLink">Test 123</a> : <Link to="/profile">Test 456</Link>}
        </div>,
        document.getElementById('model'),
    )
}

export default MenuPanel;