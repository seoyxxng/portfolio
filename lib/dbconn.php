<?
    $connect=mysqli_connect( "localhost", "syk", "1234", "syk_db") or  
        die( "SQL server에 연결할 수 없습니다.");

        mysqli_select_db($connect , "syk_db");
?>