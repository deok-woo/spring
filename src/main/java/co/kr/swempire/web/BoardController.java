package co.kr.swempire.web;

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
		
		System.out.println("+++++"+toString());
		
		
	
		return "test";
	}
	
	
	@RequestMapping("insertBoard")
	public String insertBoard(HttpServletRequest req) {
		
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String user_name = req.getParameter("user_name");
		String title = req.getParameter("title");
		String board_context = req.getParameter("board_context");
		
		BoardVO boardVO = new BoardVO();
		boardVO.setId(id);
		boardVO.setPw(pw);
		boardVO.setUser_name(user_name);
		boardVO.setTitle(title);
		boardVO.setBoard_context(board_context);
		boardService.insertBoard(boardVO);
		
		return "redirect:test";
	}
	
	
	
}