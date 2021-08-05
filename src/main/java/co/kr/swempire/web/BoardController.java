package co.kr.swempire.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import co.kr.swempire.test.service.BoardService;
import co.kr.swempire.test.vo.BoardVO;

@Controller
public class BoardController {
	
	@Autowired
	BoardService boardService;
	
	@RequestMapping("test")
	public String test(HttpServletRequest req) {
		
		BoardVO boardvo = new BoardVO();
		
		
		List<BoardVO> list = boardService.selectTest();
	
		boardvo.getBoard_context();
		
		req.setAttribute("testList", list);
		
		System.out.println("이 부분에 select 해온것들을 출력하시오"); // 콘솔에 출력할것
		
	
		return "test";
	}
	
	
	@RequestMapping(value = "/CRUD/insert" )
	public String insertTest(HttpServletRequest request, BoardDAO dao) {
		
		
		dao.setId(request.getParameter("id"));
		dao.setPw(request.getParameter("pw"));
		dao.setTitle(request.getParameter("title"));
		dao.setUser_name(request.getParameter("user_name"));
		dao.setBoard_context(request.getParameter("board_context"));
		
		System.out.println("Insert == ");
		
		return "/CRUD/insert";
	}
	
	@ResponseBody
	@RequestMapping(value = "/CRUD/Ajax.do")
	public Map<Object, Object> insertDataAjax(HttpServletRequest request){
		HashMap<Object,Object> rmap = new HashMap<Object,Object>();
		BoardVO vo = new BoardVO();
		Boolean result = false;
		
		vo.setId(request.getParameter("id"));
		vo.setPw(request.getParameter("pw"));
		vo.setTitle(request.getParameter("title"));
		vo.setUser_name(request.getParameter("user_name"));
		vo.setBoard_context(request.getParameter("board_context"));
		
		System.out.println("Insert == "+ vo.toString());
		
		int count = boardService.insertData(vo);
		
		if (count > 0) {
			result = true;
		}
		
		rmap.put("result",result);
		rmap.put("msg","ok");
		
		System.out.println("ajax ok");
		
		return rmap;
		
	}
	

	
	
	
}