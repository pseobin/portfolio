<? 
	session_start();
    
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 - 가입완료</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="./css/member_common.css">
    <link rel="stylesheet" href="./css/member_form.css">

    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <!-- <script src="./js/member_check.js"></script> -->
</head>
<body>

    <header>
        <h1><a href="../index.html"></a></h1>
    </header>


    <article id="content">
        <h2>Join</h2>
        <ul class="step_tab">
            <li>약관동의</li>
            <li>정보입력</li>
            <li class="active">가입완료</li>
        </ul>

        <div class="join_ok_wrap">
            
            <p>
                <strong>해태제과</strong><br>
                회원가입이 완료되었습니다. 감사합니다.
            </p>
            
            <div>
                <a href="../login/login_form.php">LOGIN</a>
                <a href="../index.html">MAIN</a>
            </div>

        </div>
                
	</article>
</body>
</html>