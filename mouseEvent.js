// disable scrolling
$('body').bind('mousewheel touchmove', lockScroll);

// enable scrolling
$('body').unbind('mousewheel touchmove', lockScroll);


// lock window scrolling
function lockScroll(e) {
    e.preventDefault();
}

$('button').on('click', function() {
     $('body').bind('mousewheel touchmove', lockScroll);
});

$('body').on('mousewheel touchmove', function(e) {
      e.preventDefault();
});

$(window).scroll(function(ev) {
  ev.preventDefault();
}

var counter=document.getElementById("counter");
counter.addEventListener("mousewheel",function(e){
//計算滑鼠滾輪滾動的距離
var v=e.wheelDelta/120;
counter.innerHTML=counter.innerHTML*1 v;
//阻止瀏覽器預設方法
e.preventDefault();
},false);
else //奇葩的火狐使用DOMMouseScroll事件
counter.addEventListener("DOMMouseScroll",function(e){
//計算滑鼠滾輪滾動的距離
//一格是3行，但是要注意，這裡和畫素不同的是它是負值
var v=-e.detail/3;
counter.innerHTML=counter.innerHTML*1 v;
//阻止瀏覽器預設方法
e.preventDefault();
},false);

//https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/270840/

document.body.onmousewheel = function(event){
event = event || window.event;
console.dir(event)
}

document.body.addEventListener("DOMMouseScroll",function(event){
console.dir(event);
})

var scrollFunc=function(e){
 e=e || window.event;
 if(e.wheelDelta && event.ctrlKey){//IE/Opera/Chrome
  event.returnValue=false;
 }else if(e.detail){//Firefox
  event.returnValue=false;
 }
 }
 /*註冊事件*/
 if(document.addEventListener){
 document.addEventListener('DOMMouseScroll',scrollFunc,false);
 }//W3C
 window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari

//滑鼠滾輪控制圖片縮放 onmousewheel='return bbimg(this)'
//mousewheel」 事件中的 「event.wheelDelta
function bbimg(o){
var zoom=parseInt(o.style.zoom, 10)||100;
zoom =event.wheelDelta/12;
if (zoom>0) o.style.zoom=zoom ‘%’;
return false;
}
