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

		
		return list;
	}


	

	public int insertTest(BoardVO boardVO) {
		int count = boardDAO.insertTest(boardVO);
		System.out.println("count="+count);
		return count;
	}
	
	public Integer insertTest2(BoardVO boardvo) {
		
		return boardDAO.insertTest2(boardvo);
	}

	

	

}
