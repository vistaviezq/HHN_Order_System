/** @jsxImportSource @emotion/react */
import { useQuery } from '@tanstack/react-query';
import { getSearchHostAPI, getSearchStayPeriodHostAPI } from "../../apis/endpoints/order";
import { useState, useMemo } from "react";
import * as s from "./styles";

export default function Room201Host() {
  const roomId = '201';
  const today = new Date().toISOString().split('T')[0];
  
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [filterUserId, setFilterUserId] = useState(null);

  const { data: salesData = [], isLoading: isSalesLoading } = useQuery({
    queryKey: ["dailySales", roomId, startDate, endDate], 
    queryFn: () => getSearchHostAPI({ roomId, startDate, endDate }),
  });

  const { data: stayList = [] } = useQuery({
    queryKey: ["stayPeriodList", roomId, startDate, endDate],
    queryFn: () => getSearchStayPeriodHostAPI({ roomId, startDate, endDate })
  });

  const displayData = useMemo(() => {
    if (!filterUserId) return salesData;
    return salesData.filter(item => item.userId === filterUserId);
  }, [salesData, filterUserId]);

  const totalAmount = displayData.reduce((acc, item) => acc + (item.orderPrice || 0), 0);

  const handleGuestClick = (userId) => {
    setFilterUserId(prev => prev === userId ? null : userId);
  };

  return (
    <div css={s.hostContainer}>
      <h2 css={s.hostHeader}>{roomId}호 매출 리포트</h2>
      
      <div css={s.filterBox}>
        <div css={s.filterRow}>
          <span>조회 기간:</span>
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => {setStartDate(e.target.value); setFilterUserId(null);}} 
            css={s.dateInput} 
          />
          <span>~</span>
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => {setEndDate(e.target.value); setFilterUserId(null);}} 
            css={s.dateInput} 
          />
          <button onClick={() => setFilterUserId(null)} css={s.resetFilterButton}>
            필터 해제
          </button>
        </div>

        <div css={s.guestListContainer}>
          <span>방문 고객 (클릭 시 필터링):</span>
          {stayList.length > 0 ? stayList.map((stay) => {
            const isActive = filterUserId === stay.userId;
            return (
              <div 
                key={stay.userId} 
                onClick={() => handleGuestClick(stay.userId)}
                css={s.guestBadge(isActive)}
              >
                👤 고객 {stay.userId} ({stay.checkinDate} ~ {stay.checkoutDate})
              </div>
            );
          }) : <span style={{ color: '#adb5bd', fontWeight: 'normal' }}>정보 없음</span>}
        </div>
      </div>

      {/* 매출 테이블 */}
      <table css={s.reportTable}>
        <thead>
          <tr>
            <th css={s.tableTh} style={{ textAlign: 'center' }}>주문 일자</th>
            <th css={s.tableTh} style={{ textAlign: 'left' }}>상품명</th>
            <th css={s.tableTh} style={{ textAlign: 'center' }}>수량</th>
            <th css={s.tableTh} style={{ textAlign: 'right' }}>금액</th>
          </tr>
        </thead>
        <tbody>
          {isSalesLoading ? (
            <tr>
              <td colSpan="4" css={s.tableTd} style={{ textAlign: 'center', padding: '40px' }}>
                로딩 중...
              </td>
            </tr>
          ) : displayData.length > 0 ? (
            displayData.map((item, idx) => (
              <tr key={idx}>
                <td css={s.tableTd} style={{ textAlign: 'center' }}>{item.orderDate}</td>
                <td css={s.tableTd}>{item.name}</td>
                <td css={s.tableTd} style={{ textAlign: 'center' }}>{item.orderQuantity}</td>
                <td css={s.tableTd} style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  {item.orderPrice?.toLocaleString()}원
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" css={s.tableTd} style={{ textAlign: 'center', padding: '50px', color: '#adb5bd' }}>
                내역이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
        {displayData.length > 0 && (
          <tfoot style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <td colSpan="3" css={s.tableFooterCell} style={{ textAlign: 'center' }}>
                {filterUserId ? `고객 ${filterUserId} 합계 매출` : '조회 기간 전체 합계'}
              </td>
              <td css={s.tableFooterCell} style={{ textAlign: 'right', color: '#ef4444', fontSize: '18px', fontWeight: '800' }}>
                {totalAmount.toLocaleString()}원
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}