package com.complexica.test.controller;

import com.complexica.test.model.ItineraryEntity;
import com.complexica.test.service.ItineraryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/itinerary")
public class ItineraryController {

    private final ItineraryService itineraryService;

    public ItineraryController(ItineraryService itineraryService) {
        this.itineraryService = itineraryService;
    }

    @PostMapping
    public ResponseEntity<ItineraryEntity> saveItinerary(@RequestBody ItineraryEntity itinerary) {
        return new ResponseEntity<>(itineraryService.save(itinerary), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<ItineraryEntity>> getAll() {
        return new ResponseEntity<>(itineraryService.getAll(), HttpStatus.OK);
    }
}
