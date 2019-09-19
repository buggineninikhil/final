package com.pixogram.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pixogram.user.entity.Article;
import com.pixogram.user.entity.Length;
import com.pixogram.user.entity.User;
import com.pixogram.user.entity.UserLogin;
import com.pixogram.user.repo.IUserRepo;
import com.pixogram.user.repo.LengthDao;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private IUserRepo articleRep;
@Autowired
private LengthDao l;
	
	 @PostMapping(path = "/login")
	    public User login(@RequestBody UserLogin userlogin){
		 User u = new User();
		 System.out.println(userlogin.getUsername());
		 System.out.println(userlogin.getPassword());
	     if(userlogin.getUsername().equalsIgnoreCase("admin") && userlogin.getPassword().equalsIgnoreCase("admin")) {
	    	 System.out.println("in");
	    	u.setStatus(1);
	    	return u;
	     }
	     else {
	    	 u.setStatus(0);
	      return u;
	     }
	    }
	 
	 @PostMapping(path = "/login1")
	    public void login1(@RequestBody UserLogin userlogin){
		/*
		 * User u = new User(); System.out.println(userlogin.getUsername());
		 * System.out.println(userlogin.getPassword());
		 */
		 System.out.println("ddfhdh");
		/*
		 * System.out.println("hi"+userlogin.getUsername());
		 * System.out.println(userlogin.getPassword()); System.out.println("ddfhdh");
		 * Length p=new Length(); int k=Integer.parseInt(userlogin.getUsername()); int
		 * j=Integer.parseInt(userlogin.getPassword()); System.out.println(k);
		 * System.out.println(j); System.out.println("ddfhdh"); p.setMax(k);
		 * p.setMin(j); LengthDao l=new LengthDao(); l.createArticle(p);
		 */
		
	
	    }
	 @PostMapping(path = "/jjj")
	 public int ggg(@RequestBody UserLogin userlogin)
	 {
		 System.out.println("bbfhdh");
		 
			
			  Length p= new Length();
			  int k=Integer.parseInt(userlogin.getUsername()); 
			  int j=Integer.parseInt(userlogin.getPassword()); 
			  System.out.println(k);
			  System.out.println(j); 
			  System.out.println("ddfhdh"); 
			  p.setMin(k);
			  p.setMax(j); 
			  p.setLengthId(1);
			  System.out.println(p);
			  
			  l.createArticle(p);
			  
			 
		 return 1;
	 }
	 @GetMapping("/lengths")
		public ResponseEntity<Length> getAllLengths() {
			Length ll = l.getAllLengths();
			return new ResponseEntity<Length>(ll, HttpStatus.OK);
		}
	
}
