package com.hhn.demo.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SearchOrderReqDto {
    private String roomId;
    private LocalDate orderDate;
    private LocalDate startDate;
    private LocalDate endDate;
}
