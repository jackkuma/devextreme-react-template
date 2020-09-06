let nowUrl = window.location.pathname;
let paraString = nowUrl.substring(nowUrl.indexOf("/")+1).split("/");
console.log(paraString);
let nowEnv = paraString[0];
if(nowEnv === 'webDev') {
    envURL = "./json/dev-list.json";
} else if(nowEnv === 'webTest') {
    envURL = "./json/test-list.json";
} else {
    envURL = "./json/prod-list.json";
}
console.log(nowEnv);

$.ajax({
    url: envURL,
    type: "GET",
    dataType: "json",
    success: function(menuDate){
        let nowHost = menuDate.envHost;
        let nowPath = menuDate.envPath;
        let menuItem = menuDate.apItem;

        if(menuItem.length > 0) {
            for(let i = 0; i < menuItem.length; i++) {
                //$("#itemList").append(`<a href='${devHost}${devPath}${menuItem[i].linkPath}'><i class='${menuItem[i].className}'></i><p>${menuItem[i].apName}</p></a>`);
                $("#itemList").append(`<a href='${menuItem[i].remote ? menuItem[i].linkPath : nowHost + nowPath + menuItem[i].linkPath}'>
                 <i class='${menuItem[i].className}'></i>
                 <p>${menuItem[i].apName}</p>
                </a>`);
            }
        }
        //console.log(devHost);
    },
    error: function(){
        $("#itemList").text("資料讀取失敗");
    }
});