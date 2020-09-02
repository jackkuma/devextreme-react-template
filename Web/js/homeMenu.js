$.ajax({
    url: "./json/list.json",
    type: "GET",
    dataType: "json",
    success: function(menuDate){
        let devHost = menuDate.Staging[0].hostName
        let devPath = menuDate.Staging[0].envPath
        let menuItem = menuDate.Staging[0].apItem;

        if(menuItem.length > 0) {
            for(let i = 0; i < menuItem.length; i++) {
                $("#itemList").append(`<a href='${devHost}${devPath}${menuItem[i].linkPath}'><i class='${menuItem[i].className}'></i><p>${menuItem[i].apName}</p></a>`);
            }
        }
        //console.log(devHost);
    },
    error: function(){
        $("#itemList").text("資料讀取失敗");
    }
});