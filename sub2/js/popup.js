

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'big1.png' ,title:'계란과자', type:'비스킷', sub1:'제품설명1', sub2:'계란과자의 새로운 친구, "베베핀"과 함께하는 우리아이 영양간식!'},
        {imgsrc:'big2.png' ,title:'구운감자',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big3.png' ,title:'롤리폴리',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big4.png' ,title:'맛동산',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big1.png' ,title:'아이비',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big2.png' ,title:'얼초',   type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big3.png' ,title:'에이스',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big4.png' ,title:'사루비아',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big1.png' ,title:'오사쯔',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big2.png' ,title:'오예스',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big3.png' ,title:'자가비',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big4.png' ,title:'초코픽',  type:'비스킷', sub1:'제품설명1', sub2:'제품설명2'}
      ];
    
 
  $('.content_area .product_con a').click(function(e){
    
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.content_area .product_con a');  // 0 1 2 3

      $('.content_area .modal_box').fadeIn('fast');
      $('.content_area .popup').fadeIn('slow');

      $('.content_area .popup img').attr('src','../sub2/images/content1/product_big'+(ind+1)+'.png');
      //$('.content_area .popup img').attr('src','./images/'+memo[ind].imgsrc);
      txt+= '<dl>';
      txt+= '<dt>제품명 : '+memo[ind].title+'</dt>';
      txt+= '<dd>분류: '+memo[ind].type+'</dd>';
      txt+= '<dd>제품설명1 : '+memo[ind].sub1+'</dd>';
      txt+= '<dd>제품설명2 : '+memo[ind].sub2+'</dd>';
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

