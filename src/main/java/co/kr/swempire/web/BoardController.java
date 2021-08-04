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
		
	
		return "test";
	}
	
	
	@RequestMapping("/CRUD/insert")
	public String insertTest(HttpServletRequest req) {
		
		System.out.println("여기에 구워먹든 삶아먹든하셈");
		
		return "/CRUD/insert";
	}
	

	
	
	
}