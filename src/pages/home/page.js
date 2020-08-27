import React, { useState } from 'react';
import Button from 'devextreme-react/button';

const InfoPage = () => {
    const [pageView, setPageView] = useState(false);
    const toggleOpen = () => setPageView(!pageView);

    window.changePageState = (pageView) => {
        setPageView(!pageView);
    }

    return(
        <div id="infoPage" className={["pagePenal", pageView ? "pageShow" : "pageHide"].join(' ')} >
            <Button icon="close" stylingMode="text" onClick={toggleOpen} />
        </div>
    );
};

export default InfoPage;