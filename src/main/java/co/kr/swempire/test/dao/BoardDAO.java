package co.kr.swempire.test.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import co.kr.swempire.test.vo.BoardVO;


@Repository	
public interface BoardDAO {

	List<BoardVO> selectTest();
	
	
	int insertTest(BoardVO boardVO);
	
	public Integer insertTest2(BoardVO boardVO);
	
	public Integer insertData(BoardVO vo);

	public Map<String, Object> selectboard(BoardVO vo);
	

}
