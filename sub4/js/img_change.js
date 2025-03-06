$(document).ready(function(){


    var characters = [
        {
            'imsrc':'char01_x2.png',
            name:'티토', 
            information:' 이상한 나라에 살고 있는 시계토끼 티토 꼼꼼한 성격으로 늘 시계를 들고 다닌다. 에이스의 대표 캐릭터이다. ', 
        },
        {
            'imsrc':'char02_x2.png',
            name:'예쓰', 
            information:'초코 퐁듀 호수 옆 오두막에서 사는 초코강아지 예쓰 밝고 긍정적이며 챙겨주는 것을 좋아해서 생일마다 파티를 열어준다. 오예스의 대표 캐릭터이다. ', 
        },
        {
            'imsrc':'char03_x2.png',
            name:'맛깨비', 
            information:'맛동산의 나무집에사는 도깨비 맛깨비 귀엽고 통통한 볼살을 가지고 있으며 늘 노란 옷을 입고 다니며 커다란 맛동산을 가지고 다닌다. 맛동산의 대표 캐릭터이다.  ', 
        },
        {
            'imsrc':'char04_x2.png',
            name:'허니', 
            information:'달콤한을 탐지하기 위한 더듬이를 가지고 있으며 꿀벌인척 하기위해 코스튬을 입고 꿀을 발견하면 바로 찍어먹기 위한 꿀봉을 가지고 다닌다. 허니버터칩의 대표 캐릭터 이다. ', 
        },
        {
            'imsrc':'char05_x2.png',
            name:'맘두', 
            information:'해태제과의 상징 교자만두며 취미는 만두 빚기,레시피 개발 특기는 만드 저글링이다. 호기심이 많고 사교성이 좋은 만두다. 고향만두의 대표 캐릭터이다.', 
        },
        {
            'imsrc':'char06_x2.png',
            name:'차유식', 
            information:'충남 천안시 서북구에 사는 중학교 2학년 차유식. 운동을 좋아해서 평소에 손목과 발목에 아대를 차고다닌다 자유로운 시간을 보내는것과 자유시간 먹기를 좋아한다. 자유시간의 대표 캐릭터이다.', 
        }
      ];
  
  
    // $('.characters .charbox img').attr('src','./images/char01_x2.png');
    // $('.gallery-thumbs .title').html(characters[0].name);
    // $('.gallery-thumbs .main_t').html(characters[0].information);
    $('.content_inner .gallery-thumbs ul li:eq(0) a').css('filter','grayscale(0)'); //첫번째 버튼만 활성화
      
    $('.content_inner .gallery-thumbs a').click(function(e){
        e.preventDefault();
      
        var ind = $(this).index('.content_inner .gallery-thumbs a'); //0~5
        //ind = 0
        $('.content_inner .charbox img').attr('src','./images/content2/'+characters[ind].imsrc);
        $('.content_inner .charbox img').hide().fadeIn('slow');
  
        $('.content_inner .title').html(characters[ind].name);
        $('.content_inner .main_t').html(characters[ind].information);

        $('.content_inner .gallery-thumbs ul li a').css('filter','grayscale(100%)');
        $('.content_inner .gallery-thumbs ul li:eq('+ind+') a').css('filter','grayscale(0)');
    });
  });
