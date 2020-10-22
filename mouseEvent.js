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
