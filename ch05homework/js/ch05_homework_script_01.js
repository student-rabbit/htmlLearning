$(function () {
    // 메뉴 드롭다운
    $("nav > ul > li").mouseenter(function () {
      $(this).children(".sub").stop().slideDown();
    });
    $("nav > ul > li").mouseleave(function () {
      $(this).children(".sub").stop().slideUp();
    });
  
    // 슬라이더
    let i = 0;
    function slide() {
      i = (i + 1) % 5;
      $(".slider ul").animate({ marginLeft: -1200 * i }, 800);
    }
    setInterval(slide, 3500);
  });
  