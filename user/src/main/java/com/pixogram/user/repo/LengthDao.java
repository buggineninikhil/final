package com.pixogram.user.repo;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.pixogram.user.entity.Length;




@Repository
public class LengthDao{
	@PersistenceContext	
	private EntityManager entityManager;	

	@Transactional
	public void createArticle(Length len) {
		System.out.println("In dao");
		System.out.println(len.getMax());
		entityManager.merge(len);
		System.out.println("coming out");
	}
	@Transactional
	public Length getAllLengths() {
		String hql = "FROM Length as atcl ORDER BY atcl.lengthId DESC";
		return (Length) entityManager.createQuery(hql).getSingleResult();
	}	
	
}
