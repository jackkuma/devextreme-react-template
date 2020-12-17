import React, { Component, Fragment } from 'react';
import { SelectBox } from 'devextreme-react/select-box';
import axios from '../../components/api/axiosApi';

import './dataTable.scss';

const api = './products.json';

class SpotFire extends Component {
  constructor() {
    super();
    this.state = {
        ProductInfo: [],
    }
}

GET = async() => {
    try {
        const getProducts = await axios.get(api); 
        const ProductInfo = getProducts.data.Data;
        console.log(ProductInfo);
        this.setState ({
            ProductInfo,
        });
    } 
    catch (error) {
        alert("GET Error!!");    
    }  
};

componentDidMount() {
    this.GET();
}

 render() {
   return (
     <Fragment>
       <div className="App">
       <div className="App-header">
         <h2>Welcome to React</h2>
       </div>
       <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
       </p>
       <div className="dx-field">
         <div className="dx-field-label">Product</div>
         <div className="dx-field-value">
           <SelectBox
            items={this.state.ProductInfo}
            displayExpr="Product"
            valueExpr="value"
            searchEnabled={true}
            searchMode="startswith"
            searchExpr="Product" />
          </div>
      </div>
       { this.state.ProductInfo.map(product => <option key={product.Product} value={product.Product}>{product.Product}</option>) }
     </div>
     </Fragment>
   );
 }
}

export default SpotFire;