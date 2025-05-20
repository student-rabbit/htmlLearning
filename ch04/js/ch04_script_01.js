$(function(){
    $("h1").css({
        "color":"red"
    })

    $("#title").css({
        "font-size":"30pt"
    })

    $(".list li:first-child").css({
        "color":"blue"
    })

    $(".aa1").css({
        "border": "1px solid red"
    })

    $("body").find("li").css({
        "border":"1px dashed green"
    })

    $(".list .aa1").next().css({
        "background-color":"yellow"
    })

    $(".list .aa1").eq(0).css({
        "background-color":"pink"
    })

    $(".list .aa1").siblings().css({
        "font-weight":"bold"
    })

    // 제이쿼리 효과
    $(".btn1").click(function(){
        $(".box").hide()
    })

    $(".btn2").click(function(){
        $(".box").show()
    })
    
    $(".btn3").mouseenter(function(){
        $(".box").stop().slideDown()
    })
    
    $(".btn3").mouseleave(function(){
        $(".box").stop().slideUp()
    })
})