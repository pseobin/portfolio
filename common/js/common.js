//전체 페이지 공통 js







//글로벌 네비게이션(gnb)

$(document).ready(function() {

    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off=false;  //false(안오버)  true(오버)
    
        $('#headerArea').mouseenter(function(){
           // var scroll = $(window).scrollTop();
            $(this).css('background','rgba(255,255,255,1)');
            $('.dropdownmenu li a').css('color','#333'); 
             //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
            on_off=true;
        });
    
       $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();  //스크롤의 거리
            
            if(scroll<smh-50 ){
                $(this).css('background','rgba(255,255,255,.8)').css('border-bottom','none'); 
                $('.dropdownmenu li a').css('color','#333');
            }else{
                if(on_off==true){
                    $(this).css('background','rgba(255,255,255,1)'); 
                    $('.dropdownmenu li a').css('color','#333');
                }
            }
           on_off=false;    
       });
    
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  
            //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
 
            if(scroll>smh-50){//스크롤이 비주얼의 높이-header높이 까지 내리면
                $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
                $('.dropdownmenu li a').css('color','#333');
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
               if(on_off==false){
                    $('#headerArea').css('background','rgba(255,255,255,.8)').css('border-bottom','none');
                    $('.dropdownmenu li a').css('color','#333');
               }
            }; 
            
         });
 
   
     //2depth 열기/닫기
     $('ul.dropdownmenu').hover(
        function() { 
           $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
           $('#headerArea').animate({height:250},'fast').clearQueue();
        },function() {
           $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
           $('#headerArea').animate({height:100},'fast').clearQueue();
      });
     
      //1depth 효과
      $('ul.dropdownmenu li.menu').hover(
        function() { 
            $('.depth1',this).css('color','#F23492');
        },function() {
           $('.depth1',this).css('color','#333');
      });
      
 
      //tab 처리
      $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
         $('ul.dropdownmenu li.menu ul').slideDown('normal');
         $('#headerArea').animate({height:200},'fast').clearQueue();
      });
 
     $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
         $('ul.dropdownmenu li.menu ul').slideUp('fast');
         $('#headerArea').animate({height:50},'normal').clearQueue();
     });
 });
 


//패밀리 사이트 이동

$(document).ready(function() {
   	
	
	$('.family .arrow').toggle(function(){ //홀수번째 클릭
		$('.family .list').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){ //짝수번째 클릭
        $('.family .list').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

 });


 //TOP 으로이동

 $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
   
   
    //$('.text').text(scroll);

    if(scroll>300){ //300이상의 거리가 발생되면
        $('.top_move').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.top_move').fadeOut('fast');//top안보여라~~~~
    }
});

$('.top_move').click(function(e){
   e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); 
});


    

//스크롤애니메이션 aos
AOS.init({
    easing:'ease-in-out-sine'
});
