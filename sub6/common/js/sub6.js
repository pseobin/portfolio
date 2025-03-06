(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "퍼블릭 키를 입력한다",
    });
})();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('서비스 id값을 넣는다', '템플릿 id값을 넣는다', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('메일 전송에 성공하였습니다.');
            }, (error) => {
                console.log('FAILED...', error);
                alert('메일 전송에 실패하였습니다.');
            });
    });
