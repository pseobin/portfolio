 //'./product.html?pname=베이스'
 var key, value;
  
 function getParams() {

 // 현재 페이지의 url   ./product.html?pname=베이스
 var url = decodeURIComponent(location.href);
 // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
 url = decodeURIComponent(url);  //  'ex2.html?num=1'

 var params='';
 // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
 params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
 // '문자열'.substring(시작인덱스 , 자를개수) 
 // 'abcdefg'.substring(2 , 3) ->  'cde'
 // params = 'pname=베이스' 
 
 key = params.split("=")[0];  //'pname'
 value = params.split("=")[1];  // '베이스'
 }   
 getParams();  //함수호출



//ajax 처리

$.ajax({
    url: './js/sam.json',
    dataType: 'json',
    success: function(data){
        var useData = data.sam;  //모든 객체배열~~
        
        function dataPrint(arr){
            
                var txt = '<ul>';
                
                for(var i in arr){
                    
                    var $Name = arr[i].Name;
                    var $Image = arr[i].Image;

                    txt+='<li>';
                    txt+='<a href="#" class="pop_open">';
                    txt+='<img src="'+ $Image +'" alt="">';
                    txt+='<span>'+ $Name +'</span>';
                    txt+='</a>'; 
                    txt +='</li>';
                }

                txt += '</ul>';

                $('.product_list').html(txt);
           
        };
        
        var newArray = []; //검색된 객체배열을 담을 배열
        var search_on =false;  //검색 안되었을때 false , 검색 되었을때 true
        //초기실행, 함수호출
         
        if(value){
             //다른페이지에서 검색어 입력을 하였을때...
             newArray = useData.filter(function(element){
                 return element.Name.includes(value);
             });
             console.log(newArray);

             if(newArray.length!=0){
                  dataPrint(newArray);
             }else{
                 $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:red">검색된 상품이 없습니다</span>');
             }
             search_on =true;  //검색이 되었다~~~
        }else{ //파라미터가 전달되지 않았으면...
             dataPrint(useData); 
             search_on =false;  //검색이 되지않았다~~~
        }
        

        //검색버튼을 클릭했을때...
        $('#btn').click(function(){
             newArray = useData.filter(function(element){
                 //console.log($('#title').val());
                 //return element.Name == $('#title').val();
                 return element.Name.includes($('#search_text').val());
             });
             //console.log(newArray);
             if(newArray.length!=0){
                   dataPrint(newArray);
             }else{
                   $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:red">검색된 상품이 없습니다</span>');
             }
             search_on =true;  //검색이 되었다~~~
        });

        $('.btn_all').click(function(){  //모두보기 클릭시
            dataPrint(useData);
            search_on =false;  //검색이 되지않았다~~~
        });

     //팝업처리 함수
     var pop_txt=""; //팝업창 내에 태그를 만들 변수

     function popchange(obj){ 
         //해당 클릭한 제품의 객체 1개!!
         pop_txt="";
         pop_txt+='<img src="'+ obj.pop_img +'" alt="">';
     
         
         pop_txt+='<dl>';
         pop_txt+='<dt>'+ obj.Name +'</dt>';
         pop_txt+='<dd>분류 : '+ obj.pop_type +'</dd>';
         pop_txt+='<dd>열량 : '+ obj.kcal +'</dd>';
         pop_txt+='<dd>'+ obj.Descript +'</dd>';
         pop_txt+='</dl>';

         $('.modal_box .pop_con').html(pop_txt);
     }
   
     //팝업창 열기
     $(document).on('click', '.pop_open', function(e) {//json 파일을 불러와서 dom을 새로만들때... <a> 태그가 처리되지 않을때..
         e.preventDefault();
         $('.product .modal_box').fadeIn('slow'); //팝업창 열기
         ind = $(this).index('.pop_open'); //클릭한 더보기 버튼의 index 추출 0~~
   
         if(search_on==false){//검색 안되었을때
             popchange(useData[ind]); //클릭한 인덱스에 맞는 객체만 전달
         }else if(search_on==true){//검색 되었을때
             popchange(newArray[ind]);
         }
     });

     //팝업창 닫기
     $('.close_pop, .modal_box').click(function(e){  //모두보기 클릭시
      e.preventDefault();
         $('.product .modal_box').fadeOut('fast');
     });


         
    } 
});