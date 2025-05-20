$ (function(){
    // 메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    // 슬라이더
    let i = 0;
    function slide(){
        if(i<2) {
            i++
        } else {
            i=0;
        }
        $(".slider ul").animate({
            marginLeft:-1200*i}, 1000);
    }
    setInterval(slide, 3000);
})