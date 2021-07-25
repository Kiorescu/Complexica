package com.complexica.test.service;

import com.complexica.test.exception.WeatherApiException;
import com.complexica.test.model.WeatherDataEntity;

import java.util.List;

public interface WeatherDataService {
    List<WeatherDataEntity> findAllByCityAndDate(String city, Long date) throws WeatherApiException;
}
