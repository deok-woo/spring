var MAX_DAY = 90;

(function($) {
	
	$(document).keydown(function(e) {
		
		if ( e.target.nodeName.toUpperCase() !== 'INPUT' && e.target.nodeName.toUpperCase() !== 'TEXTAREA' ) {
			
			if ( e.keyCode === 8 ) {
				
				return false;
				
			}
			
		}
		
	});
	
	$.ajaxSetup({
	       beforeSend: function(xhr) {
	        xhr.setRequestHeader("AJAX", true);
	    },
	    error: function(xhr, status, err) {
	    	loading.hide();
	        if (xhr.status == 401) {
	        	alert("예외가 발생했습니다. 관리자에게 문의하세요.");
	        } else if (xhr.status == 900) {
	        	alert("세션이 만료되었습니다.");
	        	location.href = "/index.jsp";
	        } else if (xhr.status == 901) {
	        	alert("해당 메뉴에 대한 접근권한이 없습니다.");
	        	location.href = "/main/main.do";
	        } else if (xhr.status == 902) {
	        	alert("사용자 PC의 아이피 정보가 변경되어 서비스 이용이 불가능 합니다. 다시 로그인해 주시기 바랍니다.");
	        	location.href = "/sign/logout.do";
	        }  else {
	            alert("서버와 통신 중 에러가 발생하였습니다.");
	        }
	    },
	    complete : function(xhr) {
	    	//loading.hide();
	    }
	});
	
})(jQuery);

/**
 * 숫자만 입력 가능
 */
function numberOnlyHandler() {
	
	var regExp = /^[ㄱ-ㅎ가-힣]+/;
	
	$('.numOnly').css('imeMode', 'disabled').keypress(function(event) {
		if(event.which && (event.which < 48 || event.which > 57) && event.which != 8 ) {
			event.preventDefault();
		}
	}).keyup(function() {
		
		var $this = $(this)
		if($this.val() != null && $this.val() != '' ) {
			
			if ( regExp.test($this.val()) ) {
				$this.val( $this.val().replace(/[^0-9]/g,'') );
			}
			
		}
		
	});
	
}

/**
 * 백단위 콤마 찍기
 */
function numberDecimalHandler() {
	
	$(".numDecimal").keyup(function() {
		
		$(this).val( fn_getFormatNumber($(this).val(), 3) );
		
	});
	
}

function wrapWindowByMask() {
	var maskHeight = $(document).height();  
	var maskWidth = $(window).width();
	var $mask = $('.mask');
		
	$mask.css({'width':maskWidth,'height':maskHeight}).show();  
}

var loading = {};
loading = {
	
		show : function() {
			wrapWindowByMask();
		},
		hide : function() {
			$('.mask').hide();
		}
		
};

function datepicker(objId) {
	/*
	$("#"+objId).datepicker({
		language: 'kr',
		dateFormat: "yyyy-mm-dd",
		//minDate: new Date(),	// 오늘부터
		showOn: "button",
		buttonImage: "/resources/images/icon/calendar2.jpg",
		buttonImageOnly: true,
		buttonText:'달력',
		//defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		onselect: function( selectedDate ) {
			var option = this.id == "abc" ? "minDate" : "maxDate",
				instance = $( this ).data( "datepicker" ),
				date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings );
			dates.not( this ).datepicker( "option", option, date);
		},
		onClose: function( selectedDate ) {
	        $( "#exprDate" ).datepicker( "option", "minDate", selectedDate );
	    }
	});
	*/
	
	$("#"+objId).attr("readonly", "true");
	
	$('#'+objId).datepicker({
		language: 'kr',
		format: 'yyyy-mm-dd'
	});
}

/******************************************************************* 
FUNCTION		:	fn_winPop
DESCRIPTION		:	팝업창 호출
PARAMETER		:	url:요청url, name:팝업창이름, width:팝업창넓이, height:팝업창높이, scrollbars:팝업창스크롤바유무
EXAMPLE			:	fn_winPop('/pop/pop.asp', 'testPop', 700, 510, 'No')
*******************************************************************/
function fn_winPop(url, name, width, height, scrollbars) {
	var nUrl		=	url;
	var nName		=	name;
	var nWidth		=	width;
	var nHeight		=	height;
	var nScrollbars	=	scrollbars;
	var top			=	0;
	var left		=	0;
	
	/*
	if (navigator.appVersion.indexOf("MSIE 6") > -1) {
		nHeight	+=	30;
	}
	*/
	
	/*
	if (!fn_isIE() || navigator.appVersion.indexOf("MSIE 6") > -1) {
		nWidth += 26;
		nHeight	+= 53;
	}
	*/

	nWidth += 26;
	nHeight	+= 53;
	
	if (top == "" || top === undefined) {
		top = 0;
	}
	
	if (left == "" || left == undefined) {
		left = 0;
	}

	var winOpt="width="+nWidth+",height="+nHeight+",scrollbars="+nScrollbars+",menubar=No,resizable=Yes,status=No,toolbar=No,top="+top+",left="+left;
	//window.open(nUrl, name, "width="+nWidth+",height="+nHeight);
	window.open(nUrl, nName, winOpt);
}

function fn_winModal(url, name, width, height, scrollbars) {
	var nUrl		=	url;
	var nName		=	name;
	var nWidth		=	width;
	var nHeight		=	height;
	var nScrollbars	=	scrollbars;
	
	/*
	if (navigator.appVersion.indexOf("MSIE 6") > -1) {
		nHeight	+=	30;
	}
	*/
	
	/*
	if (!fn_isIE() || navigator.appVersion.indexOf("MSIE 6") > -1) {
		nWidth += 26;
		nHeight	+= 53;
	}
	*/

	nWidth += 26 + "px";
	nHeight	+= 53 + "px";	
	
	var winOpt="dialogWidth:"+nWidth+";dialogHeight:"+nHeight+";scrollbars="+nScrollbars+";center:Yes;help:No;resizable:No;";
	window.showModalDialog(nUrl, self, winOpt);
}

/******************************************************************* 
FUNCTION		:	isNumber
DESCRIPTION		:	입력값이 숫자로만 구성되어 있는지 체크
PARAMETER		:	obj : 폼요소 name 또는 id
EXAMPLE			:   isNumber('jumin1')
*******************************************************************/
function isNumber(obj) {
	var nChars = "0123456789";
	
	containsOnlyChars(obj, nChars);
}

/******************************************************************* 
FUNCTION		:	containsOnlyChars
DESCRIPTION		:	입력값이 특정 문자만으로 되어있는지 체크
PARAMETER		:	
EXAMPLE			:   
*******************************************************************/
function containsOnlyChars(obj, chars) {
	var nInput = obj.value;
	var nStr = "";

	for (var idx = 0; idx < nInput.length; idx++) {
		if (chars.indexOf(nInput.charAt(idx)) == -1) {
			if (nInput.charCodeAt(idx) < 128) {
				nStr = nInput.substring(0, idx);
			} else {
				nStr = nInput.substring(0, idx-1);
			}

			obj.value = nStr;
			return false;
		}
	}

	return true;
}

/******************************************************************* 
FUNCTION		:	fn_getCurrentDate
DESCRIPTION		:	오늘 날짜 반환
PARAMETER		:	
EXAMPLE			:   
*******************************************************************/
function fn_getCurrentDate() {
	var nDate = new Date();
	var nYear;
	var nMon;
	var nDay;

	nYear = nDate.getFullYear().toString();
	nMon = fn_getAddZero(nDate.getMonth() + 1).toString();
	nDay = fn_getAddZero(nDate.getDate()).toString();

	return nYear+"-"+nMon+"-"+nDay;
}

/******************************************************************* 
FUNCTION		:	fn_getChangeDate
DESCRIPTION		:	인자값의 따른 날짜 계산
PARAMETER		:	dayPrefix : 계산할 인자값
EXAMPLE			:   fn_getChangeDate(-180) 오늘날짜에서 180일 이전 날짜를 반환
*******************************************************************/
function fn_getChangeDate(dayPrefix) {
	var nDate = new Date();
	var nNewDate = new Date();
	var nYear;
	var nMon;
	var nDay;

	if (dayPrefix === "" || dayPrefix === undefined) {
		dayPrefix = -1;
	}

	nNewDate.setTime(nDate.getTime() + (parseInt(dayPrefix) * 24 * 60 * 60 * 1000));
	
	nYear = nNewDate.getFullYear().toString();
	nMon = fn_getAddZero(nNewDate.getMonth() + 1).toString();
	nDay = fn_getAddZero(nNewDate.getDate()).toString();

	return nYear+"-"+nMon+"-"+nDay;
}

/******************************************************************* 
FUNCTION		:	fn_getAddZero
DESCRIPTION		:	인자값의 길이가 1이면 0을 붙여서 리턴
PARAMETER		:	obj : 0을붙일 값
EXAMPLE			:   fn_getAddZero(1) return 01
*******************************************************************/
function fn_getAddZero(obj) {
	var nVal = "";

	if (obj !== "" && obj !== undefined) {
		nVal = obj.toString().length == 1 ? "0" + obj : obj;
	}

	return nVal;
}

/******************************************************************* 
FUNCTION		:	fn_getLpad
DESCRIPTION		:	padStr을 len의 길이만큼 왼쪽에 붙여서 리턴
PARAMETER		:	data, len, padstr
EXAMPLE			:   fn_getLpad('5', 2, '0') return 05
*******************************************************************/
function fn_getLpad(data, len, padStr) {
	var nVal		=	"";
	var nPadCnt		=	0;

	nPadCnt = len - data.toString().length;

	for (var i = 0; i < nPadCnt; i++) {
		nVal += padStr;
	}

	return nVal + data;
}

/******************************************************************* 
FUNCTION		:	fn_getRpad
DESCRIPTION		:	padStr을 len의 길이만큼 오른쪽에 붙여서 리턴
PARAMETER		:	data, len, padstr
EXAMPLE			:   fn_getRpad('5', 2, '0') return 50
*******************************************************************/
function fn_getRpad(data, len, padStr) {
	var nVal		=	"";
	var nPadCnt		=	0;

	nPadCnt = len - data.toString().length;

	for (var i = 0; i < nPadCnt; i++) {
		nVal += padStr;
	}

	return data + nVal;
}

/******************************************************************* 
FUNCTION		:	fn_getAddDash
DESCRIPTION		:	날짜에 '-' 붙여서 리턴
PARAMETER		:	date
EXAMPLE			:   fn_getAddDash('20130101') return 2013-01-01
*******************************************************************/
function fn_getAddDash(date) {
	var nVal	=	"";
	var nYear	=	"";
	var nMon	=	"";
	var nDay	=	"";

	nYear		=	date.substr(0, 4);
	nMon		=	date.substr(4, 2);
	nDay		=	date.substr(6, 2);
	nVal		=	nYear + "-" + nMon + "-" + nDay;

	return nVal;
}

/******************************************************************* 
FUNCTION		:	fn_getAddDash2
DESCRIPTION		:	날짜에 '-' 붙여서 리턴
PARAMETER		:	date
EXAMPLE			:   fn_getAddDash2('20130101', 'yyyymmdd') return 2013-01-01
*******************************************************************/
function fn_getAddDash2(date, format) {
	var nVal	=	"";
	var nYear	=	"";
	var nMon	=	"";
	var nDay	=	"";
	var nHour	=	"";
	var nMinute	=	"";

	date		=	fn_trim(date, "-");
	date		=	fn_trim(date, ":");
	date		=	fn_trim(date, " ");
	nYear		=	date.substr(0, 4);
	nMon		=	date.substr(4, 2);
	nDay		=	date.substr(6, 2);
	nHour		=	date.substr(8, 2);
	nMinute		=	date.substr(10, 2);

	if (format == "yyyy") {
		nVal	=	nYear;
	} else if (format == "yyyymm") {
		nVal	=	nYear + "-" + nMon;
	} else if (format == "yyyymmdd") {
		nVal	=	nYear + "-" + nMon + "-" + nDay;
	} else if (format == "yyyymmddHH") {
		nVal	=	nYear + "-" + nMon + "-" + nDay + " " + nHour;
	} else if (format == "yyyymmddHHMM") {
		nVal	=	nYear + "-" + nMon + "-" + nDay + " " + nHour + ":" + nMinute;
	} else if (format == "mm") {
		nVal	=	nMon;
	} else if (format == "mmdd") {
		nVal	=	nMon + "-" + nDay;
	} else if (format == "mmddHH") {
		nVal	=	nMon + "-" + nDay + " " + nHour;
	} else if (format == "mmddHHMM") {
		nVal	=	nMon + "-" + nDay + " " + nHour + ":" + nMinute;
	} else {
		nVal	=	nYear + "-" + nMon + "-" + nDay;
	}
	

	return nVal;
}

/******************************************************************* 
FUNCTION		:	fn_isEngValidation
DESCRIPTION		:	영문자 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isEngValidation(objData) {
	var nRegExp = /^[a-zA-Z]+$/;

	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isUpperEngValidation
DESCRIPTION		:	영문 대문자 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isUpperEngValidation(objData) {
	var nRegExp = /^[A-Z]+$/;

	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isLowEngValidation
DESCRIPTION		:	영문 소문자 숫자 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isLowEngValidation(objData) {
	var nRegExp = /^[a-z0-9]+$/;

	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isEngNumberValidation
DESCRIPTION		:	영문자 숫자 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isEngNumberValidation(objData) {
	var nRegExp = /^[a-zA-Z0-9]+$/;

	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isEngNumberSpecialValidation
DESCRIPTION		:	영문자 숫자 특수문자 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isEngNumberSpecialValidation(objData) {
	var nRegExp = /^[a-zA-Z0-9~!@#$%^&*()_-]+$/;

	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isSpecialChar
DESCRIPTION		:	영문,한글,숫자,_ 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isSpecialChar(objData) {
	var nRegExp = /^([a-zA-Z0-9ㄱ-ㅎ가-힣\(\)\_\-\/ ]+)$/;
	
	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isNumber
DESCRIPTION		:	숫자 체크(비밀번호)
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isNumber(objData) {
	var nRegExp = /^([0-9]+)$/;
	
	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isHomePhoneNo
DESCRIPTION		:	집,사물실 전화번호체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isHomePhoneNo(objData) {
	var nRegExp = /^((02)|(0[3-9]{1}[0-9]{1}))([0-9]{4}|[0-9]{3})([0-9]{4})$/;
	
	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isMobilePhoneNo
DESCRIPTION		:	휴대폰번호 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isMobilePhoneNo(objData) {
	var nRegExp = /^(01[0|1|6|7|8|9])([0-9]{4}|[0-9]{3})([0-9]{4})$/;
	
	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isEngHan
DESCRIPTION		:	영문,한글 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isEngHan(objData) {
	var nRegExp = /^[a-zA-Zㄱ-ㅎ가-힣]+$/;
	
	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isHan
DESCRIPTION		:	한글 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isHan(objData) {
	var nRegExp = /^[ㄱ-ㅎ가-힣]+$/;
	
	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isEngNum
DESCRIPTION		:	영문대문자,숫자 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isEngNum(objData) {
	var nRegExp = /^[A-Z0-9]+$/;
	
	return nRegExp.test(objData);
}

function fn_isPwd(objData) {
	var nRegExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*[~!@#$^*()_])).{8,32}$/;
	
	return nRegExp.test(objData);
}

function fn_isEmail(objData) {
	var nRegExp = /^[_a-zA-Z0-9\-]+@[\._a-zA-Z0-9\-]+\.[a-zA-Z]{2,}/;
	
	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	charCode
DESCRIPTION		:	숫자만입력가능한 함수
PARAMETER		:	evt : input box 이벤트
EXAMPLE			:   
*******************************************************************/
function isNumberKey(e, decimal) {
	 var key; 
	 var keychar;
	 
	 if (window.event) { 
		 key = window.event.keyCode; 
	 } else if (e) { 
		 key = e.which; 
     } else { 
		 return true; 
     } 
	 
	 keychar = String.fromCharCode(key);
	 
	 if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) { 
		 return true;
	 } else if ((("0123456789").indexOf(keychar) > -1)) { 
		  return true; 
	 } else if (decimal && (keychar == ".")) { 
		  return true; 
	 } else {
		  return false;
	 }



    //var charCode = (evt.which) ? evt.which : event.keyCode;
	/*
	charCode = event.keyCode;

    if (!((charCode >= 37 && charCode <= 57) || (charCode >= 96 && charCode <= 105) || charCode == 8 || charCode == 9)) {
		return false;
	}

    return true;
	*/
}

/******************************************************************* 
FUNCTION		:	fn_isFileCodeValidation
DESCRIPTION		:	DM 폴더/파일코드 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isFileCodeValidation(objData) {
	var nRegExp = /^([a-zA-Z\_]+)$/;

	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_isAgnCodeValidation
DESCRIPTION		:	업체코드 체크
PARAMETER		:	objData : 유효성검사할 값
EXAMPLE			:   
*******************************************************************/
function fn_isAgnCodeValidation(objData) {
	var nRegExp = /^([a-zA-Z0-9\_]+)$/;

	return nRegExp.test(objData);
}

/******************************************************************* 
FUNCTION		:	fn_callCalendar
DESCRIPTION		:	js 달력팝업 호출
PARAMETER		:	
EXAMPLE			:   
*******************************************************************/
function fn_callCalendar(sDate) {
	var retVal;
	var scrX = (event != null) ? event.screenY : '';
	var scrY = (event != null) ? event.screenX - 185 : '';
	//var dialogWidth = 240;
	//var dialogHeight = 195;
	//var scrX = (sDate != null) ? document.getElementById("sdtCaneldar").offsetLeft : '';
	//var scrY = (sDate != null) ? document.getElementById("sdtCaneldar").offsetTop : '';
	var dialogWidth = 245;
	var dialogHeight = 200;

	if (sDate == null) {
	
	} else if (sDate.type == 'text') {
	
	} else {
		if(!sDate.Enable) {
			return true;
		}

		if(sDate.readOnly == true) {
			return true;
		}
	}

	if(navigator.appVersion.indexOf('MSIE 6') > 0) {
		dialogWidth = dialogWidth + 10;
		dialogHeight = dialogHeight + 30;
	} 

	var url = '../inc/calendar.html';
	var varParam = new Object();
	var openParam = 'dialogTop:' + scrX + '; dialogLeft:' + scrY + '; dialogWidth:' + dialogWidth + 'px; dialogHeight:' + dialogHeight + 'px; Raised; resizable: no; status: no';
	var retParam;
	
	if (sDate == null) {
		varParam.sDate = '';
	} else if (sDate.type == 'text') {
		varParam.sDate = fn_trim(sDate.value, "-");
		//varParam.sDate = sDate.value;
	} else {
		varParam.sDate = sDate.text;
	}
	
	retVal = window.showModalDialog(url, varParam, openParam);

	if (sDate) {
		if (sDate.disabled == true)
			return true;
	}
	
	var retYear;
	var retMon;
	var retDay;

	if (retVal != null) {
		retYear = retVal.substr(0, 4);
		retMon = retVal.substr(4, 2);
		retDay = retVal.substr(6, 2);
		
		if (sDate == null) {
			return retVal;
		} else if(sDate.type == "text") {
			sDate.value = retYear + "-" + retMon + "-" + retDay;
			//sDate.value = retVal;
		} else {
			sDate.text = retYear + "-" + retMon + "-" + retDay;
			//sDate.text = retVal;
		}
		
	}

	return true;
}

/******************************************************************* 
	FUNCTION		:	fn_trim
	DESCRIPTION		:	원하는 값 제거
	PARAMETER		:	sDate : 데이터, sRemove : 제거할 값
	EXAMPLE         :   fn_trim('2012-12-01', '-') return 20121201
*******************************************************************/
function fn_trim(sData, sRemove) {
	var nObj = sData;
	var nTempStr1;
	var nTempStr2;
	var nIdx = nObj.indexOf(sRemove);

	if (sData == "" || sRemove == "") {
		return nObj;
	}

	while (nIdx != -1) {
		nTempStr1 = nObj.substr(0, nIdx);
		nTempStr2 = nObj.substr(nIdx+1);
		nObj = nTempStr1 + nTempStr2;

		nIdx = nObj.indexOf(sRemove);
	}

	return nObj;
}

/******************************************************************* 
	FUNCTION		:	fn_getLastDay
	DESCRIPTION		:	주어진 연,월에 해당하는 마지막날짜 구하기
	PARAMETER		:	objYear : 연도, objMon : 월
	EXAMPLE         :   fn_getLastDay('2012', '01') return 31
*******************************************************************/
function fn_getLastDay(objYear, objMon) {
	if (objYear.toString().length != 4 || objMon.toString().length != 2) {
		return "";
	}

	var d = new Date(objYear, objMon, "");
	
	return d.getDate();
}

/******************************************************************* 
	FUNCTION		:	fn_dateChk
	DESCRIPTION		:	달력 시작일과 종료일 과 검색일자 체크 스크립트
	PARAMETER		:	
*******************************************************************/
function fn_dateChk(stDate, enDate, day) {
	var chk = 	true;
	stDate	=	fn_trim(stDate, "-");
	enDate	=	fn_trim(enDate, "-");
	if (fn_trim(stDate, "-").length == 8 && fn_trim(enDate, "-").length == 8) {
		if (stDate <= enDate) {
			var sYear = stDate.substring(0,4);
			var sMonth = stDate.substring(4,6);
			var sDay = stDate.substring(6,8);
			var sDayVal = Number(sYear) * 360 + Number(sMonth) * 30 + Number(sDay);
			
			var eYear = enDate.substring(0,4);
			var eMonth = enDate.substring(4,6);
			var eDay = enDate.substring(6,8);
			var eDayVal = Number(eYear) * 360 + Number(eMonth) * 30 + Number(eDay);
			
			if (day != "") {
				var dur = eDayVal - sDayVal;
					
				if (day >= dur+1) {
					chk = false;
				} else {
					alert('검색조건이 ' + day + '일을 초과했습니다.');
				}
			} else {
				chk = false;
			}
		} else {
			alert('시작일이 종료일보다 큽니다.');
		}
	} else {
		alert('날짜를 확인해 주세요');
	}

	return chk;
}

/******************************************************************* 
FUNCTION		:	fn_dateValidator
DESCRIPTION		:	달력 시작일과 종료일 과 검색일자 체크 스크립트
PARAMETER		:	
*******************************************************************/
function fn_dateValidator(stDate, enDate) {
	var chk = 	true;
	stDate	=	stDate !== '' && stDate !== undefined ? fn_trim(stDate, "-") : "";
	enDate	=	enDate !== '' && enDate !== undefined ? fn_trim(enDate, "-") : "";
	
	if ( stDate !== '' && enDate === '' ) {
		alert("등록일자를 선택해 주시기 바랍니다.");
		return false;
	}
	
	if ( stDate === '' && enDate !== '' ) {
		alert("등록일자를 선택해 주시기 바랍니다.");
		return  false;
	}
	
	if (stDate > enDate) {
		alert('시작일이 종료일보다 큽니다.');
		return false;
	}
	
	return chk;
}

/******************************************************************* 
	FUNCTION		:	fn_winCenter
	DESCRIPTION		:	팝업창 가운데 이동
	PARAMETER		:	
	EXAMPLE         :   
*******************************************************************/
function fn_winCenter() {
	var x;
	var y;

	if (self.innerHeight) { //IE외 모든 브라우저
		x = (screen.availWidth - self.innerWidth) / 2;
		y = (screen.availHeight - self.innerHeight) / 2;
	} else if (document.documentElement && document.documentElement.clientHeight) { //IE 6이상 버전
		x = (screen.availWidth - document.documentElement.clientWidth) / 2;
		y = (screen.availHeight - document.documentElement.clientHeight) / 2;
	} else if (document.body) { //IE 6이하 버전
		x = (screen.avaliWidth - document.body.clientWidth) / 2;
		y = (screen.avaliHeight - document.body.clientHeight) / 2;
	}

	window.moveTo(x, y);	//팝업창아 움직이거라
}

/******************************************************************* 
	FUNCTION		:	fn_initForm
	DESCRIPTION		:	폼요소 입력 값 설정(input box에 ival='1234' 와 값이 입력값을 입력해야함.)
	PARAMETER		:	form_name : 폼이름
	EXAMPLE         :   fn_initForm('form1')
*******************************************************************/
function fn_initForm(form_name) {
	var nForm	=	document.getElementById(form_name);
	var nLen;	//form 요소의 갯수(폼안에 text, checkbox, radio 등의 갯수)
	var nTyp;	//form 요소의 타입(text, checkbox, radio, select...)
	var nIval;	//각 요소의 초기화 하고자 하는 값
	var nObj;
	var _tmpVal;

	nLen = nForm.elements.length;
	
	for (var i = 0; i < nLen; i++) {
		nObj = nForm.elements[i];
		nTyp = nForm.elements[i].type.toUpperCase();
		nIval = nObj.getAttribute("ival");

		if (nIval && (nTyp == "RADIO" || nTyp == "CHECKBOX")) {
			_tmpVal = nIval.split("^");
			
			if (_tmpVal.length > 0) {
				for (var j = 0; j < _tmpVal.length; j++) {
					$("input:checkbox[ id='" + nForm.elements[i].id + "' ]").each(function() {
						if ($(this).val() == _tmpVal[j]) {
							this.checked = true;
						}
					});

					//if (nForm.elements[i].value == _tmpVal[j]) {
					//	nForm.elements[i].checked = true;	
					//}
				}//
			} else {
				$("input:checkbox[ id='" + nForm.elements[i].id + "' ]").each(function() {
					if ($(this).val() == _tmpVal[j]) {
						this.checked = true;
					}
				});	
				
				//if (nForm.elements[i].value == nIval) {
				//	nForm.elements[i].checked = true;
				//}
			}//
		}//
	}//
}

/******************************************************************* 
	FUNCTION		:	fn_initLayout
	DESCRIPTION		:	팝업창 레이아웃 크기 설정
	PARAMETER		:	
	EXAMPLE         :   
*******************************************************************/
function fn_initLayout(objHeader, objHeader2, objBottom) {
	if (self.innerHeight) {	//IE외 모든 브라우저
		$("#"+objHeader).css("line-height", $("#"+objHeader).height() / 2 + 10 + "px");

		if (objHeader2 != "") {
			$("#"+objHeader2).css("line-height", $("#"+objHeader2).height() / 2 + 10 + "px");
		}

		$("#"+objBottom).css("line-height", $("#"+objBottom).height() / 2 + 10 + "px");
	} else {
		$("#"+objHeader).css("line-height", $("#"+objHeader).height() + "px");

		if (objHeader2 != "") {
			$("#"+objHeader2).css("line-height", $("#"+objHeader2).height() + "px");
		}

		$("#"+objBottom).css("line-height", $("#"+objBottom).height() + "px");
	}
}

/******************************************************************* 
	FUNCTION		:	fn_pager
	DESCRIPTION		:	페이징처리
	PARAMETER		:	page : 현재페이지번호, listBlock : 한페이지찍힐 리스트수, pageBlock : 한페이지찍힐 페이징수, pageCount : 총페이징수, url : url
	EXAMPLE         :   fn_pager(1, 15, 15, '../url/url.asp')
*******************************************************************/
function fn_pager(page, listBlock, pageBlock, pageCount, url) {
	var str = "";
	var nBlockPage = parseInt((page - 1) / pageBlock) * parseInt(pageBlock) + 1;
	var nEndBlockPage = parseInt((page - 1) / pageBlock) * parseInt(pageBlock) + parseInt(pageBlock);

	if (nEndBlockPage > pageCount) {
		nEndBlockPage = pageCount;
	}

	if (page == 1) {
		str = "[처음]";
		str += "[이전]";
	} else {
		str += "<a href='javascript:fn_page(1);'>[처음]</a>";

		if (nBlockPage == 1) {
			str += "[이전]";
		} else {
			str += "<a href='javascript:fn_page(" + parseInt(nBlockPage - 1) + ");'>[이전]</a>";
		}
	}
	
	for (var i = nBlockPage; i <= nEndBlockPage; i++) {
		if (i == page) {
			str += "<font color='orange'>[" + i + "]</font>";
		} else {
			str += "<a href='javascript:fn_page(" + i + ");'>[" + i + "]</a>";
		}
	}

	if (page >= pageCount) {
		str += "[다음]";
		str += "[끝]";
	} else {
		if (nEndBlockPage >= pageCount) {
			str += "[다음]";
		} else {
			str += "<a href='javascript:fn_page(" + parseInt(nEndBlockPage + 1) + ");'>[다음]</a>";
		}

		if (page < pageCount) {
			str += "<a href='javascript:fn_page(" + pageCount + ");'>[끝]</a>";
		}
	}

	return str;
}

/******************************************************************* 
	FUNCTION		:	fn_decodeHtml
	DESCRIPTION		:	html태그 decode
	PARAMETER		:	strHTML : decode시킬 String
	EXAMPLE         :   fn_decodeHtml('&lt;script&gt;aaa&lt;/script&gt;')
*******************************************************************/
function fn_decodeHtml(strHtml) {
	strHtml = strHtml.replace(/&amp;/g, "&");
	strHtml = strHtml.replace(/&lt;/g, "<");
	strHtml = strHtml.replace(/&gt;/g, ">");
	strHtml = strHtml.replace(/&#34;/g, "\"");
	strHtml = strHtml.replace(/&#39;/g, "\'");
	strHtml = strHtml.replace(/null/g, "%00");
	strHtml = strHtml.replace(/&#37;/g, "%");
	//strHtml = strHtml.replace(/\n/g, "</br>");
	//strHtml = strHtml.replace(/<BR>/g, "CHR(13)CHR(10)");
	//strHtml = strHtml.replace(/&quot;/g, "CHR(34)");

	return strHtml;
}

/******************************************************************* 
	FUNCTION		:	fn_isIE
	DESCRIPTION		:	Internet Explorer 유무확인
	PARAMETER		:	
	EXAMPLE         :   fn_isIE() return true||false
*******************************************************************/
function fn_isIE() {
	var flag = false;
	var browser = navigator.appVersion;
	var _IE = Array("MSIE 6", "MSIE 7", "MSIE 8", "MSIE 9", "MSIE 10", "MSIE 11");

	for (var i = 0; i < _IE.length; i++) {
		if (browser.indexOf(_IE[i]) > -1) {
			flag = true;
			break;
		}
	}

	return flag;
}

/******************************************************************* 
	FUNCTION		:	getIframeContent
	DESCRIPTION		:	iframe 요소 가져오기(iframe의 객체 접근 가능)
	PARAMETER		:	id : iframe id
	EXAMPLE         :   getIframeContent('iframeid') return iframe
*******************************************************************/
function getIframeContent(id) {
	var ifrm = document.getElementById(id);

	return ifrm.contentWindow || ifrm.contentDocument;
}

var IMG_EXT = "jpg|jpeg|gif|png";

/******************************************************************* 
	FUNCTION		:	fn_fileExtChk
	DESCRIPTION		:	파일 확장자 첨부유무 검사
	PARAMETER		:	file : 파일명, ext : 검사할 확장자
	EXAMPLE         :   fn_fileExtChk('file1.jpg', '[jpg,jpeg,gif,png]') return false
*******************************************************************/
function fn_fileExtChk(file, ext) {
	var flag	= 	false;
	
	for (var i in ext) {
		var fileExt = file.substring(file.lastIndexOf(".") + 1);
		
		if (fileExt.toUpperCase() == ext[i].toUpperCase()) {
			flag = true;
			break;
		}
	}

	return flag;
}

/******************************************************************* 
	FUNCTION		:	fn_contentSubstr
	DESCRIPTION		:	String의 길이가 길 경우 idx만큼만 앞에서부터 잘라서 보여줌
	PARAMETER		:	content : String값, idx : 앞에서부터 자를 자릿수
	EXAMPLE         :   fn_contentSubstr('abcdefghijklnm', 10) return abcdefghij...
*******************************************************************/
function fn_contentSubstr(content, idx) {
	var val = "";

	if (content.length <= idx) {
		val = content;
	} else {
		val = content.substr(0, idx) + "...";
	}

	return val;
}

function contentReplace(text) {
	//text = text.replace(/'/gi, "`");
	//text = text.replace(/'/gi', "`");
	text = text.replace(/&nbsp;/gi, "　"); 
	text = text.replace(/&lt;/gi, "\<"); 
	text = text.replace(/&gt;/gi, "\>");
	text = text.replace(unescape("%uFEFF"), "");

	return text; 
}

/******************************************************************* 
	FUNCTION		:	fn_getFormatNumber
	DESCRIPTION		:	숫자 콤마 찍기
	PARAMETER		:	price - 콤마 찍을 값, num - 콤마 찍을 자릿 수
	EXAMPLE         :   fnFormatNumber(1000, 3) => 1,000
*******************************************************************/
function fn_getFormatNumber(price, num) {
	var arrObj	=	new Array();
	price		 =	price.toString();
	for (var i = 1; i <= price.length; i++){
		if (i % parseInt(num) == 0){
			arrObj[price.length - i] = "," + price.charAt(price.length - i);
		}else{
			arrObj[price.length - i] = price.charAt(price.length - i);
		}
	}
	
	return arrObj.join('').replace(/^,/,'');
}

/******************************************************************* 
	FUNCTION		:	fn_setCookie
	DESCRIPTION		:	쿠기저장
	PARAMETER		:	name : 쿠키저장이름, value : 저장할값, expiredays : 쿠키저장기간
	EXAMPLE         :   fn_setCookie('id', '1234', 7)
*******************************************************************/
function fn_setCookie(name, value, expiredays) {
	var endDate = new Date();
	endDate.setDate(endDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + endDate.toGMTString() + ";";
}

/******************************************************************* 
	FUNCTION		:	fn_getCookie
	DESCRIPTION		:	쿠키불러오기
	PARAMETER		:	name : 불러올쿠키저장이름
	EXAMPLE         :   fn_getCookie('id') return '1234'
*******************************************************************/
function fn_getCookie(name) {
	var search = name + "=";
	//저장된 쿠키가 있는지 확인
	if (document.cookie.length > 0) {
		var offset = document.cookie.indexOf(search);
		//name으로 저장된 쿠키가 있는지 확인
		if (offset != -1) {
			offset += search.length;
			var end = document.cookie.indexOf(";", offset);
			//name으로 저장된 쿠기값 가져오기
			if (end == -1) {
				end = document.cookie.length;
				return unescape(document.cookie.substring(offset, end));
			} else {
				return unescape(document.cookie.substring(offset, end));
			}
		}
	}
}

function fn_makeSendCycle(sendCycle, sendYear, sendMon, sendDay) {
	var val = "";
	
	switch (sendCycle) {
	case 'S', 'D':
		val = sendYear + "_" + sendMon + sendDay;
		break;
	case 'W':
		val = sendYear + "_" + sendMon + "_" + sendDay;
		break;
	case 'M':
		val = sendYear + "_" + sendMon;
		break;
	case 'Q':
		val = sendYear + "_" + sendMon;
		break;
	case 'H':
		val = sendYear + "_" + sendMon;
		break;
	case 'Y':
		val = sendYear + "_Y";
		break;
	}
	
	return val;
}

function fn_makeDmTitle(sendCycle, sendYear, sendMon, sendDay, title, dmNm) {
	var mkDmNm	=	"";
	
	switch (sendCycle) {
		case 'S':
		case 'D':
			mkDmNm	=	sendYear + "/" + sendMon + "/" + sendDay;
			break;
		case 'W':
			mkDmNm	=	sendYear + "/" + sendMon + "/" + sendDay.replace("W", "주");
			break;
		case 'M':
			mkDmNm	=	sendYear + "/" + sendMon;
			break;
		case 'Q':
			mkDmNm	=	sendYear + "/" + sendMon.replace("Q", "분기");
			break;
		case 'H':
			if (sendMon == "1H") {
				mkDmNm	=	sendYear + "/" + "상반기";
			} else {
				mkDmNm	=	sendYear + "/" + "하반기";
			}
			break;
		case 'Y':
			mkDmNm	=	sendYear;
			break;
	}

	mkDmNm	+=	" " + dmNm;

	if (title != "" && title !== undefined) {
		mkDmNm	+=	"(" + title + ")";
	}
	
	return mkDmNm;
}

function fn_null2string(data, init) {
	if (data === null || data == "" || data === undefined) {
		data = init;
	}
	
	return data;
}

/******************************************************************* 
FUNCTION		:	getParameter
DESCRIPTION		:	한글파라미터 인코딩
PARAMETER		:	
*******************************************************************/
function getParameter(value) {
	
	if(value == null || value == '')
		return "";
		
	var param = "";
	var array_value = value.split("&");
	
	for(i=0; i<array_value.length; i++ ) {
	
		array_str = array_value[i].split("=");
		separator = (i > 0) ? "&" : "";
		
		if(array_str.length == 2) {
			if(array_str[1] != null && array_str[1] != "") {
				param += separator + array_str[0] + "=" + encodeURIComponent(array_str[1]);
			} else {
				param += separator + array_str[0] + "=";
			}
		}
	}
	return param;
	
}

function getBase64Encode(o) {
	
	var param = '';
	
	$('#'+o.attr('id') + ' *').filter(':input').each(function() {
		
		var id = $(this).attr('id');
		
		if ( id != undefined ) {
			
			var val = $(this).val();
			if ( $(this).data('encode') == true ) {
				
				val = id + '=' + Base64.encode(val);
				param += param == '' ? val : '&' + val;
				
			} else {
				
				val = id + '=' + encodeURIComponent(val);
				param += param == '' ? val : '&' + val;
				
			}
			
		}
		
	});
	
	return param;
	
}

function urlDecoder(val) {
	return decodeURIComponent(val).replace(/[\+]+/g, ' ');
}

function gotoMenu(url, command, menuid, pMenuid) {
	if (url.indexOf("?") > -1) {
		url += "&command="+command+"&menuid="+menuid+"&p_menuid="+pMenuid;
	} else {
		url += "?command="+command+"&menuid="+menuid+"&p_menuid="+pMenuid;
	}
	
	var hform = document.getElementById("hform");
	hform.menuid.vlue = menuid;
	hform.p_menuid.value = pMenuid;
	hform.menuUrl.value = url;
	
	location.href = url;
}

function formatSizeUnits(bytes){
	if (bytes >= 1000000000) {
		bytes=(bytes/1000000000).toFixed(2)+' GB';
	} else if (bytes >= 1000000) {
		bytes=(bytes/1000000).toFixed(2)+' MB';
	} else if (bytes >= 1000) {
		bytes=(bytes/1000).toFixed(2)+' KB';
	} else if (bytes > 1) {
		bytes=bytes+' bytes';
	} else if (bytes == 1) {
		bytes=bytes+' byte';
	} else {
		bytes='0 byte';
	}
	
    return bytes;
}

function bytesToSize(bytes) {
   if (bytes == 0) return '0 Byte';
   var k = 1024;
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   var i = Math.floor(Math.log(bytes) / Math.log(k));
   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

var DMMAXSIZE	=	100 * 1024 * 1024;

//파일첨부
function fn_fileChange(fieldName, prefix, ext) {
	var fileValue 	= 	$("input[ name='"+fieldName+"' ]").val();
	var fileSize	=	0;
	
	if ( window.FileReader ) {
		
		if ( fn_isIE() ) {
			
			var objFso		=	new ActiveXObject("Scripting.FileSystemObject");
			var sPath 		= 	$("input[ id='"+fieldName+"' ]")[0].value;
			var objFile 	= 	objFso.getFile(sPath);
			var fileSize	= 	objFile.size;
			
		} else {
			
			fileSize = ($("input[ name='"+fieldName+"' ]")[0].files[0].size);
			
		}
		
	} else {
		
		fileSize	=	DMMAXSIZE;
		
	}
	
	if ( !fn_fileExtChk(fileValue, ext) ) {
		
		alert("해당 첨부파일은 첨부 불가능합니다.");
		fn_fileDelete(fieldName, prefix);
		return false;
		
	}
	
//	if (fileSize > DMMAXSIZE) {
//		alert("해당 첨부파일의 사이즈는 " + bytesToSize(DMMAXSIZE) + " 초과합니다.");
//		fn_fileDelete(fieldName, prefix);
//		return false;
//	}
	
//	var $prev = $("input[ id='"+fieldName+"' ]").prev(),
//	$next = $("input[ id='"+fieldName+"' ]").next(),
//	$fileField = $next.find('input[type="text"]'),
//	fileName = $("input[ id='"+fieldName+"' ]").val();
//
//	$prev.show();
//	$fileField.val(fileName);
//	
//	var fileNameHtml = '<span class="file-txt" >'+fileName+'<a href="#this" id="'+prefix+'-file-del" class="btn-del" onclick="fn_fileDelete(\''+fieldName+'\', this);">삭제</a></span>' 
//	$("#"+prefix+"-file-del").parent().parent().find('div.file-dis').hide();
//	$("#"+prefix+"-file-del").parent().remove();
//	$fileField.parent().parent().append(fileNameHtml);
	
	var fileName = $("input[ id='"+fieldName+"' ]").val();
	
	var fileNameHtml = '<span class="file-txt" >'+fileName+'<a href="#this" id="'+prefix+'-file-del" class="btn-del" onclick="fn_fileDelete(\''+fieldName+'\', \''+prefix+'\');">삭제</a></span>'
	$('#file-info-'+prefix).html(fileNameHtml);
	
	//$("input[ name='"+prefix+"-file-field' ]").val(fileValue);
	//$("#"+prefix+"-file-size").text(bytesToSize(fileSize));
}

//파일삭제
function fn_fileDelete(fieldName, prefix) {
	if (fn_isIE()) {
		$("input[ name='"+fieldName+"' ]").replaceWith($("input[ name='"+fieldName+"' ]").clone(true));
	} else {
		$("input[ name='"+fieldName+"' ]").val("");
	}
	
	$('#file-info-'+prefix).html('');

//	$(_this).parent().parent().find('div.file-dis').hide();
//	$(_this).parent().remove();
	
	//$("input[ name='"+prefix+"-file-field' ]").val("");
	//$("#"+prefix+"-file-size").text("0");
}

//기존 파일삭제
function fn_oldFileDelete(fieldName) {
	
	if ( confirm('파일삭제 시 안내장 작업에 문제가 발생 할 수 있습니다. 해당 파일을 삭제하시겠습니까?') ) {
		
		$('#'+fieldName+'_old').val('');
		$('#'+fieldName+'_html').html('');
		
	}
	
}

/******************************************************************* 
FUNCTION		:	fn_chkword
DESCRIPTION		:	글자 수 체크
PARAMETER		:	o : 글자 수 체크 할 form Object, maxBytes : 글자 입력할 수 있는 최대 수
EXAMPLE         :   fn_chkword(this, 500) return 현재 입력한 글자 수
*******************************************************************/
function fn_chkword(o, maxByte) {
	
	var strVal = $('#'+o).val();
	var strLen = strVal.length;
	var bytes = 0;
	var len = 0;
	
	for ( var i = 0; i < strLen; i++ ) {
		
		var strCharAt = strVal.charAt(i);
		if ( escape(strCharAt).length > 4 ) {
			bytes += 3;
		} else {
			bytes++;
		}
		
		if ( bytes <= maxByte ) {
			len++;
		}
		
	}
	
	if ( bytes > maxByte ) {
		alert(maxByte + '자를 초과하였습니다.');
		$('#'+o).val(strVal.substr(0, len));
		bytes = maxByte;
	}
	
	return bytes;
	
}

var cmdCode = function() {
	var f = Object();
	
	f = {
		SELECT : "SELECT"
	,	SELECT_VIEW : "SELECT_VIEW"
	,	SELECT_COMBO : "SELECT_COMBO"
	,	DUPLIC : "DUPLIC"
	,	INSERT : "INSERT"
	,	MODIFY : "MODIFY"
	,	DELETE : "DELETE"
	};
	
	return f;
}();

var msgCode = function() {
	var f = Object();
	
	f = {
		FAIL : "0"
	,	SUCCESS : "1"
	,	DUPLIC : "2"
	,	SUCCESS_I : "3"
	,	SUCCESS_U : "4"
	,	SUCCESS_D : "5"
	,	DUPLIC_LOGIN : "6"
	};
	
	return f;
}();

var errorMsg = function() {
	var f = Object();
	
	f = {
		fail : "요청처리가 실패되었습니다."
	,	success : "요청처리가 성공적으로 처리 되었습니다."
	,	uploadSizeError : "첨부 할수 있는 파일의 용량이 초과됬습니다.10MB이내로 첨부하여 주시기 바랍니다."
	,	criticalMsg : "필수 입력 항목입니다."
	,	availableMsg : "사용 가능합니다."
	,	enabledMsg : "사용 불가능합니다."
	,	numMsg : "숫자만 입력 가능합니다."
	,   hanMsg : "한글만 입력 가능합니다."
	,	engMsg : "영문만 입력 가능합니다."
	,	specialCharMsg : "()_-/ 를 제외한 특수문자는 입력 불가능합니다."
	,	engNumMsg : "영문,숫자만 입력 가능합니다."
	,	engHanMsg : "영문,한글만 입력 가능합니다."
	,	maxLenMsg : "이하 입력해 주시기 바랍니다."
	,	minLenMsg : "이상 입력해 주시기 바랍니다."
	};
	
	return f;
}();

var regType = function() {
	var f = Object();
	
	f = {
		INSERT : "I"
	,	UPDATE : "U"
	,	DELETE : "D"
	};
	
	return f;
}();

var confirmMsg = {
	save : "등록하시겠습니까?"
,	modify : "수정하시겠습니까?"
,	del : "삭제하시겠습니까?"
,	stopModify : "사용유무를 중지로 변경할 경우 사용유무외 다른 항목의 변경은 반영되지 않습니다."
,	emergencySave : "안내장 작업중에 긴급반영 시 시스템오류가 발생할 수 있습니다.\n등록하시겠습니까?"
,	emergencyModify : "안내장 작업중에 긴급반영 시 시스템오류가 발생할 수 있습니다.\n수정하시겠습니까?"
};

/******************************************************************* 
	FUNCTION		:	Map
	DESCRIPTION		:	자바의 Map과 동일한 기능
	PARAMETER		:	
	EXAMPLE         :   var Map = new Map();
*******************************************************************/
Map = function() {
	this.map = new Object();
};

Map.prototype = {   
    put : function(key, value) {   
        this.map[key] = value;
    },
    get : function(key) {   
		return this.map[key];
    },
    containsKey : function(key) {   
		return key in this.map;
    },
    containsValue : function(value) {    
		for(var prop in this.map) {
			if(this.map[prop] == value) return true;
		}
		return false;
    },
    isEmpty : function(key) {    
		return (this.size() == 0);
    },
    clear : function() {   
		for(var prop in this.map) {
			delete this.map[prop];
		}
    },
    remove : function(key) {
		delete this.map[key];
    },
    keys : function() {   
        var keys = new Array();   
        for(var prop in this.map) {   
            keys.push(prop);
        }   
        return keys;
    },
    values : function() {   
		var values = new Array();   
        for(var prop in this.map) {   
			values.push(this.map[prop]);
        }   
        return values;
    },
    size : function() {
		var count = 0;
		for (var prop in this.map) {
			count++;
		}
		return count;
    }
};