package com.hhn.demo.service;

import com.hhn.demo.dto.req.AddOrderGuestReqDto;
import com.hhn.demo.dto.req.ModifyOrderCleanerReqDto;
import com.hhn.demo.dto.req.SearchOrderReqDto;
import com.hhn.demo.dto.req.SearchStayPeriodHostReqDto;
import com.hhn.demo.dto.res.SearchOrderCleanerResDto;
import com.hhn.demo.dto.res.SearchOrderGuestResDto;
import com.hhn.demo.dto.res.SearchOrderHostResDto;
import com.hhn.demo.dto.res.SearchStayPeriodHostResDto;
import com.hhn.demo.entity.Order;
import com.hhn.demo.entity.User;
import com.hhn.demo.exception.OrderGuestInsertException;
import com.hhn.demo.exception.OrderNotFoundException;
import com.hhn.demo.repository.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    private OrderMapper orderRepository;

    @Autowired
    public OrderService(OrderMapper orderRepository) {
        this.orderRepository = orderRepository;
    }

    // HOST 조회
    public List<SearchOrderHostResDto> searchDetailOrderHost(
            SearchOrderReqDto dto
    ) {
        List<Order> orders = orderRepository.searchDetailOrderHost(
                dto.getRoomId(),
                dto.getStartDate(),
                dto.getEndDate()
        );

        if(orders == null || orders.isEmpty()) {
            return new ArrayList<>();
        }

        List<SearchOrderHostResDto> dtos = new ArrayList<>();
        dtos = orders.stream()
                .map(p -> new SearchOrderHostResDto(
                        p.getUserId(),
                        p.getRoomId(),
                        p.getOrderDate(),
                        p.getProductId(),
                        p.getName(),
                        p.getOrderQuantity(),
                        p.getOrderPrice()
                ))
                .collect(Collectors.toList());
        return dtos;
    }

    // HOST 조회 : 투숙 기간 조회
    public List<SearchStayPeriodHostResDto> searchStayPeriodHost(
            SearchStayPeriodHostReqDto dto
    ) {
        List<User> user = orderRepository.searchStayPeriodHost(
                dto.getRoomId(),
                dto.getStartDate(),
                dto.getEndDate()
        );

        if(user == null || user.isEmpty()) {
            return new ArrayList<>();
        }

        List<SearchStayPeriodHostResDto> dtos = new ArrayList<>();
        dtos = user.stream()
                .map(p -> new SearchStayPeriodHostResDto(
                        p.getUserId(),
                        p.getCheckinDate(),
                        p.getCheckoutDate()
                ))
                .collect(Collectors.toList());
        return dtos;
    }

    // CLEANER 조회
    public List<SearchOrderCleanerResDto> searchDetailOrderCleaner(
            SearchOrderReqDto dto
    ) {
        List<Order> orders = orderRepository.searchDetailOrderCleaner(
                dto.getRoomId(),
                dto.getOrderDate()
        );

        if(orders == null || orders.isEmpty()) {
            return new ArrayList<>();
        }

        List<SearchOrderCleanerResDto> dtos = new ArrayList<>();
        dtos = orders.stream()
                .map(p -> new SearchOrderCleanerResDto(
                        p.getProductId(),
                        p.getName(),
                        p.getOrderId(),
                        p.getUserId(),
                        p.getRoomId(),
                        p.getOrderDate(),
                        p.getOrderQuantity(),
                        p.getStatus()
                ))
                .collect(Collectors.toList());
        return dtos;
    }

    // CLEANER 수정
    public void modifyOrderCleaner(ModifyOrderCleanerReqDto dto) {
        int successCount = orderRepository
                .updateOrderCleaner(dto);
        if(successCount <= 0) {
            throw new OrderNotFoundException("해당 주문은 존재하지 않습니다.");
        }
    }

    // GUEST 조회
    public List<SearchOrderGuestResDto> searchDetailOrderGuest(
            SearchOrderReqDto dto
    ) {
        List<Order> orders = orderRepository.searchDetailOrderGuest(
                dto.getRoomId(),
                dto.getOrderDate()
        );

        if(orders == null || orders.isEmpty()) {
            return new ArrayList<>();
        }

        List<SearchOrderGuestResDto> dtos = new ArrayList<>();
        dtos = orders.stream()
                .map(p -> new SearchOrderGuestResDto(
                        p.getProductId(),
                        p.getName(),
                        p.getPrice(),
                        p.getOrderQuantity()
                ))
                .collect(Collectors.toList());
        return dtos;
    }

    // GUEST - order 추가
    public void addOrderGuest(List<AddOrderGuestReqDto> dtoList) {

        List<Order> entityList = new ArrayList<>();

        for(AddOrderGuestReqDto dto : dtoList) {
            Order order = Order.builder()
                    .productId(dto.getProductId())
                    .orderQuantity(dto.getOrderQuantity())
                    .roomId(dto.getRoomId())
                    .build();

            entityList.add(order);
        }
        int successCount = orderRepository.insertOrderGuest(entityList);

        if(successCount != entityList.size()) {
            throw new OrderGuestInsertException("등록 중 문제가 발생했습니다.");
        }
    }
}
