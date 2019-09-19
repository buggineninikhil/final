package com.pixogram.user.repo;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.pixogram.user.entity.Article;

@Transactional
@Repository
public class IUserRepo implements UserRepo{
	@PersistenceContext	
	private EntityManager entityManager;
	@SuppressWarnings("unchecked")
	@Override
	public List<Article> getUnblockedArticles() {
		String hql = "FROM Article as atcl where atcl.status!=1";
		return (List<Article>) entityManager.createQuery(hql).getResultList();
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Article> getBlockedArticles() {
		String hql = "FROM Article as atcl where atcl.status!=0";
		return (List<Article>) entityManager.createQuery(hql).getResultList();
	}
	@Override
	public void blockArticle(int status) {
		Query query = entityManager.createQuery("update Article as atcl set atcl.status =: status");
		query.setParameter("status", status);
		query.executeUpdate();
		
	}
	@Override
	public void unBlockArticle(int status) {
		Query query = entityManager.createQuery("update Article as atcl set atcl.status =: status");
		query.setParameter("status", status);
		query.executeUpdate();
		
	}

}
