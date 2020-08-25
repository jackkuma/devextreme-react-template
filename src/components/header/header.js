import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import MenuButton from '../model/ModelMenu';

import './header.scss';

function renderLabel() {
  return <div className="toolbar-label"><b>Tom&apos;s Club</b> Products</div>;
}

export default ({ menuToggleEnabled, toggleMenu }) => (
  <header className={'header-component'}>
    <Toolbar className={'header-toolbar'}>
      <Item location={'before'}>
      </Item>
      <Item
       location={'before'}
       widget={'dxButton'}
      >
        <MenuButton />
      </Item>
      <Item location="center"
            locateInMenu="never"
            render={renderLabel} />
      <Item
        visible={menuToggleEnabled}
        location={'after'}
        widget={'dxButton'}
        cssClass={'menu-button'}
      >
        <Button icon="home" stylingMode="text" onClick={toggleMenu} />
      </Item>
    </Toolbar>
  </header>
);

