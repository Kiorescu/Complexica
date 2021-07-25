package com.complexica.test.service.util;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.TimeZone;

public class ServiceUtil {

    public static LocalDateTime milliToDateTime(Long milli) {
        return LocalDateTime.ofInstant(Instant.ofEpochMilli(milli),
                TimeZone.getDefault().toZoneId());
    }

    public static LocalDateTime secondsToDateTime(Long seconds) {
        return LocalDateTime.ofInstant(Instant.ofEpochSecond(seconds),
                TimeZone.getDefault().toZoneId());
    }
}
