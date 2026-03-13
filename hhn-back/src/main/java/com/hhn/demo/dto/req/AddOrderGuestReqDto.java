package com.hhn.demo.dto.req;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class AddOrderGuestReqDto {

    private int productId;

    @NotNull(message = "수량을 입력해주세요.")
    @Min(value = 1, message = "수량은 1 이상이어야 합니다.")
    private int orderQuantity;

    private String roomId;
}
