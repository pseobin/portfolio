// exhibition 영역

$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    var win_width = $(window).width();
  
  if(win_width>1024){  
    if(scroll>$('.exhibitionr_box').offset().top){
        var bbb =scroll - $('.exhibitionr_box').offset().top;
        //0~1000, (부모 box 초록 - sticky 박스 노랑)
        console.log(bbb);
        if(bbb<2500){  //마지노선이 100이 되게하기 위해 400씀
        $('.exhibitionr .exhibitionr_right ul').css('top',200-bbb);
        //500은 처음의 움직이는 컨텐츠의 top 값
        }

        $('.exhibitionr_right ul li dl').css('color','#fff');
        $('.exhibitionr_right ul li img').css('filter','grayscale(100%)');

        if(bbb>=0 && bbb<600){
          $('.exhibitionr_right ul li:eq(0) dl').css('color','#D9B360');
          $('.exhibitionr_right ul li:eq(0) img').css('filter','grayscale(0)');
        }else if(bbb>=600 && bbb<1200){
          $('.exhibitionr_right ul li:eq(1) dl').css('color','#D9B360');
          $('.exhibitionr_right ul li:eq(1) img').css('filter','grayscale(0)');
        }else if(bbb>=1200 && bbb<1800){
          $('.exhibitionr_right ul li:eq(2) dl').css('color','#D9B360');
          $('.exhibitionr_right ul li:eq(2) img').css('filter','grayscale(0)');
        }else if(bbb>=1800 && bbb<2400){
          $('.exhibitionr_right ul li:eq(3) dl').css('color','#D9B360');
          $('.exhibitionr_right ul li:eq(3) img').css('filter','grayscale(0)');
        }else if(bbb>=2400 && bbb<3000){
          $('.exhibitionr_right ul li:eq(4) dl').css('color','#D9B360');
          $('.exhibitionr_right ul li:eq(4) img').css('filter','grayscale(0)');
        }
    }

  }else{
    $('.exhibitionr_right ul li img').css('filter','grayscale(0)');
    $('.exhibitionr_right ul li dl').css('color','#fff');
    $('.exhibitionr_right ul li').css('border','5px solid transparent');
  }
});


//palace 영역
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: -15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
  });

  var gdata = [
    {'title':'The Guardian of Egyptian Art', 'desc':'The Crypt of the Sphinx'},
    {'title':'A pyramid for a symbol', 'desc':'Cour Napoléon & Pyramid'},
    {'title':'Shining new light on sculpture', 'desc':'Cour Puget and Cour Marly'},
    {'title':'A stairway to Victory', 'desc':'The Daru staircase'},
    {'title':'The Splendour of the Second Empire', 'desc':'The Napoleon III Apartments'},
    {'title':'Artworks from Around the World', 'desc':'The Pavillon des Sessions - Closed until sping 2025'},
    {'title':'Treasures of the Eastern Mediterranean', 'desc':'The Galerie d’Angoulême'}
  ];
  var text = document.getElementById('text');
  var output ='';

  output +='<dl>';
  output +='<dt>'+ gdata[0].title +'</dt>';
  output +='<dd>'+ gdata[0].desc +'</dd>';
  output +='</dt>';  
  text.innerHTML = output;

  swiper.on('transitionEnd', function() {
      //console.log(swiper.realIndex);
      var sind = swiper.realIndex;  // 0~9
      
      output ='<dl>';
      output +='<dt>'+ gdata[sind].title +'</dt>';
      output +='<dd>'+ gdata[sind].desc +'</dd>';
      output +='</dt>';  
      text.innerHTML = output;
  });
//hours-admission 영역

//gallery 영역


