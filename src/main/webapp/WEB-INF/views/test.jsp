<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<script src="${pageContext.request.contextPath}/resources/js1/jquery-3.5.1.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js1/common.js"></script>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<div>
		<div>
			<c:forEach var="test" items="${testList}">
			<div>${testList}</div>
			</c:forEach>
		</div>
		<button type="button" onclick="GoInsert()">���</button>
	</div>
</body>

<script type="text/javascript">

function GoInsert(){
	
	console.log("�̵�");
	location.href = "/swempire/CRUD/insert"
	
	
}




</script>

</html>