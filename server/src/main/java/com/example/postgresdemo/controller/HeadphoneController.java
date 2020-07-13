package com.example.postgresdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgresdemo.exception.ResourceNotFoundException;
import com.example.postgresdemo.model.Headphone;
import com.example.postgresdemo.repository.HeadphoneRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HeadphoneController {
	
	@Autowired
	private HeadphoneRepository repository;


	  @GetMapping("/headphones")
	  List<Headphone> all() {
	    return repository.findAll();
	  }

	  @PostMapping("/headphones")
	  Headphone newEmployee(@RequestBody Headphone newHeadphone) {
	    return repository.save(newHeadphone);
	  }
	  
	  @GetMapping("/headphones/{id}")
	  Headphone one(@PathVariable Long id) {

	    return repository.findById(id)
	      .orElseThrow(() -> new ResourceNotFoundException(id.toString()));
	  }

	  @PutMapping("/headphones/{id}")
	  Headphone replaceEmployee(@RequestBody Headphone newHeadphone, @PathVariable Long id) {
		  System.out.println("newHeadphone "+newHeadphone);
	    return repository.findById(id)
	      .map(headphone -> {
	    	  headphone.setAsin(newHeadphone.getAsin());
	    	  headphone.setBatteiresType(newHeadphone.getBatteiresType());
	    	  headphone.setDateFirstAvailable(newHeadphone.getDateFirstAvailable());
	    	  headphone.setDimensions(newHeadphone.getDimensions());
	    	  headphone.setManufacturer(newHeadphone.getManufacturer());
	    	  headphone.setWeight(newHeadphone.getWeight());
	    	  headphone.setModelNumber(newHeadphone.getModelNumber());
	        return repository.save(headphone);
	      })
	      .orElseGet(() -> {
	    	  newHeadphone.setId(id);
	        return repository.save(newHeadphone);
	      });
	  }

	  @DeleteMapping("/headphones/{id}")
	  void deleteHeadphone(@PathVariable Long id) {
	    repository.deleteById(id);
	  }
	  
}
