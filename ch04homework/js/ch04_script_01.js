$(function(){
    // h1 텍스트 색상 변경 및 글꼴 변경
    $("h1").css({
        "color": "purple",
        "font-family": "Arial, sans-serif",
        "text-shadow": "2px 2px 4px rgba(0,0,0,0.3)"
    });

    // #title 폰트 크기 및 색상 변경
    $("#title").css({
        "font-size": "30pt",
        "color": "#2c3e50",
        "font-weight": "bold" 
    });

    // .list의 첫 번째 텍스트 색상 변경 및 배경색 변경
    $(".list li:first-child").css({
        "color": "white",
        "background-color": "darkblue", 
        "padding": "10px",
        "border-radius": "5px" 
    });

    // .aa1의 테두리 색상과 배경색 변경
    $(".aa1").css({
        "border": "3px solid orange",
        "background-color": "#f39c12", 
        "color": "white", 
        "padding": "10px 10px", 
        "border-radius": "10px"
    });

    // 모든 li에 테두리 추가 및 텍스트 색상 변경
    $("body").find("li").css({
        "border": "1px dashed #2ecc71",
        "color": "#34495e"
    });

    // .aa1의 다음 요소의 배경색을 노란색으로 변경
    $(".list .aa1").next().css({
        "background-color": "yellow",
        "font-weight": "bold"
    });

    // .aa1의 첫 번째 요소의 배경색을 핑크색으로 변경
    $(".list .aa1").eq(0).css({
        "background-color": "pink",
        "color": "black",
        "padding": "8px", 
        "border-radius": "8px"
    });

    // .aa1의 형제 요소들 텍스트를 굵게 설정
    $(".list .aa1").siblings().css({
        "font-weight": "bold",
        "color": "teal"
    });

    // .box를 원형으로 변경하고 크기 및 배경색 변경
    $(".box").css({
        "border-radius": "50%",
        "background-color": "#ff6347",
        "width": "150px",
        "height": "150px",
        "box-shadow": "5px 5px 15px rgba(0,0,0,0.3)"
    });

    // .box에 텍스트 색상 및 크기 애니메이션 추가
    $(".box").css({
        "color": "white",
        "font-size": "20px",
        "display": "none"
    }).animate({
        "width": "200px",
        "height": "200px",
        "background-color": "#3498db"
    }, 1000);

    // 제이쿼리 효과 버튼1: .box 숨기기
    $(".btn1").click(function(){
        $(".box").hide();
    });

    // 버튼2: .box 보이기
    $(".btn2").click(function(){
        $(".box").show();
    });
    
    // 버튼3: 마우스 오버 시 .box 아래로 슬라이드 애니메이션
    $(".btn3").mouseenter(function(){
        $(".box").stop().slideDown(500);
    });

    // 버튼3: 마우스 아웃 시 .box 위로 슬라이드 애니메이션
    $(".btn3").mouseleave(function(){
        $(".box").stop().slideUp(500);
    });

    // .box에 크기 애니메이션과 색상 애니메이션 추가 (btn2 클릭 시)
    $(".btn2").click(function(){
        $(".box").stop().animate({
            "width": "250px",
            "height": "250px",
            "background-color": "limegreen",
            "box-shadow": "10px 10px 25px rgba(0,0,0,0.5)"
        }, 1000);
    });
});
