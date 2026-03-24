/** @jsxImportSource @emotion/react */
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as s from "./styles";
import { getSearchCleanerAPI, updateOrderCleanerAPI } from "../../apis/endpoints/order";

export default function Room201Cleaner() {

  const queryClient = useQueryClient();

  // 1. 어제 날짜 계산
  const getYesterday = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date.toISOString().split('T')[0];
  };

  const params = {
    roomId: 201,
    orderDate: getYesterday()
  };

  const { data: searchCleanerProducts, isLoading, isError } = useQuery({
    queryKey: ["getSearchCleaner", params], 
    queryFn: () => getSearchCleanerAPI(params), 
    select: (data) => (Array.isArray(data) ? data : []),
  });

  const mutation = useMutation({
    mutationFn: updateOrderCleanerAPI,
    onSuccess: () => {
      alert("처리되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["getSearchCleaner"] });
    },
    onError: (error) => {
      console.error("저장 에러:", error);
      alert("저장에 실패했습니다.");
    }
  });

  const handleSave = (item) => {
    const payload = {
      userId: item.userId,
      roomId: item.roomId,
      orderDate: item.orderDate,
      productId: item.productId
    };
    
    mutation.mutate(payload);
  };

  if (isLoading) return <div>데이터를 불러오는 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <div css={s.container}>
      <div css={s.cleanerHeader}>
        <span>201호 (청소 완료 체크)</span>
      </div>

      <div css={s.productList}>
        {searchCleanerProducts.length > 0 ? (
          searchCleanerProducts.map((item) => (
            <div key={item.productId} css={s.cleanerItem}>
              <div css={s.itemName}>{item.productName || item.name}</div>
              <div css={s.itemQuantity}>{item.orderQuantity}개</div>
              <button 
                onClick={() => handleSave(item)}
                css={s.smallSaveButton}
              >
                저장
              </button>
            </div>
          ))
        ) : (
          <div css={s.emptyMessage}>주문 내역이 없습니다.</div>
        )}
      </div>
    </div>
  );
}