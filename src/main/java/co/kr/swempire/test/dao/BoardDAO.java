package co.kr.swempire.test.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import co.kr.swempire.test.vo.BoardVO;


@Repository	
public interface BoardDAO {

	List<BoardVO> selectTest();

	int insertBoard(BoardVO boardVO);

	
	

}
