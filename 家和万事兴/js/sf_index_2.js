// 翻转图片
function flipCard(){

    if(isFlip[pageNumber]===2){
        // 转到反面

        // 背景变色
        $(".content-li").eq(pageNumber).addClass("fliped");

        // 显示指引
        setTimeout(function(){
            $(".notice-swipe-up").addClass("swipeMove");
        },1200);

        // 修改参数
        isFlip[pageNumber]=1;

    }else{

        $(".content-li").eq(pageNumber).removeClass("fliped");
        isFlip[pageNumber]=2;

    }

}

// 滑动屏幕操作相关

// 上一屏
function screenBack(){

    var transitionString;
    pageNumber--;

    if(pageNumber<0){
        pageNumber=0;
    }
    currentDistance=screenHeight*pageNumber;
    transitionString="top 0.5s ease-in";

    contentList.css({"top":-currentDistance,"-webkit-transition":transitionString,"transition":transitionString});
}

// 下一屏
function screenForward(){

    var transitionString;
    pageNumber++;

    if(!showTheLast && pageNumber===6){
        pageNumber=5;
    }

    if(pageNumber>6){
        pageNumber=6;
    }
    currentDistance=screenHeight*pageNumber;
    transitionString="top 0.5s ease-in";

    contentList.css({"top":-currentDistance,"-webkit-transition":transitionString,"transition":transitionString});

    // 显示引导
    if(pageNumber!==6 ){
        if(pageNumber===5){
            if(showTheLast){
                setTimeout(function(){
                    $(".notice-swipe-up").addClass("swipeMove");
                },800);
            }
        }else{
            setTimeout(function(){
                $(".notice-swipe-up").addClass("swipeMove");
            },800);
        }

    }else{
      $(".notice-swipe-up").css("display","none");
    }
}

function startTouch(event) {
    if (!event.touches.length) {
        return;
    }
    tmpEndY = 0;
    var touch = event.touches[0];
    tmpStartY = touch.pageY;
}

function moveTouch(event) {
    event.preventDefault();
    if (!event.touches.length) {
        return;
    }
    var touch = event.touches[0];
    tmpEndY = touch.pageY;
}

// 触摸结束时判断执行上翻或者下翻
function endTouch() {
    var endY = tmpEndY;
    var startY = tmpStartY;
    if (endY && endY !== startY && endY-startY<=-25) {
        console.log(pageNumber+":"+isFlip[pageNumber]);
        if(isFlip[pageNumber]<=1){
            screenForward();
            $(".notice-swipe-up").removeClass("swipeMove");

        }else{
            flipCard();
        }

    }else if(endY && endY !== startY && endY-startY>=25){
        console.log(pageNumber+":"+isFlip[pageNumber]);
        if(!isFlip[pageNumber] || isFlip[pageNumber]===2){
            screenBack();
        }else{
            flipCard();
        }

    }
}

// 滑动相关 end

// 预加载图片

function preImg(ele){
    var img_src=$(ele).css("background-image");
    img_src=img_src.split("(")[1].split(")")[0];
    var preImg=new Image();
    preImg.src=img_src;
    return preImg;
}

// 正式开始

// 定义变量
var screenHeight=$(window).height();
var pageNumber=0;
var currentDistance=0;
var contentList=$(".content-list");
var tmpEndY,tmpStartY;
var isFlip=[0,2,2,2,0,0,0];
var showTheLast=0;

// 判断是否短屏手机
var isShort;
if($(window).height()<=416){
    isShort=true;
}

// 每一页高度自适应
$(".content-li").each(function () {
    $(this).css("height", $(window).height());
});

// 长屏幕增加背景
if(screenHeight>504){
    var gapHeight=(screenHeight-504)/2;
    $(".p5__extra").css({"top":-gapHeight,"height":gapHeight+5});
    $(".p6__extra").css({"top":-gapHeight,"height":gapHeight+5});
}

// 绑定翻页
contentList.on("touchstart",function(e){
    startTouch(e);
});
contentList.on("touchmove",function(e){
    moveTouch(e);
});
contentList.on("touchend",function(e){
    endTouch(e);
});

// 载入后显示指引
setTimeout(function(){
    $(".notice-swipe-up").addClass("swipeMove");
},500);

// 允许滚到最后一页
$(".p5__print-wrap").on("tap",function(){
  $(".p5__print").css("opacity","1");
  setTimeout(function(){
    showTheLast=1;
    screenForward();
  },300);
});

// 显示分享浮层
$(".p6__share-btn").on("tap",function(){

    $(".share-mask").css({"display":"block","-webkit-transition":"display 0.3s ease-in","transition":"display 0.3s ease-in"});
    setTimeout(function(){
        $(".share-mask").css("display","none");
    },1500);
});


function clickForward() {
    if(isFlip[pageNumber]<=1){
        screenForward();
        $(".notice-swipe-up").removeClass("swipeMove");
    }else{
        flipCard();
    }
}
$(".notice-swipe-up").on("click",function(e){
    clickForward(e);
});