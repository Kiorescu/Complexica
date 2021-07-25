package com.complexica.test.controller;

import com.complexica.test.model.WeatherDataEntity;
import com.complexica.test.service.WeatherDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/weather")
public class WeatherController {

    @Autowired
    private WeatherDataService weatherDataService;

    @GetMapping
    public ResponseEntity<List<WeatherDataEntity>> getWeatherForCity(@RequestParam("city") String cityName, @RequestParam("date") Long date) {
//TODO error handling
        //        try {
            return new ResponseEntity<>(weatherDataService.findAllByCityAndDate(cityName, date), HttpStatus.OK);
//        } catch (WeatherApiException e) {
//            return new ResponseEntity<>()
//        }
    }
}
