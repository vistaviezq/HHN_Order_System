/** @jsxImportSource @emotion/react */
import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from "react";
import * as s from "./styles";
import { getSearchGuestAPI, addOrderGuestAPI } from "../../apis/endpoints/order";

export default function Room201Guest() {

  const { data: searchGuestProducts, isLoading, isError } = useQuery({
      queryKey: ["getSearchGuest"],
      queryFn: getSearchGuestAPI,
      select: (data) => Array.isArray(data) ? data : [], 
    });

  const [quantities, setQuantities] = useState({});
  
  const handleQuantityChange = (productId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };
  
  const mutation = useMutation({
    mutationFn: addOrderGuestAPI,
    onSuccess: () => {
      alert("주문이 성공적으로 저장되었습니다!");
      setQuantities({});
    },
    onError: (error) => {
      console.error("저장 에러:", error);
      alert("저장에 실패했습니다. 관리자에게 문의하세요.");
    }
  });

  const handleSaveAll = () => {
    const payload = searchGuestProducts
      .map((item) => {
        const inputQty = Number(quantities[item.productId]) || 0; 

        return {
          roomId: 201,
          productId: item.productId, 
          orderQuantity: inputQty
        };
      })
      .filter((item) => item.orderQuantity > 0); 
    
    if (payload.length === 0) {
      alert("수량이 입력된 항목이 없습니다.");
      return;
    }

    mutation.mutate(payload);
  };

  if (isLoading) return <div>데이터를 불러오는 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

 return (
    <div css={s.container}>
      <h3 css={s.title}> 상품 목록 (수량을 입력하고 일괄 저장하세요)</h3>
      
      <div css={s.productList}>
        {searchGuestProducts.length > 0 ? (
          searchGuestProducts.map((item) => {
            const currentQty = quantities[item.productId];
            const hasQuantity = currentQty && Number(currentQty) > 0;

            return (
              <div key={item.productId} css={s.productItem(hasQuantity)}>
                <div css={s.productInfo}>
                  <strong>{item.name}</strong> | {item.price.toLocaleString()}원 
                </div>
                
                <label css={s.quantityLabel}>
                  주문 수량: 
                  <input 
                    name="orderQuantity"
                    type="number" 
                    min="0"
                    value={quantities[item.productId] || ""} 
                    onChange={(e) => handleQuantityChange(item.productId, e.target.value)} 
                    css={s.quantityInput}
                    placeholder="0"
                  />
                  개
                </label>
              </div>
            );
          })
        ) : (
          <p css={s.emptyMessage}>데이터가 없습니다.</p>
        )}
      </div>

      {searchGuestProducts.length > 0 && (
        <button 
          onClick={handleSaveAll}
          css={s.submitButton}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "저장 중..." : "수량 입력 항목 일괄 저장하기"}
        </button>
      )}
    </div>
  );
}