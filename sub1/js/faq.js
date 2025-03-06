// JavaScript Document
$(document).ready(function () {
	var article = $('.content_bottom .article');  //모든 질문 답변 리스트
	//article.find('.a').slideUp(100); // 모든 답변 닫아라
    article.find('span').html('<i class="fa-solid fa-plus"></i>');
   // $('.content_bottom .article:first').find('.ans').slideDown(100);
    //$('.content_bottom .article:first').find('span').html('<i class="fa-solid fa-minus"></i>');
	
	$('.content_bottom .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.ans').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fa-solid fa-plus"></i>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.ans').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fa-solid fa-minus"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.ans').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fa-solid fa-plus"></i>');
        }  
  });
  
  //모두 여닫기 처리
  $('.all').toggle(function(e){
        e.preventDefault(); 
        article.find('.ans').slideDown(100);
        article.removeClass('hide').addClass('show');
        article.find('span').html('<i class="fa-solid fa-minus"></i>');
        
  },function(e){
        e.preventDefault(); 
        article.find('.ans').slideUp(100);
        article.removeClass('show').addClass('hide');
        article.find('span').html('<i class="fa-solid fa-plus"></i>');
        
  });

}); 

