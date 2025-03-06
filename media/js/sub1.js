var swiper = new Swiper('.swiper-container', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView:'auto',  //단수
    spaceBetween: 10,  //단사이 여백
    pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      clickable: true,

    },

  });