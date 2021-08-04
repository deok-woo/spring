<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>


	<form action="${pageContext.request.contextPath}/insertBoard">
		<div>id: <input name="id"></div>
		<div>pw: <input name="pw"></div>
		<div>user_name: <input name="ueer_name"></div>
		<div>title: <input name="title"></div>
		<div>board_context: <input name="board_context"></div>
		
		<button>저장</button>
	</form>
</body>
</html>