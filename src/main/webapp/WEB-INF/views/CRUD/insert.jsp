<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>

<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body style="overflow-x:hidden;">
	<form name="form1" id="form1">
		<div class="wrap">
			<header class="main-header">
			<br>
				<h1 class="header-title" style="position: relative; left: 16px">����� ���</h1>
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
				<span style="padding: 0px 35px">��й�ȣ</span> 
				<input 
				type="text"
				name="pw" 
				class="form-control input-sm pull-right"
				maxlength="20"
				>
				</div>
<br>
			<div class="media-left" style=" padding-right: 30px;">
				<span style="padding: 0px 35px">�̸�</span> 
				<input 
				type="text"
				name="user_name" 
				class="form-control input-sm pull-right"
	
				maxlength="20"
				>
				</div>
<br>
			<div class="media-left" style="padding-right: 30px;">
				<span style="padding: 0px 35px">����</span> 
				<input 
				type="text"
				name="title" 
				class="form-control input-sm pull-right"
				maxlength="20"
				>
			</div>
<br>
			<div class="media-left" style="padding-right: 30px;">
				<span style="padding: 0px 35px">����</span> 
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

				<button type="button" onclick="insertData()"
					class="btn btn-sm btn-default" style="position: relative; left: 55px">���</button>
					<button type="button" id="btn-close" class="btn btn-sm btn-default" style="position: relative; left: 215px ; top:-36px"> ���</button>
			</div>
		</div>
	</form>
</body>

<script>






</script>

</html>