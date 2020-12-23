import React, { Component, Fragment } from 'react';
import { Button } from 'devextreme-react/button';
import { SelectBox } from 'devextreme-react/select-box';
import DataSource from 'devextreme/data/data_source';

import axios from '../../components/getApi/api-common';
// import axios from 'axios';
import notify from 'devextreme/ui/notify';

import { SearchBar } from './searchBar';
import { ResponseItem } from './responseItem';
import { SettingItem } from './settingItem';
import './setting.scss';

const CategoryData = ['test'];

// const apiURL = "http://localhost:3000/";

class SettingPage extends Component {
  constructor() {
    super();

    this.state = {
      Word: '',
      editProductValue: '',
      editCategoryValue: CategoryData[0],
      ProductInfo: [],
      Category: CategoryData,
      GetAllResponse: [],
      GetSetResponse: [],
      Source: [],
      TargetKeys: [],
      filterResponse: [],
      leftChecked: [],
      rightChecked: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);


    this.editProductValueChanged = ({ value }) => {
      this.setState({ editProductValue: value });
      this.POST();
    };

    this.editCategoryValueChanged = e => {
      this.setState({ editCategoryValue: e.value });
    };
  }

  GET = async() => {
    try {
      const result = await axios.get('/GetProducts');
      let getInitProduct = JSON.parse(result.data).Data;
      let allProducts = [];
      let ProductsLists = [];
      getInitProduct.forEach(item => {
        if (allProducts.indexOf(item.Product) < 0) {
          allProducts.push(item.Product)
        }
      });
      allProducts.forEach(item => ProductsLists.push({Product: item}));
      // console.log(ProductsLists);
      const ProductInfo = ProductsLists;
      this.setState ({ ProductInfo });
    } 
    catch (error) {
        console.log("GET Error!!" + error);
    }
  };
  
  POST = async() => {
    const product = JSON.stringify({
      Product: this.state.editProductValue,
      Category: this.state.editCategoryValue
    });
    console.log(product);
    try {
      const result = await axios.post('/GetSettingsProduct', product);
      // console.log(result);
      const GetAllResponse = JSON.parse(result.data).Data.allResponseParams;
      const GetSetResponse = JSON.parse(result.data).Data.selectedResposnseParams;
      let AllResponse = [];
      let SetResponse = [];
      for(let i = 0; i < GetAllResponse.length; i++) {
        AllResponse.push(GetAllResponse[i].Response);
      }
      for(let i = 0; i < GetSetResponse.length; i++) {
        SetResponse.push(GetSetResponse[i].Response);
      }
      
      const TargetKeys = SetResponse;
      const Source = this.not(AllResponse, SetResponse);
      this.setState ({ 
        Source,
        TargetKeys
      });
      // console.log(this.state.Source)
      // console.log(this.state.TargetKeys)
    }
    catch (error) {
      console.log("GET Error!!" + error);
    }
  };

  UPDATE = async(sendInfo) => {
    const responseData = {
      "Product": this.state.editProductValue,
      "WatList": sendInfo
    };
    console.log(responseData);
    try {
      const result = await axios.post('/UpdataSettingProduct', responseData);
      let ResponseSave = JSON.parse(result.data).Msg;
      if(ResponseSave === 'True') {
        notify('資料儲存完成');
      } else {
        notify('資料存檔失敗，請洽相關人員');
      }
    }
    catch (error) {
        console.log("GET Error!!" + error);
    }
  };

  // async fetchData() {
  //   const result = await axios.get(apiURL + '/GetProducts');
  //   const ProductInfo = JSON.parse(result.data).Data;
  //   // const Products = ProductInfo.Product;
  //   // const Category = ProductInfo.category;
  //   // const Source = ProductInfo.response;
  //   console.log(ProductInfo);

  //   this.setState({
  //     ProductInfo,
  //     // Products,
  //     // Category
  //   })

  //   this.handleSubmit = this.handleSubmit.bind(this);

  // this.editProductValueChanged = ({ value }) => {
  //   this.setState({
  //     editProductValue: value,
  //     editCategoryValue: value.category,
  //     TargetKeys: value.response,
  //     Source: this.not(this.state.ProductInfo.response, value.response)
  //   });
  //   console.log(value);
  // };

  //   this.editCategoryValueChanged = e => {
  //     this.setState({ 
  //       editCategoryValue: e.value,
  //     });
  //   };
  // };
  
  componentDidMount() {
    this.GET();
    // axios({
    //     method: 'post',
    //     baseURL: apiURL,
    //     url: 'http://localhost:3000/GetSettingsProduct',
    //     data: {
    //       "Product": "A912T",
    //       "Category": "WAT"
    //     },
    //     headers: { 'Content-Type': 'application/json; charset=utf-8' }
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
  }

  not(getLeft, getRight) {
    return getLeft.filter((value) => getRight.indexOf(value) === -1);
  }
  
  intersection(getLeft, getRight) {
    return getLeft.filter((value) => getRight.indexOf(value) !== -1);
  }

  //左區塊選擇
  handleChangeLeft = e => {
    const { options } = e.target;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ leftChecked: value });
  };
  //右區塊選擇
  handleChangeRight = e => {
    const { options } = e.target;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ rightChecked: value });
  };

  render() {
    const { Word, filterResponse, ProductInfo, editProductValue, Category, editCategoryValue, Source, TargetKeys, leftChecked, rightChecked } = this.state;

    const productsDataSource = new DataSource({
      store: {
        data: ProductInfo,
        type: 'array',
        key: 'Product'
      }
    });

    const handleChange = (e, dataName) => {
      let oldList = dataName.map(list => list);

      this.setState({ Word: e });
      if(Word !== '') {
        let newList = [];
        newList = oldList.filter(list => 
            list.toLowerCase().includes(Word.toLowerCase()),
        );
        this.setState({ filterResponse: newList });
      } else {
        this.setState({ filterResponse: oldList });
      }
      //console.log(this.state.filterResponse);
    }

    const handleAllRight = () => {
      notify('已全部加入Response');
      this.setState({
        TargetKeys: TargetKeys.concat(Source),
        Source: [],
      });
    };

    const handleAllLeft = () => {
      notify('已將全部Response移除');
      this.setState({
        Source: Source.concat(TargetKeys),
        TargetKeys: [],
      });
    };

    const handleCheckedRight = e => {
      notify('將[ ' + leftChecked + ' ]加入Response');
      let newSource = [...Source];
      let delSource = leftChecked.toString();
      let index = newSource.indexOf(delSource);
      if (index !== -1) {
        newSource.splice(index, 1);
        this.setState({
          Source: newSource,
          TargetKeys: TargetKeys.concat(leftChecked)
        });
      }
      let filteredArray = newSource.filter(item => item !== delSource);

      this.setState({
        Source: filteredArray,
        TargetKeys: TargetKeys.concat(leftChecked)
      });
      
      this.setState({
        TargetKeys: TargetKeys.concat(leftChecked),
        Source: this.not(Source, leftChecked),
        filterResponse: this.not(filterResponse, leftChecked),
        leftChecked: []
      });
      // console.log(this.state.TargetKeys);
    };

    const handleCheckedLeft = e => {
      notify('將[ ' + rightChecked + ' ]自Response移除');
      
      this.setState({
        Source: Source.concat(rightChecked),
        filterResponse: filterResponse.concat(rightChecked),
        TargetKeys: this.not(TargetKeys, rightChecked),
        rightChecked: []
      });
      // console.log(this.state.Source);
    };

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="set-container">
            <div className="select-fieldset">
              <div className="field">
                <div className="field-label">Product</div>
                <div className="field-value">
                  <SelectBox
                   dataSource={productsDataSource}
                   displayExpr="Product"
                   valueExpr="Product"
                   displayValue={editProductValue}
                   searchEnabled={true}
                   searchMode="startswith"
                   searchExpr="Product"
                   showDataBeforeSearch={true} 
                   onValueChanged={this.editProductValueChanged}
                  />
                </div>
                {/* <div className="dx-field">
                  Current product: {this.state.editProductValue ? `${this.state.editProductValue}` : 'Not selected'}
                </div> */}
              </div>
              <div className="field">
                <div className="field-label">Category</div>
                <div className="field-value">
                  <SelectBox 
                   items={Category}
                   value={editCategoryValue}
                   defaultValue={editCategoryValue}
                   onValueChanged={this.editCategoryValueChanged}
                  />
                </div>
                {/* <div className="dx-field">
                  Current Category: {this.state.editCategoryValue ? `${this.state.editCategoryValue}` : 'Not selected'} 
                </div> */}
              </div>
            </div>
          </div>
          <div className="tag-box">
            <div className="list-container">
              <SearchBar value={Word} handleChang={(e) => handleChange(e.target.value, Source)} />
              <select multiple id="AllResponse" onChange={this.handleChangeLeft}>
                <ResponseItem Source={Word.length <= 1 ? Source : filterResponse} />
              </select>
            </div>
            <div className="btn-container">
              <Button className="right" icon="chevronright" onClick={handleCheckedRight} disabled={leftChecked.length === 0} />
              <Button className="allRight" icon="chevrondoubleright" onClick={handleAllRight} disabled={Source.length <= 1} />
              <Button className="allLeft" icon="chevrondoubleleft" onClick={handleAllLeft} disabled={TargetKeys.length <= 1} />
              <Button className="left" icon="chevronleft" onClick={handleCheckedLeft} disabled={rightChecked.length === 0} />
            </div>
            <div className="list-container">
              {/* <SearchBar value={Word} handleChang={(e) => handleChange(e.target.value, TargetKeys)} /> */}
              <h6>Setting Response</h6>
              <select multiple id="SetResponse" onChange={this.handleChangeRight}>
                <SettingItem TargetKeys={TargetKeys} />
              </select>
            </div>
          </div>
          <div className="btn-container">
            <Button className="save" icon="save" text="Save" type="success" useSubmitBehavior={true} />
          </div>
        </form>
      </Fragment>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let updateProduct = [];
    for (let i = 0; i < this.state.TargetKeys.length; i++) {
      let responseItem = this.state.TargetKeys[i];
      let productSelect = {
        Product: this.state.editProductValue,
        Category: this.state.editCategoryValue,
        Response: responseItem
      };
      updateProduct.push(productSelect);
    }

    this.UPDATE(updateProduct);
  }
}

export default SettingPage;
