

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'big1.png' ,title:'연양갱', type:'캔디', sub1:'140 kcal', sub2:'국내 최장수 과자 Since 1945'},
        {imgsrc:'big2.png' ,title:'자유시간',  type:'초코', sub1:'172 kcal', sub2:'대한민국 1등 초코바! 자유시간'},
        {imgsrc:'big3.png' ,title:'화이트엔젤 큐티',  type:'초코', sub1:'165 kcal', sub2:'깜찍한 캐릭터 스틱 초콜릿'},
        {imgsrc:'big4.png' ,title:'티피',  type:'초코', sub1:'217 kcal', sub2:'소리까지 바삭한 네가지색 땅콩 초코볼'},
        {imgsrc:'big5.png' ,title:'자두젤리',  type:'캔디', sub1:'205 kcal', sub2:'자두모양 젤리에 새콤한 자두잼이 쏙!'},
        {imgsrc:'big6.png' ,title:'매실젤리',   type:'캔디', sub1:'215 kcal', sub2:'새콤달콤한 매실잼이 가득한 매실젤리!'},
        {imgsrc:'big7.png' ,title:'자두캔디',  type:'캔디', sub1:'520 kcal', sub2:'상큼한 맛이 가득한 자두 캔디!'},
        {imgsrc:'big8.png' ,title:'아이밀크',  type:'캔디', sub1:'115 kcal', sub2:'초유가 들어있는 씹어먹는 우유 아이밀크!'},
        {imgsrc:'big9.png' ,title:'아이스쿨',  type:'껌', sub1:'0 kcal', sub2:'청정 얼음같은 상쾌함 아이스쿨!'},
        {imgsrc:'big10.png' ,title:'썬키스트',  type:'캔디', sub1:'485 kcal', sub2:'상큼한 3가지 과일맛에 달콤한 과즙잼이 듬뿍~!'},
        {imgsrc:'big11.png' ,title:'자일리톨 은단청',  type:'껌', sub1:'0 kcal', sub2:'씹을수록 상쾌한 자일리톨 은단청!'},
        {imgsrc:'big12.png' ,title:'자일리톨 아카시아',  type:'껌', sub1:'0 kcal', sub2:'씹을수록 향긋한 자일리톨 아카시아!'}
      ];
    
 
  $('.content_area .product_con a').click(function(e){
    
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.content_area .product_con a');  // 0 1 2 3

      $('.content_area .modal_box').fadeIn('fast');
      $('.content_area .popup').fadeIn('slow');

      $('.content_area .popup img').attr('src','../sub2/images/content2/product_big'+(ind+1)+'.png');
      //$('.content_area .popup img').attr('src','./images/'+memo[ind].imgsrc);
      txt+= '<dl>';
      txt+= '<dt>'+memo[ind].title+'</dt>';
      txt+= '<dd>분류: '+memo[ind].type+'</dd>';
      txt+= '<dd>열량: '+memo[ind].sub1+'</dd>';
      txt+= '<dd>  '+memo[ind].sub2+'</dd>';
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

