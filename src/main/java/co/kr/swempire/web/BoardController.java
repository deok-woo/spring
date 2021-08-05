package co.kr.swempire.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	


	
	@RequestMapping(value = "/CRUD/insert" )
	public String insertTest(HttpServletRequest request, BoardVO vo) {
		//BoardVO vo = new BoardVO();
		
		vo.setId(request.getParameter("id"));
		vo.setPw(request.getParameter("pw"));
		vo.setTitle(request.getParameter("title"));
		vo.setUser_name(request.getParameter("user_name"));
		vo.setBoard_context(request.getParameter("board_context"));
		//boardService.insertData(vo);
		
		System.out.println("Insert == " + toString());
		
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
	
	@RequestMapping( value = "/CRUD/update" , method = { RequestMethod.POST, RequestMethod.GET })
	public String update(HttpServletRequest req, HttpSession session, Model model) {
		
		session = req.getSession();
		int seq = Integer.parseInt(req.getParameter("board_num"));
		BoardVO vo = new BoardVO();
		vo.setBoard_num(seq);
		Map<String, Object> Blist = boardService.selectboard(vo);
		model.addAttribute("board_num", Blist);
		
		System.out.println(Blist);
		
		return "/CRUD/update";
	}
	

	
	
	
}