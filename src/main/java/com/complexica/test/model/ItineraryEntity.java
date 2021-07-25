package com.complexica.test.model;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="itinerary")
public class ItineraryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    @ManyToMany
    private Set<WeatherDataEntity> data;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<WeatherDataEntity> getData() {
        return data;
    }

    public void setData(Set<WeatherDataEntity> data) {
        this.data = data;
    }
}
