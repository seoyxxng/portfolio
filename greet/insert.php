﻿<? session_start(); ?>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	// 새글쓰기
	// $liststyle = 'list'
  

	if(!$userid) {
		echo("
			<script>
				window.alert('로그인 후 이용해 주세요.')
				history.go(-1)
			</script>
		");
		exit;
	}

	if(!$subject) {
		echo("
			<script>
				window.alert('제목을 입력하세요.')
				history.go(-1)
			</script>
		");
		exit;
	}

	if(!$contents) {
		echo("
			<script>
				window.alert('내용을 입력하세요.')
				history.go(-1)
			</script>
		");
		exit;
	}

	$regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장
	include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

	if ($mode=="modify") 	// 수정일 때
	{
        $subject = htmlspecialchars($subject);
		$contents = htmlspecialchars($contents);
		$subject = str_replace("'", "&#039;", $subject);
		$contents = str_replace("'", "&#039;", $contents);

		$sql = "update greet set subject='$subject', content='$contents' where num=$num"; // sql 업데이트문
	}
	else  //새글쓰기
	{
		if ($html_ok=="y")
		{
			$is_html = "y";
		}
		else
		{
			$is_html = "";
		}
		
		$subject = htmlspecialchars($subject);
		$contents = htmlspecialchars($contents);
		$subject = str_replace("'", "&#039;", $subject);
		$contents = str_replace("'", "&#039;", $contents);
	 	//  "(&quot;) '(&#039;) &(&amp;) <(&lt;) >(&gt;)

		$sql = "insert into greet (id, name, nick, subject, content, regist_day, hit, is_html) ";
		$sql .= "values('$userid', '$username', '$usernick', '$subject', '$contents', '$regist_day', 0, '$is_html')";
	}

	mysqli_query( $connect, $sql); // $sql 에 저장된 명령 실행
	mysqli_close($connect);                 // DB 연결 끊기

	echo "
		<script>
			location.href = 'list.php?page=$page&liststyle=$liststyle';
		</script>
	";
?>

  
