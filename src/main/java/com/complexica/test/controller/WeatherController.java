package com.complexica.test.controller;

import com.complexica.test.exception.WeatherApiException;
import com.complexica.test.service.WeatherDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/weather")
public class WeatherController {

    @Autowired
    private WeatherDataService weatherDataService;

    @GetMapping
    public ResponseEntity<Object> getWeatherForCity(@RequestParam("city") String cityName, @RequestParam("date") Long date) {
        try {
            return new ResponseEntity<>(weatherDataService.findAllByCityAndDate(cityName, date), HttpStatus.OK);
        } catch (WeatherApiException e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
}
