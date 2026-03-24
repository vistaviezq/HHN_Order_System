import { css } from "@emotion/react";

// ==========================================
// 1. 공통 믹스인 (Mixins) - 중복 코드 통합
// ==========================================
const flexCenter = css`
    display: flex;
    align-items: center;
`;

const flexSpaceBetween = css`
    ${flexCenter};
    justify-content: space-between;
`;

const baseCardHover = css`
    transition: all 0.2s ease;
    border: 1px solid #ddd;
    border-radius: 8px;

    &:hover {
        border-color: #4a90e2;
        box-shadow: 0 2px 8px rgba(74, 144, 226, 0.1);
    }
`;

const primaryButtonBase = css`
    border: none;
    background-color: #4a90e2;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #357abd;
        box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
    }
    &:active {
        transform: scale(0.98);
    }
`;

const inputBase = css`
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 15px;
    color: #333;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
        border-color: #4a90e2;
        background-color: #ffffff;
    }
`;

// ==========================================
// 2. 레이아웃 및 텍스트 스타일
// ==========================================
const layoutContainer = (maxWidth) => css`
    padding: 20px;
    max-width: ${maxWidth};
    margin: 0 auto;
`;

export const container = layoutContainer("800px");
export const hostContainer = layoutContainer("900px");

const baseTitle = css`
    font-weight: 700;
    color: #333;
`;

export const title = css`
    ${baseTitle};
    font-size: 20px;
    margin-bottom: 24px;
`;

export const hostHeader = css`
    ${baseTitle};
    font-size: 24px;
    border-bottom: 2px solid #333;
    padding-bottom: 12px;
    margin-bottom: 24px;
`;

export const cleanerHeader = css`
    ${flexSpaceBetween};
    ${baseTitle};
    font-size: 20px;
    padding-bottom: 12px;
    margin-bottom: 16px;
    border-bottom: 2px solid #eee;
`;

export const emptyMessage = css`
    color: #666;
    text-align: center;
    padding: 40px 0;
`;

// ==========================================
// 3. 리스트 및 아이템 스타일
// ==========================================
export const productList = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
`;

export const productItem = (hasQuantity) => css`
    ${flexSpaceBetween};
    ${baseCardHover};
    padding: 16px 20px;
    border-color: ${hasQuantity ? '#4a90e2' : '#ddd'};
    background-color: ${hasQuantity ? '#f0f7ff' : '#ffffff'};
`;

export const cleanerItem = css`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding: 16px 20px;
    margin-bottom: 10px;
    background-color: #ffffff;
    ${baseCardHover}; 
`;

export const productInfo = css`
    font-size: 16px;
    color: #333;
    strong {
        font-weight: 600;
        margin-right: 8px;
    }
`;

export const itemName = css`
    font-size: 16px;
    font-weight: 600;
    color: #333;
`;

export const itemQuantity = css`
    font-size: 16px;
    color: #666;
    text-align: right;
    padding-right: 24px;
`;

// ==========================================
// 4. 입력 폼 및 필터 스타일
// ==========================================
export const quantityLabel = css`
    ${flexCenter};
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #333;
`;

export const quantityInput = css`
    ${inputBase};
    width: 70px;
    height: 44px;
    background-color: #fafafa;
    padding: 0 12px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: right;

    &::placeholder {
        color: #aaa;
    }
`;

export const dateInput = css`
    ${inputBase};
    padding: 10px 14px;
`;

export const filterBox = css`
    background-color: #f8f9fa;
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
    border: 1px solid #dee2e6;
`;

export const filterRow = css`
    ${flexCenter};
    gap: 15px;
    margin-bottom: 20px;
    font-size: 15px;
    color: #333;
    span {
        font-weight: 600;
    }
`;

// ==========================================
// 5. 버튼 및 뱃지 스타일
// ==========================================
export const submitButton = css`
    ${primaryButtonBase};
    width: 100%;
    height: 52px;
    border-radius: 8px;
    font-size: 16px;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        background-color: #999;
        box-shadow: none;
        transform: none;
    }
`;

export const smallSaveButton = css`
    ${primaryButtonBase};
    height: 36px;
    border-radius: 6px;
    font-size: 14px;
`;

export const resetFilterButton = css`
    margin-left: auto;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #ddd;
    background-color: #ffffff;
    color: #666;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f5f5f5;
        color: #333;
    }
`;

export const guestListContainer = css`
    ${flexCenter};
    gap: 12px;
    flex-wrap: wrap;
    > span {
        font-size: 14px;
        font-weight: 600;
        color: #333;
    }
`;

export const guestBadge = (isActive) => css`
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.2s ease;
    cursor: pointer;
    background-color: ${isActive ? '#4a90e2' : '#ffffff'};
    color: ${isActive ? '#ffffff' : '#4a90e2'};
    border: 1px solid ${isActive ? '#4a90e2' : '#b3d4f5'};

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(74, 144, 226, 0.15);
    }
`;

// ==========================================
// 6. 테이블 스타일
// ==========================================
export const reportTable = css`
    width: 100%;
    border-collapse: collapse;
`;

const tableCellBase = css`
    padding: 16px 12px;
    font-size: 15px;
`;

export const tableTh = css`
    ${tableCellBase};
    background-color: #343a40;
    color: #ffffff;
    font-weight: 600;
`;

export const tableTd = css`
    ${tableCellBase};
    border-bottom: 1px solid #f1f3f5;
    color: #333;
`;

export const tableFooterCell = css`
    padding: 20px 12px;
    border-top: 2px solid #343a40;
    font-weight: 600;
`;