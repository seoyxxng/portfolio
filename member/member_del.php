<?
    session_start();

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<meta charset="utf-8">
<?
  include "../lib/dbconn.php";

  $sql = "delete from member where id='$userid'";
  mysqli_query( $connect, $sql);

  // 세션변수 삭제
      unset($_SESSION['userid']);
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);

    mysqli_close($connect); 
    echo("
    <script>
    window.alert('탈퇴가 완료되었습니다.');
        location.href = '../index.html'; 
    </script>
    ");

?>
