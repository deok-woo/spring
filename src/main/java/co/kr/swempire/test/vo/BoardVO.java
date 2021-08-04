package co.kr.swempire.test.vo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class BoardVO {
	
	int board_num;
	String id;
	String pw;
	String user_name;
	String title;
	String board_context;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	Date cre_date;
	
	public int getBoard_num() {
		return board_num;
	}
	public void setBoard_num(int board_num) {
		this.board_num = board_num;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBoard_context() {
		return board_context;
	}
	public void setBoard_context(String board_context) {
		this.board_context = board_context;
	}
	public Date getCre_date() {
		return cre_date;
	}
	public void setCre_date(Date cre_date) {
		this.cre_date = cre_date;
	}
	@Override
	public String toString() {
		return "BoardVO [board_num=" + board_num + ", id=" + id + ", pw=" + pw + ", user_name=" + user_name + ", title="
				+ title + ", board_context=" + board_context + ", cre_date=" + cre_date + "]";
	}
	
	
	

}
