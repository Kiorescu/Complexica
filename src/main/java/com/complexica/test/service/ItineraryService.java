package com.complexica.test.service;

import com.complexica.test.model.ItineraryEntity;

import java.util.List;

public interface ItineraryService {

    ItineraryEntity save(ItineraryEntity itinerary);

    List<ItineraryEntity> getAll();
}
