package com.hhn.demo.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SearchStayPeriodHostReqDto {
    private String roomId;
    private LocalDate startDate;
    private LocalDate endDate;
}
