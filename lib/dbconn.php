<?
    $connect=mysqli_connect( "localhost", "psb", "1234", "psb_db") or  
        die( "SQL server에 연결할 수 없습니다.");

        mysqli_select_db($connect , "psb_db");
?>