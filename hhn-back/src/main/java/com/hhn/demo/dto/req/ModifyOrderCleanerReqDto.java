package com.hhn.demo.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ModifyOrderCleanerReqDto {
    private int userId;
    private String roomId;
    private LocalDate orderDate;
    private int productId;
}
