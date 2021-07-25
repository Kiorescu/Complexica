package com.complexica.test.repository;

import com.complexica.test.model.WeatherDataEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WeatherRepository extends JpaRepository<WeatherDataEntity, Long> {

    @Query(value = "select * from forecast where city = :city and dt = :date", nativeQuery = true)
    List<WeatherDataEntity> findAllByCityAndDate(@Param("city") String city, @Param("date") Long date);
}
