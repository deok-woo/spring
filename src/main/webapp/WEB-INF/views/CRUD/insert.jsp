<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>등록</title>
<script src="${pageContext.request.contextPath}/resources/js1/jquery-3.5.1.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js1/common.js"></script>
<%
request.setCharacterEncoding("utf-8");
String cp = request.getContextPath();
%>


</head>

<body style="overflow-x:hidden;">
	<form name="form1" id="form1">
		<div class="wrap">
			<header class="main-header">
			<br>
				<h1 class="header-title" style="position: relative; left: 16px">사용자 등록</h1>
			</header>
			<br>
			<div class="media-left" style="padding-right: 30px;">
				<span style="padding: 0px 35px">ID</span> 
				<input 
				type="text"
				name="id" 
				class="form-control input-sm pull-right"
				maxlength="20"
				>
				
			</div>
<br>
			<div class="media-left" style="padding-right: 30px;">
				<span style="padding: 0px 35px">비밀번호</span> 
				<input 
				type="text"
				name="pw" 
				class="form-control input-sm pull-right"
				maxlength="20"
				>
				</div>
<br>
			<div class="media-left" style=" padding-right: 30px;">
				<span style="padding: 0px 35px">이름</span> 
				<input 
				type="text"
				name="user_name" 
				class="form-control input-sm pull-right"
	
				maxlength="20"
				>
				</div>
<br>
			<div class="media-left" style="padding-right: 30px;">
				<span style="padding: 0px 35px">제목</span> 
				<input 
				type="text"
				name="title" 
				class="form-control input-sm pull-right"
				maxlength="20"
				>
			</div>
<br>
			<div class="media-left" style="padding-right: 30px;">
				<span style="padding: 0px 35px">내용</span> 
				<input 
				type="text"
				name="board_context" 
				class="form-control input-sm pull-right" 
				maxlength="20"
				>
			</div>
<br>
		
<br>
			<div class="media-left" style="width: 80px;">

					<button type="button" onClick="insertData()">입력</button>
					<button type="button" onclick = "closeData()">뒤로</button>
			</div>
		</div>
	</form>
</body>


<script>


function closeData(){
	console.log("fsdfdsfsd")
	
	history.back();
	
}


function insertData() {


	
	var f = document.form1;
	if (!f.id.value) {

		alert("id를 입력하세요");
		f.id.focus();
		return;

	}

	if (!f.pw.value) {

		alert("pw");
		f.pw.focus();
		return;

	}

	if (!f.user_name.value) {

		alert("이름");
		f.user_name.focus();
		return;

	}

	if (!f.title.value) {

		alert("제목");
		f.title.focus();
		return;

	}

	if (!f.board_context.value) {

		alert("분류를 입력하세요");
		f.board_context.focus();
		return;

	}


	alert("등록되었습니다.")

	$
			.ajax({
				url : "${pageContext.request.contextPath}/admin/weaponpop/writeAjax.do",
				type : 'post',
				dataType : 'json',
				data : $('#form1').serialize(),
				success : function(result) {
					if (result.result) {
						console.log(result);
						//alert('건물 등록 완료');
						alert(result.msg);
						alert(result.result);
						location.reload();

					} else {
						alert('실패');
					}
				},
				error : function(xhr, textStatus, errorThrown) { // Error
					/* alert(xhr);
					alert(textStatus);
					alert(errorThrown); */
					alert(result.msg);
				}
			});
}




</script>


</html>

