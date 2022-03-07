$(document).ready(function(){
  $('.banner-slider').slick({
     infinite: true ,      // 무한반복
    centerMode: false ,
     slidesToShow: 1,     // 보여지는 슬라이드 개수
     slidesToScroll: 1,   // 넘어가는 슬라이드 개수
     dots: true,         // 점 네비게이션 표시
     arrows: true ,     // 화살표 표시
     fade: false,            // 페이드 효과
     vertical: false,         // 상하 슬라이드
     autoplay: true,       //자동스크롤
     autoplaySpeed: 1000 ,  //자동스크롤 속도
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    // responsive: 
    // [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
    
    
    
    
    
  });
});