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
	<div>
		<div>
			<c:forEach var="test" items="${testList}">
				<p> num : ${test.board_num}</p> 
     			<p>id : ${test.id}</p>
     			<p>pw : ${test.pw}</p>
     			<p>user_name : ${test.user_name}</p>
     			<p>title : ${test.title}</p>
     			<p>board_context : ${test.board_context}</p>
			</c:forEach>
		</div>

		<form action="${pageContext.request.contextPath}/insertTest">
			<div>id: <input name="id"></div>
			<div>pw: <input name="pw"></div>
			<div>user_name: <input name="user_name"></div>
			<div>title: <input name="title"></div>
			<div>board_context: <input name="board_context"></div>
			<button>저장</button>
			<div>${testList}</div>
			<div>${test}</div>
		</form>
	</div>
</body>
</html>