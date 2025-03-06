// 갤러리영역
$('#content .gallery_main .gallery_con .grid-image-item').mouseenter(function(){
    if (!$(this).find('h3').length) {
       $('#content .gallery_main .gallery_con .grid-image-item img').css('filter','brightness(0.5) saturate(150%)');
       $('.gallery .first_item img').css('filter','brightness(1) saturate(150%)');
       $(this).find('img').css('filter','brightness(1) saturate(150%)');
    }
  });
  
  $('#content .gallery_main .gallery_con').mouseleave(function(){
    $('#content .gallery_main .gallery_con .grid-image-item img').css('filter','brightness(1) saturate(150%)');
  });