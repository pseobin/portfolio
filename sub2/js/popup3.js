

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'big1.png' ,title:'고향 물만두', type:'식품', sub1:'515 kcal', sub2:'청양고추 0.7% 첨가로 느끼하지 않게 즐길 수 있는 고향 물만두'},
        {imgsrc:'big2.png' ,title:'고향 김치만두',  type:'식품', sub1:'670 kcal', sub2:'대통령상 수상업체의 국산 맛김치 사용으로 감칠맛 UP!'},
        {imgsrc:'big3.png' ,title:'고향 고추잡채 만두',  type:'식품', sub1:'770 kcal', sub2:'고급 중화욜; 고추잡채를 만두로 구현'},
        {imgsrc:'big4.png' ,title:'고향만두',  type:'식품', sub1:'800 kcal', sub2:'언제나 당신곁에 고향만두 Since 1987'},
        {imgsrc:'big1.png' ,title:'왕교자 김치만두',  type:'식품', sub1:'725 kcal', sub2:'국산 종가집 김치와 깍두기를 넣어 꽉채운 만두'},
        {imgsrc:'big2.png' ,title:'왕교자 만두',   type:'식품', sub1:'635 kcal', sub2:'쌀 발효종으로 쫄깃하고 얇은 만두피 버섯과 통참깨로 고소하게 빚어낸 만두'},
        {imgsrc:'big3.png' ,title:'왕만두',  type:'식품', sub1:'815 kcal', sub2:'국산 돼지고기와 신선한 야채로 푸짐하게 속을 채워넣은 고향 왕만두'},
        {imgsrc:'big4.png' ,title:'고기깻잎 만두',  type:'식품', sub1:'780 kcal', sub2:'진한 고기에 향긋한 깻잎을 더해 고급지게 빚어낸 만두'},
        {imgsrc:'big1.png' ,title:'열불만두',  type:'식품', sub1:'680 kcal', sub2:'특제 불소스로 맛있게 매운맛! 인생 열불날땐 열불날만두 하지'}
      ];
    
 
  $('.content_area .product_con a').click(function(e){
    
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.content_area .product_con a');  // 0 1 2 3

      $('.content_area .modal_box').fadeIn('fast');
      $('.content_area .popup').fadeIn('slow');

      $('.content_area .popup img').attr('src','../sub2/images/content3/product_big'+(ind+1)+'.png');
      //$('.content_area .popup img').attr('src','./images/'+memo[ind].imgsrc);
      txt+= '<dl>';
      txt+= '<dt>'+memo[ind].title+'</dt>';
      txt+= '<dd>분류 : '+memo[ind].type+'</dd>';
      txt+= '<dd>열량 : '+memo[ind].sub1+'</dd>';
      txt+= '<dd>'+memo[ind].sub2+'</dd>';
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

