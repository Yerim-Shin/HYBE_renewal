$(function(){
  
  // 풀메뉴
  $("nav>ul>li").mouseenter(function(){
    $('.submenu, .background').stop().slideDown();
  });
  $("nav>ul>li").mouseleave(function(){
    $('.submenu, .background').stop().slideUp();
  });
 

  //이미지 슬라이드

   // 슬라이드 초기화 + swiper 객체생성
   var swiper = new Swiper(".mySwiper",{
    // 터치 활성화 (true로 설정시 활성화됨)
    allowTouchMove:true, 
    // 슬라이드 높이 조절하지 않음 
    autoHeight:false,
    // 방향설정 - 가로
    direction:'horizontal', 
    // 전환효과 - 슬라이드 
    effect:'slide', 
    // style - slide, fade, cube, coverflow,flip중 선택하기 

    // 슬라이드 활성화
    enabled:true,
    // 슬라이드 무한반복 
    loop:true,
    // 화면에 보이는 갯수 설정 
    slidesPerView:2.3,
    // 중앙에 슬라이드 위치시킴
    centeredSlides:true,
    // 슬라이드간의 여백 설정 
    spaceBetween:60,
    // 마우스휠 사용하여 이동시킴 설정
    // mousewheel:true,
    // 자동재생간격설정 (1000->1초)
    autoplay: {
        delay:2000, 
    }

});

//비주얼텍스트효과
const container = document.querySelector(".container");

document.body.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY - 35;
  gsap.to(container, {
    y: y
  });
  gsap.to(".menu-mask", {
    y: -y
  });
});

});