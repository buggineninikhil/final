package com.pixogram.user.entity;


import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="length")
public class Length{
	@Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="lengthId")
    private int lengthId;
	@Column(name = "min")
	private int min;
	public Length(int lengthId, int min, int max) {
		super();
		this.lengthId = lengthId;
		this.min = min;
		this.max = max;
	}
	@Column(name = "max")
	private int max;
	public int getLengthId() {
		return lengthId;
	}
	public void setLengthId(int lengthId) {
		this.lengthId = lengthId;
	}
	public Length() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getMin() {
		return min;
	}
	public void setMin(int min) {
		this.min = min;
	}
	public int getMax() {
		return max;
	}
	public void setMax(int max) {
		this.max = max;
	}
	@Override
	public String toString() {
		return "Length [lengthId=" + lengthId + ", min=" + min + ", max=" + max + "]";
	}

	
	

}
