package com.complexica.test.service.impl;

import com.complexica.test.model.ItineraryEntity;
import com.complexica.test.repository.ItineraryRepository;
import com.complexica.test.service.ItineraryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItineraryServiceImpl implements ItineraryService {

    private final ItineraryRepository repository;

    public ItineraryServiceImpl(ItineraryRepository repository) {
        this.repository = repository;
    }

    @Override
    public ItineraryEntity save(ItineraryEntity itinerary) {
        return repository.save(itinerary);
    }

    @Override
    public List<ItineraryEntity> getAll() {
        return repository.findAll();
    }
}
