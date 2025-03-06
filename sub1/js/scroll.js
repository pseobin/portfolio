
        

    var smh = $('#content .his_navbox').offset().top-100 ;
    var h1= $('.content_area ul li:eq(0)').offset().top-700;
    var h2= $('.content_area ul li:eq(3)').offset().top-700 ;
    var h3= $('.content_area ul li:eq(8)').offset().top-700 ;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        //$('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('.his_navbox').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.his_navbox').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }

      
        
        
        
        $('#content .his_navbox li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=h1 && scroll<h2){ //0~h1 -600 = 첫번째가 나오는 구간
            $('.his_navbox li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
        }else if(scroll>=h2 && scroll<h3){ //h1~h2-600 = 두번째가 나오는 구간
            $('.his_navbox li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
        }else if(scroll>h3){ //h2~h3-600 = 세번째가 나오는 구간
            $('.his_navbox li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
        }
    });

   

     $('.his_navbox  ul li a').click(function(e){
        e.preventDefault(); //href="#" 속성을 막아주는..메소드
   
         var value=0; //이동할 스크롤의 거리

         if($(this).hasClass('year1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
            value= $('.content_area ul li:eq(0)').offset().top-160;  // 해당 콘테츠의 상단의 거리~~
         }else if($(this).hasClass('year2')){
            value= $('.content_area ul li:eq(3)').offset().top-160; 
         }else if($(this).hasClass('year3')){
            value= $('.content_area ul li:eq(8)').offset().top-160; 
         }
         
       $("html,body").stop().animate({"scrollTop":value},1000);
     });

