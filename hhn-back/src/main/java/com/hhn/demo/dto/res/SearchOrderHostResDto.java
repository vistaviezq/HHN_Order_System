package com.hhn.demo.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SearchOrderHostResDto {

    private int userId;
    private String roomId;
    private LocalDate orderDate;
    private int productId;
    private String name; // product
    private int orderQuantity;
    private int orderPrice;

}
