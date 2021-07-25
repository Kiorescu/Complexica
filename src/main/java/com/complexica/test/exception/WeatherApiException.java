package com.complexica.test.exception;

public class WeatherApiException extends Exception{

    public WeatherApiException(String errMessage){
        super(errMessage);
    }

    public WeatherApiException(String errMessage, Throwable err) {
        super(errMessage, err);
    }
}
