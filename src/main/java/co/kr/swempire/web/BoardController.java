package co.kr.swempire.web;

import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	
	@RequestMapping("insertTest")
	public String insertTest(HttpServletRequest req) {
		
		
		int board_num = Integer.parseInt(req.getParameter("board_num"));
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String user_name = req.getParameter("user_name");
		String title = req.getParameter("title");
		String board_context = req.getParameter("board_context");
		//Date cre_date = req.getParameter("cre_date");
		
		BoardVO boardVO = new BoardVO();
		boardVO.setId(id);
		boardVO.setPw(pw);
		boardVO.setUser_name(user_name);
		boardVO.setTitle(title);
		boardVO.setBoard_context(board_context);
		boardService.insertTest(boardVO);
		
		return "redirect:test";
	}
	
	
	
}