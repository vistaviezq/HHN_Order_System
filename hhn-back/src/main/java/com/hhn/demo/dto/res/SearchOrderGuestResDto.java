package com.hhn.demo.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SearchOrderGuestResDto {

    private int productId;
    private String name;
    private int price;
    private int orderQuantity;
}
