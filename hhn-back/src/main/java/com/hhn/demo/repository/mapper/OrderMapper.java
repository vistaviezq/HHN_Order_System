package com.hhn.demo.repository.mapper;

import com.hhn.demo.dto.req.ModifyOrderCleanerReqDto;
import com.hhn.demo.entity.Order;
import com.hhn.demo.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDate;
import java.util.List;

@Mapper
public interface OrderMapper {

    // 숙소 번호, 주문 일자 필터링 검색
    // where product_name like '% + {product_name} + %'
    // HOST 조회
    List<Order> searchDetailOrderHost(
            @Param("roomId") String roomId,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate
    );

    // HOST 조회 : 투숙 기간 조회
    List<User> searchStayPeriodHost(
            @Param("roomId") String roomId,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate
    );

    // CLEANER 조회
    List<Order> searchDetailOrderCleaner(
            @Param("roomId") String roomId,
            @Param("orderDate") LocalDate orderDate
    );

    // CLEANER 수정
    int updateOrderCleaner(ModifyOrderCleanerReqDto order);

    // GUEST 조회
    List<Order> searchDetailOrderGuest(
            @Param("roomId") String roomId,
            @Param("orderDate") LocalDate orderDate
    );

    // GUEST - order 추가
    int insertOrderGuest(List<Order> orders);

}
