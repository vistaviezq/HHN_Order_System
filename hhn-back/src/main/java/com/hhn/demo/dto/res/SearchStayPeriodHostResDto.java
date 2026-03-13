package com.hhn.demo.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SearchStayPeriodHostResDto {

    private int userId;
    private LocalDate checkinDate;
    private LocalDate checkoutDate;

}
