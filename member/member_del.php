<?
    session_start();
    // $_SESSION['userid'] = $userid;
    // $_SESSION['username'] = $username;
    // $_SESSION['usernick'] = $usernick;
    // $_SESSION['userlevel'] = $userlevel;

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<meta charset="UTF-8">
<?
    include "../lib/dbconn.php"; 

    $sql = "delete from member where id='$userid'";
    mysqli_query( $connect, $sql);

    //세션 변수 삭제
    unset($_SESSION['userid']);
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);

    mysqli_close($connect);                // DB 연결 끊기
    echo "
        <script>
            window.alert('회원 탈퇴가 완료되었습니다.');
            location.href = '../index.html';
        </script>
    ";
?>