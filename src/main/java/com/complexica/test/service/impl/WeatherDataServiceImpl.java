package com.complexica.test.service.impl;

import com.complexica.test.model.WeatherDataEntity;
import com.complexica.test.repository.WeatherRepository;
import com.complexica.test.service.WeatherDataService;
import com.complexica.test.service.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class WeatherDataServiceImpl implements WeatherDataService {

    private static final String URL = "http://api.openweathermap.org/data/2.5/forecast";
    //TODO move to properties
    private static final String API_KEY = "db11def693ca5cb6d6bf9cae7d225f2f";
    private final RestTemplate restTemplate;

    @Autowired
    private WeatherRepository weatherRepository;

    WeatherDataServiceImpl(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @Override
    public List<WeatherDataEntity> findAllByCityAndDate(String city, Long date){

        LocalDateTime dateTime = ServiceUtil.milliToDateTime(date);

        List<WeatherDataEntity> cachedWeatherData = weatherRepository.findAllByCityAndDate(city, date);
        if(cachedWeatherData != null && !cachedWeatherData.isEmpty()) {
            return cachedWeatherData;
        }

        HttpHeaders header = new HttpHeaders();
        header.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(URL)
                .queryParam("q", city)
                //TODO do not hardcode
                .queryParam("units", "metric")
                .queryParam("appid", API_KEY);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(header);

        ResponseEntity<Object> response = this.restTemplate.exchange(builder.toUriString(), HttpMethod.GET, request, Object.class);
        Map<String, Object> weatherData = (Map<String, Object>) response.getBody();
        if(weatherData != null) {
            List<WeatherDataEntity> weatherDataEntities = convertToEntity(weatherData);
            weatherDataEntities = weatherDataEntities.stream().filter(e -> {
                LocalDateTime dt = ServiceUtil.secondsToDateTime(e.getDt());
                return dateTime.getDayOfYear() == dt.getDayOfYear()
                        && dateTime.getMonth().equals(dt.getMonth())
                        && dateTime.getYear() == dt.getYear()
                        && dt.getHour() >= 12
                        && dt.getHour() <= 18;

            }).collect(Collectors.toList());
            weatherRepository.saveAll(weatherDataEntities);

            return weatherDataEntities;
        }

        return  null;
//TODO error handling
//        if(response.getStatusCode() == HttpStatus.OK) {
//            try {
//            }catch (Exception e) {
//                throw new WeatherApiException("Cannot read response data", e);
//            }
//        } else {
//            throw new WeatherApiException("Response status code " + response.getStatusCode());
//        }
    }

    private List<WeatherDataEntity> convertToEntity(Map<String, Object> responseObject) {
        List<WeatherDataEntity> entities = new ArrayList<>();
        Map<String, Object> city = (Map<String, Object>)responseObject.get("city");
        List<Map<String, Object>> weatherHours = (List<Map<String, Object>>) responseObject.get("list");
        for(Map<String, Object> hour: weatherHours) {
            WeatherDataEntity entity = new WeatherDataEntity();
            entity.setCity(city.get("name").toString());
            entity.setCountryCode(city.get("country").toString());

            try {
                Map<String, Object> main = (Map<String, Object>) hour.get("main");
                entity.setTemperature(Double.parseDouble(main.get("temp").toString()));
            }catch (ClassCastException e) {
                // TODO log error
            }

            Map<String, Object> clouds = (Map<String, Object>)hour.get("clouds");
            entity.setClouds(Integer.parseInt(clouds.get("all").toString()));

            if(hour.containsKey("rain")) {
                Map<String, Object> rain = (Map<String, Object>) hour.get("rain");
                entity.setRain(Double.parseDouble(rain.get("3h").toString()));
            }

            entity.setDt(Long.parseLong(hour.get("dt").toString()));

            entities.add(entity);
        }
        return entities;
    }
}
