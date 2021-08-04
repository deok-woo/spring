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
			<div>${testList}</div>
			</c:forEach>
		</div>
		<button type="button" onclick="GoInsert()">등록</button>
	</div>
</body>

<script type="text/javascript">

function GoInsert(){
	
	console.log("이동");
	location.href = "/swempire/CRUD/insert"
	
	
}




</script>

</html>