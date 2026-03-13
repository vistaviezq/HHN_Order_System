package com.hhn.demo.controller;

import com.hhn.demo.dto.req.AddOrderGuestReqDto;
import com.hhn.demo.dto.req.ModifyOrderCleanerReqDto;
import com.hhn.demo.dto.req.SearchOrderReqDto;
import com.hhn.demo.dto.req.SearchStayPeriodHostReqDto;
import com.hhn.demo.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // HOST 조회
    @GetMapping("/searchHost")
    public ResponseEntity<?> searchOrderHost(
            @ModelAttribute SearchOrderReqDto dto
    ) {
        return ResponseEntity.ok(
                orderService.searchDetailOrderHost(dto)
        );
    }

    // HOST 조회 : 투숙 기간 조회
    @GetMapping("/searchStayPeriodHost")
    public ResponseEntity<?> searchStayPeriodHost(
            @ModelAttribute SearchStayPeriodHostReqDto dto
    ) {
        return ResponseEntity.ok(
                orderService.searchStayPeriodHost(dto)
        );
    }

    // CLEANER 조회
    @GetMapping("/searchCleaner")
    public ResponseEntity<?> searchOrderCleaner(
            @ModelAttribute SearchOrderReqDto dto
    ) {
        return ResponseEntity.ok(
                orderService.searchDetailOrderCleaner(dto)
        );
    }

    // CLEANER 수정
    @PutMapping("/updateCleaner")
    public ResponseEntity<?> modifyOrderCleaner(
            @Valid @RequestBody ModifyOrderCleanerReqDto dto
    ) {
        orderService.modifyOrderCleaner(dto);
        return ResponseEntity.ok("수정완료");
    }

    // GUEST 조회
    @GetMapping("/searchGuest")
    public ResponseEntity<?> searchOrderGuest(
            @ModelAttribute SearchOrderReqDto dto
    ) {
        return ResponseEntity.ok(
                orderService.searchDetailOrderGuest(dto)
        );
    }

    // GUEST - order 추가
    @PostMapping("/guest/add")
    public ResponseEntity<?> addOrderGuest(
            @Valid @RequestBody List<AddOrderGuestReqDto> dtoList) {
        orderService.addOrderGuest(dtoList);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body("등록 성공 : " + dtoList.size() + "건");
    }

}
