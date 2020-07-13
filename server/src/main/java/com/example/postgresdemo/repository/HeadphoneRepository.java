package com.example.postgresdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HeadphoneRepository extends JpaRepository<com.example.postgresdemo.model.Headphone, Long>{

}
