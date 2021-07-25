package com.complexica.test.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="forecast")
public class WeatherDataEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String city;
    private String countryCode;
    private Double temperature;
    private Integer clouds;
    private Double rain;
    private Long dt;
    @ManyToMany(mappedBy = "data")
    private Set<ItineraryEntity> itineraries;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public Integer getClouds() {
        return clouds;
    }

    public void setClouds(Integer clouds) {
        this.clouds = clouds;
    }

    public Double getRain() {
        return rain;
    }

    public void setRain(Double rain) {
        this.rain = rain;
    }

    public Long getDt() {
        return dt;
    }

    public void setDt(Long date) {
        this.dt = date;
    }

    @JsonIgnore
    public Set<ItineraryEntity> getItineraries() {
        return itineraries;
    }

    public void setItineraries(Set<ItineraryEntity> itineraries) {
        this.itineraries = itineraries;
    }
}
