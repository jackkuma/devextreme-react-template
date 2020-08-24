//menu https://community.tibco.com/wiki/navigate-spotfire-pages-tabs-dropdown
//https://spotfired.blogspot.com/2014/08/toggle-page-navigation.html

//ScrollTop https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery

//button-Link https://community.tibco.com/questions/javascript-insert-font-style-url-not-working-internet-explorerwebplayer

//Link https://community.tibco.com/wiki/how-set-filters-using-tibco-spotfirer-javascript-api
//文獻資料 https://docs.spotfire.cloud.tibco.com/spotfire/GUID-267D5906-E8D4-4A73-9FC9-994716CD2FE1.html

function SetAllValuesFilters() {
                    
                    var filterColumns = new Array();
                    filterColumns[0] = {

                        filteringSchemeName: "Filtering scheme",

                        dataTableName: "World Bank Data",

                        dataColumnName: "Country Code",                        

                        filterSettings: {

                            includeEmpty: true                            
                        }
                    }                    
                     
                        _analysisDocument.filtering.setFilters(filterColumns, spotfire.webPlayer.filteringOperation.ADD_ALL);

                }

// 2. Set filter to a particular value(s) for given columns
function SetFilterValues() {

                    var filterColumns = new Array();
                    filterColumns[0] = {

                        filteringSchemeName: "Filtering scheme",

                        dataTableName: "Data Table",

                        dataColumnName: "Sales",

                        filterSettings: {

                            includeEmpty: true,

                            values: [20000]
                        }
                    }

                    filterColumns[1] = {

                        filteringSchemeName: "Filtering scheme",

                        dataTableName: "Data Table",

                        dataColumnName: "Group",

                        filterSettings: {

                            includeEmpty: true,

                            values: ["GroupB"]
                        }
                    }
                        _analysisDocument.filtering.setFilters(filterColumns, spotfire.webPlayer.filteringOperation.REPLACE);
                }
