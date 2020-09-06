import React, { Fragment, useState } from 'react';
import Button from 'devextreme-react/button';
import DateTime from '../../components/form/date-time';

import './summary-page.scss';

const SummaryPage = () => {
   const [isActive, setIsActive] = useState(false);
   const toggleChange = () => {
       setIsActive(!isActive);
   }
   
   return (
       <Fragment>
           <div id="summaryPage">
               <div className="title-container">
                   <h5>Summary Page</h5>
                   <Button icon={isActive ? "pinleft" : "pinright"} stylingMode="text" onClick={toggleChange}/>
               </div>
               <div className={["flex-block", isActive ? "row" : "reverse"].join(' ')}>
                   <div id="summaryChart" className="chart-3" style={{height: '300px'}} />
                   <div id="summaryWord" className="text-block">
                       <ul>
                           <li>test123 <a href="./spotfireTool/JavaScriptApiTest.htm" target="_self">Test</a></li>
                           <li>test56789</li>
                           <li>test321987455r56y56</li>
                        </ul>
                    </div>
               </div>
               <DateTime />
            </div>
       </Fragment>
   )
}

export default SummaryPage;