//메인 비주얼 처리코드

var timeonoff;   //타이머 처리  홍길동 정보
var imageCount=$('.gallery ul li').size();   //이미지 총개수
var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때

$('.btn1').css('background','#EC2B84'); //첫번째 불켜
$('.btn1').css('width','40px'); // 버튼의 너비 증가

$('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
$(".gallery .link1 span:eq(0)").delay(1500).animate({ top: 310, opacity: 1 }, "slow");
$(".gallery .link1 span:eq(1)").delay(1900).animate({ top: 430, opacity: 1 }, "slow");



function gallery_change(){
  $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
      
  
      
  $('.mbutton').css('background','#ccc'); //버튼 모두불꺼
  $('.mbutton').css('width','16px');
  $('.btn'+cnt).css('background','#EC2B84');//자신 버튼만 불켜 
  $('.btn'+cnt).css('width','30px');
  
  $(".gallery li span").css("top", 480).css("opacity", 0);
  $(".gallery .link" + cnt)
    .find("span:eq(0)")
    .delay(1500)
    .animate({ top: 310, opacity: 1 }, "slow");
  $(".gallery .link" + cnt)
    .find("span:eq(1)")
    .delay(2000)
    .animate({ top: 430, opacity: 1 }, "slow");
  };



function moveg(){
  if(cnt==imageCount+1)cnt=1;
  if(cnt==imageCount)cnt=0;  //카운트 초기화

  cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
 
  gallery_change();

   if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
 }
 
timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
  


$('.mbutton').click(function(event){  //각각의 버튼 클릭시
     var $target=$(event.target); //클릭한 버튼 $target == $(this)
   clearInterval(timeonoff); //타이머 중지     
 
   

  cnt = $(this).index('.mbutton') + 1;
  //console.log(cnt);
  gallery_change();

  if(cnt==imageCount)cnt=0;  //카운트 초기화

  
 
  timeonoff= setInterval( moveg , 5000); //타이머의 부활!!!
 
  if(onoff==false){ //중지상태냐??
        onoff=true; //동작~~
        $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
  }
  
});

 //stop/play 버튼 클릭시 타이머 동작/중지
$('.ps').click(function(){ 
 if(onoff==true){ // 타이머가 동작 중이냐??
       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
         $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
     onoff=false;   
   }else{  // false 타이머가 중지 상태냐??
       timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
       $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
       onoff=true; 
   }
});	

//왼쪽/오른쪽 버튼 처리
$('.visual .btn').click(function(){

  clearInterval(timeonoff); //살인마

  if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
      if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
      //if(cnt==imageCount+1)cnt=1;  
      cnt++; //카운트 1씩증가
  }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
      if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
      if(cnt==0)cnt=imageCount;
      cnt--; //카운트 감소
  }

  gallery_change();

timeonoff= setInterval( moveg , 4000); //부활

if(onoff==false){
  onoff=true;
  $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
}
});


//about 처리코드 

$('.about .about_btn li:eq(0) a').css('filter','grayscale(0)');
$('.about_left ul li:eq(0)').css('border-radius','15px');

$('.about .about_btn li a').click(function(e){
    e.preventDefault();
    var ind = $(this).index('.about .about_btn li a');  // 0~3
    //console.log(ind);
    $('.cube_box .slide_cube').css('transform','translateZ(-450px) rotate3d(0,1,0,'+ (ind*-90) +'deg)');
    $('.about .about_btn li a').css('filter','grayscale(0)');
    $(this).css('filter','grayscale(100%)');
    $('.about_left ul li').css('border-radius','15px');
    $(this).parent().css('border-radius','15px');
   
});


//porduct top 영역


var position=0;  //최초위치
var movesize=2; //이동 크기
var timeonoff2;

$('.main_top ul').after($('.main_top ul').clone()); //복재
// $('가져다 놓을 태그').after('기준태그');

function partnerMove(){
     position-=movesize;  // 220씩 감소
   $('.main_top').css('left',position);
 
  if(position <= -1980){
      $('.main_top').css('left',0);
      position=-0;
  } 
 
};

  timeonoff2= setInterval(partnerMove, 50);
 
  $('.main_top').hover(function(){
      clearInterval(timeonoff2);
  },function(){
      timeonoff2= setInterval(partnerMove, 50);	
  });



  //porduct bottom 영역

  var position2=0;  //최초위치
  var movesize2=2; //이동 크기
  var timeonoff3;

  $('.main_bottom ul').after($('.main_bottom ul').clone()); //복재
  // $('가져다 놓을 태그').after('기준태그');

  function partnerMove2(){
      position2+=movesize2;  // 220씩 감소
    $('.main_bottom').css('left',position2);
  
    if(position2 >= 0){
        $('.main_bottom').css('left',-1980);
        position2=-1980;
    } 
  
  };

    timeonoff3= setInterval(partnerMove2, 50);
  
    $('.main_bottom').hover(function(){
        clearInterval(timeonoff3);
    },function(){
        timeonoff3= setInterval(partnerMove2, 50);	
    });




//RECRUIT 처리코드



var timeonoff4;
var imageCount2=$('.recruit_left ul li').size();  
var cnt2=4; //리스트 순서	1 2 3 4   1 2 3 4 

$('.recruit_bottom ul li:eq(3)').addClass('current'); 

function move_gallery(){
if(cnt2==4)cnt2=0;  
cnt2++;

 $('.recruit_bottom ul li').removeClass('current'); //모든 li클래스 삭제
 $('.recruit_bottom ul li:eq('+ (cnt2-1) +')').addClass('current'); //현재 열린 li만 클래스 추가

if(cnt2==1){
$('.recruit_bottom .img02').animate({top:[450,'easeOutQuad']},600).clearQueue();
 $('.recruit_bottom .img03').animate({top:[500,'easeOutQuad']},600).clearQueue();
 $('.recruit_bottom .img04').animate({top:[550,'easeOutQuad']},600).clearQueue(); 
}else if(cnt2==2){
$('.recruit_bottom .img02').animate({top:[50,'easeOutQuad']},600).clearQueue();
 $('.recruit_bottom .img03').animate({top:[500,'easeOutQuad']},600).clearQueue();
 $('.recruit_bottom .img04').animate({top:[550,'easeOutQuad']},600).clearQueue();
}else if(cnt2==3){
$('.recruit_bottom .img02').animate({top:[50,'easeOutQuad']},600).clearQueue();
 $('.recruit_bottom .img03').animate({top:[100,'easeOutQuad']},600).clearQueue();
 $('.recruit_bottom .img04').animate({top:[550,'easeOutQuad']},600).clearQueue();
}else if(cnt2==4){
  $('.recruit_bottom .img02').animate({top:[50,'easeOutQuad']},600).clearQueue();
 $('.recruit_bottom .img03').animate({top:[100,'easeOutQuad']},600).clearQueue();
 $('.recruit_bottom .img04').animate({top:[150,'easeOutQuad']},600).clearQueue();
}

if(cnt2==imageCount2)cnt2=0;
}

timeonoff4= setInterval(move_gallery, 4000); //자동타이머


$('.recruit_bottom ul li span').mouseenter(function(){


clearInterval(timeonoff4);
$('.recruit_bottom ul li').removeClass('current');
$(this).parent().addClass('current');   

if($(this).is('.buttonMenu01')){  //첫번째 버튼에 마우스 오버되면
    $('.recruit_bottom .img02').animate({top:[450,'easeOutQuad']},600).clearQueue();
    //$('.eventSlideMenu .img02').animate({left:350},450,'easeOutQuad').clearQueue();
    $('.recruit_bottom .img03').animate({top:[500,'easeOutQuad']},600).clearQueue();
    $('.recruit_bottom .img04').animate({top:[550,'easeOutQuad']},600).clearQueue();
    cnt2=1;
}else if($(this).is('.buttonMenu02')){//두번째 버튼에 마우스 오버되면
    $('.recruit_bottom .img02').animate({top:[50,'easeOutQuad']},600).clearQueue();
    $('.recruit_bottom .img03').animate({top:[500,'easeOutQuad']},600).clearQueue();
    $('.recruit_bottom .img04').animate({top:[550,'easeOutQuad']},600).clearQueue();
    cnt2=2;
}else if($(this).is('.buttonMenu03')){
    $('.recruit_bottom .img02').animate({top:[50,'easeOutQuad']},600).clearQueue();
    $('.recruit_bottom .img03').animate({top:[100,'easeOutQuad']},600).clearQueue();
    $('.recruit_bottom .img04').animate({top:[550,'easeOutQuad']},600).clearQueue();
    cnt2=3;
}else if($(this).is('.buttonMenu04')){
    $('.recruit_bottom .img02').animate({top:[50,'easeOutQuad']},700).clearQueue();
    $('.recruit_bottom .img03').animate({top:[100,'easeOutQuad']},700).clearQueue();
    $('.recruit_bottom .img04').animate({top:[150,'easeOutQuad']},700).clearQueue();
    cnt2=0;
}

 //timeonoff4= setInterval(move_gallery, 4000);  //부활~~
 });


 $('.search .btn').click(function(e){
  e.preventDefault();
  var pname = $('#search_text').val();  //베이스
  if(pname){  //검색어를 입력했으면...
    location.href = './sub2/sub2_4.html?pname='+  pname;
  }
  else{   //검색어를 입력하지 않았다면...
  alert('검색어를 입력하세요');
  }
});