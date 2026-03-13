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
public class User {

    private int userId;
    private String roomId;
    private LocalDate checkinDate;
    private LocalDate checkoutDate;
    private String role;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;

}
