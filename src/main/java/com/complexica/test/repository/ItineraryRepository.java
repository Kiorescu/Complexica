package com.complexica.test.repository;

import com.complexica.test.model.ItineraryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItineraryRepository extends JpaRepository<ItineraryEntity, Long> {

}
