package com.pixogram.user.repo;

import java.util.List;

import com.pixogram.user.entity.Article;

public interface UserRepo{
	List<Article> getUnblockedArticles();	
	List<Article> getBlockedArticles();	
	void blockArticle(int status);
	void unBlockArticle(int status);
}
