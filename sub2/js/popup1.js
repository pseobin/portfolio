

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'big1.png' ,title:'계란과자', type:'비스킷', sub1:'320 kcal', sub2:'계란과자의 새로운 친구, "베베핀"과 함께하는 우리아이 영양간식!'},
        {imgsrc:'big2.png' ,title:'구운감자',  type:'비스킷', sub1:'130 kcal', sub2:'석쇠로 구워 더욱 고소한 스틱형 감자 비스켓'},
        {imgsrc:'big3.png' ,title:'롤리폴리',  type:'비스킷', sub1:'295 kcal', sub2:'부드러운 롤웨하스 속에 초코'},
        {imgsrc:'big4.png' ,title:'맛동산',  type:'스낵', sub1:'440 kcal', sub2:'달콤고소한 대한민국 대표과자 맛동산!'},
        {imgsrc:'big5.png' ,title:'후렌치파이 애플망고',  type:'비스킷', sub1:'825 kcal', sub2:'64겹의 바삭한 파이와 사르르 퍼지는 달콤한 애플망고잼의 환상조화'},
        {imgsrc:'big6.png' ,title:'가루비 감자칩',   type:'스낵', sub1:'220 kcal', sub2:'일본 No.1 감자칩 브랜드, 일본 여행 필수템!'},
        {imgsrc:'big7.png' ,title:'에이스',  type:'비스킷', sub1:'1950 kcal', sub2:'크래커의 대명사! 에이스!'},
        {imgsrc:'big8.png' ,title:'홈런볼',  type:'비스킷', sub1:'270 kcal', sub2:'대한민국 단 하나! Premium 과자!'},
        {imgsrc:'big9.png' ,title:'오사쯔',  type:'스낵', sub1:'305 kcal', sub2:'구름처럼 부드럽고 달콤한 고구마스낵 오사쯔'},
        {imgsrc:'big10.png' ,title:'오예스',  type:'비스킷', sub1:'1800 kcal', sub2:'촉촉하고 부드러운 리얼 케이크'},
        {imgsrc:'big11.png' ,title:'자가비',  type:'스낵', sub1:'250 kcal', sub2:'케첩을 바른 정통 프랜치프라이 스낵'},
        {imgsrc:'big12.png' ,title:'아이비',  type:'비스킷', sub1:'1200 kcal', sub2:'Low Sugar 순수 크래커 ! 아이비!'}
      ];
    
 
  $('.content_area .product_con a').click(function(e){
    
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.content_area .product_con a');  // 0 1 2 3

      $('.content_area .modal_box').fadeIn('fast');
      $('.content_area .popup').fadeIn('slow');

      $('.content_area .popup img').attr('src','../sub2/images/content1/product_big'+(ind+1)+'.png');
      txt+= '<dl>';
      txt+= '<dt> '+memo[ind].title+'</dt>';
      txt+= '<dd>분류: '+memo[ind].type+'</dd>';
      txt+= '<dd>열량 : '+memo[ind].sub1+'</dd>';
      txt+= '<dd> '+memo[ind].sub2+'</dd>';
      txt+= '</dl>';
      
      $('.content_area .popup .txt').html(txt);

  });

  $('.close_btn, .content_area .modal_box').click(function(e){
      e.preventDefault();
      $('.content_area .modal_box').hide();
      $('.content_area .popup').hide();
  });
  $('.content_area .modal_box, .content_area .popup').on('scroll touchmove mousewheel', function(e) {

    e.preventDefault();

    e.stopPropagation();

    return false;

});
});

