package com.hhn.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Order {

    private int orderId;
    private int userId;
    private String roomId;
    private LocalDate orderDate;
    private int productId;
    private String name; // product
    private int price; // product
    private int orderQuantity;
    private int orderPrice;
    private String status;
    private LocalDateTime completedAt;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;

}
