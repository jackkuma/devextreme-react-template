import React, { Component, Fragment } from 'react';
import { SelectBox } from 'devextreme-react/select-box';
import DataSource from 'devextreme/data/data_source';
import axios from '../../components/api/axiosApi';

import './dataTable.scss';

const api = './products.json';

class SpotFire extends Component {
  constructor() {
    super();
    this.state = {
        ProductInfo: [],
        Response: [],
    }
}

GET = async() => {
    try {
        const getProducts = await axios.get(api); 
        const ProductInfo = getProducts.data.Data;
        this.setState ({
            ProductInfo,
        });
    } 
    catch (error) {
        console.log("GET Error!!" + error);
    }  
};

componentDidMount() {
    this.GET();
}

 render() {
  const productDataSource = new DataSource({
    store: this.state.ProductInfo,
    key: 'Product'
  });

  const Response = productDataSource._store._array;
  console.log(Response)

   return (
     <Fragment>
       <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Product</div>
          <div className="dx-field-value">
            <SelectBox
             dataSource={productDataSource}
              displayExpr="Product"
              valueExpr="value"
              searchEnabled={true}
              searchMode="startswith"
              searchExpr="Product" />
            </div>
        </div>
        <select multiple>
          { this.state.ProductInfo.map(product => <option key={product.Product} value={product.Product}>{product.Product}</option>) }
        </select>
        <select multiple>
          { Response.map(item => <option key={item.Product} value={item.Product}>{item.Product}</option>) }
        </select>
     </div>
     </Fragment>
   );
 }
}

export default SpotFire;