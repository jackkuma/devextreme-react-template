//Link https://community.tibco.com/wiki/how-set-filters-using-tibco-spotfirer-javascript-api

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
