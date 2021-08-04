package co.kr.swempire.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.swempire.test.dao.BoardDAO;
import co.kr.swempire.test.vo.BoardVO;

@Service
public class BoardService {
	
	@Autowired
	BoardDAO boardDAO;
	
	public List<BoardVO> selectTest(){
		
		System.out.println("selectTest");
		List<BoardVO> list=boardDAO.selectTest();
		System.out.println("list.size()="+list.size());
		System.out.println("+++++"+toString());
		
		return list;
	}


	public int insertBoard(BoardVO boardVO) {
		int count = boardDAO.insertBoard(boardVO);
		System.out.println("count="+count);
		return count;
	}

	

	

}
