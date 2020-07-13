package com.example.postgresdemo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Headphone {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	public void setId(Long id) {
		this.id = id;
	}

	private String modelNumber;
	private String weight;
	private Date dateFirstAvailable;
	private String asin;
	private String dimensions;
	private String manufacturer;
	private String batteriesType;
	
	public String getModelNumber() {
		return modelNumber;
	}

	public void setModelNumber(String modelNumber) {
		this.modelNumber = modelNumber;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public Date getDateFirstAvailable() {
		return dateFirstAvailable;
	}

	public void setDateFirstAvailable(Date dateFirstAvailable) {
		this.dateFirstAvailable = dateFirstAvailable;
	}

	public String getAsin() {
		return asin;
	}

	public void setAsin(String asin) {
		this.asin = asin;
	}

	public String getDimensions() {
		return dimensions;
	}

	public void setDimensions(String dimensions) {
		this.dimensions = dimensions;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getBatteiresType() {
		return batteriesType;
	}

	public void setBatteiresType(String batteiresType) {
		this.batteriesType = batteiresType;
	}

	public Long getId() {
		return id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((asin == null) ? 0 : asin.hashCode());
		result = prime * result + ((batteriesType == null) ? 0 : batteriesType.hashCode());
		result = prime * result + ((dateFirstAvailable == null) ? 0 : dateFirstAvailable.hashCode());
		result = prime * result + ((dimensions == null) ? 0 : dimensions.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((manufacturer == null) ? 0 : manufacturer.hashCode());
		result = prime * result + ((modelNumber == null) ? 0 : modelNumber.hashCode());
		result = prime * result + ((weight == null) ? 0 : weight.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Headphone other = (Headphone) obj;
		if (asin == null) {
			if (other.asin != null)
				return false;
		} else if (!asin.equals(other.asin))
			return false;
		if (batteriesType == null) {
			if (other.batteriesType != null)
				return false;
		} else if (!batteriesType.equals(other.batteriesType))
			return false;
		if (dateFirstAvailable == null) {
			if (other.dateFirstAvailable != null)
				return false;
		} else if (!dateFirstAvailable.equals(other.dateFirstAvailable))
			return false;
		if (dimensions == null) {
			if (other.dimensions != null)
				return false;
		} else if (!dimensions.equals(other.dimensions))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (manufacturer == null) {
			if (other.manufacturer != null)
				return false;
		} else if (!manufacturer.equals(other.manufacturer))
			return false;
		if (modelNumber == null) {
			if (other.modelNumber != null)
				return false;
		} else if (!modelNumber.equals(other.modelNumber))
			return false;
		if (weight == null) {
			if (other.weight != null)
				return false;
		} else if (!weight.equals(other.weight))
			return false;
		return true;
	}

	public Headphone() {}

	@Override
	public String toString() {
		return "Headphone [id=" + id + ", modelNumber=" + modelNumber + ", weight=" + weight + ", dateFirstAvailable="
				+ dateFirstAvailable + ", asin=" + asin + ", dimensions=" + dimensions + ", manufacturer="
				+ manufacturer + ", batteriesType=" + batteriesType + "]";
	}
	
	
}
