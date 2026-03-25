# [프로젝트 이름]
숙소 비품 및 청소 관리 시스템

## 프로젝트 개요
소규모 숙소 운영자를 위한 객실 비품 및 매출 추적 시스템입니다. 
수기 관리에 의존하던 숙소 운영 방식을 디지털로 전환하여 운영 효율성을 높이는 것을 목표로 합니다.

## 주요 기능
시스템은 크게 세 가지 흐름으로 작동하며, 객실 관리의 효율성을 극대화합니다:
1. **고객 (GUEST)**: 숙박 중 필요한 소모품을 시스템을 통해 간편하게 신청
2. **청소 담당자 (CLEANER)**: 고객이 신청한 소모품 리스트를 확인하고 소모품 보충 및 청소 완료 처리
3. **숙소 운영자 (HOST)**: 소모품 보충 완료에 따른 실시간 매출 현황 모니터링

## 페이지별 주요 기능
1. **고객 (GUEST)** *ex. `Room201Guest`*
  - 소모품 정보 조회 : 숙소에서 제공 및 관리하는 전체 소모품의 명칭과 가격을 한눈에 확인할 수 있습니다.
  - 소모품 일괄 신청 : 필요한 비품의 수량을 각각 기입한 뒤, 하단의 '수량 입력 항목 일괄 저장하기' 버튼을 통해 여러 항목을 한 번에 간편하게 요청할 수 있습니다.
  - 24시간 신청 및 일자 갱신 : 소모품 신청은 24시간 언제든 가능하며, 자정(00:00)을 기준으로 날짜가 넘어가면 시스템상 다음 날의 신청 건으로 자동 분리되어 기록됩니다.

2. **청소 담당자 (CLEANER)** *ex. `Room201Cleaner`*
  - 전일자 요청 내역 전용 조회 : 날짜를 임의로 변경할 수 없으며, 오직 '전날' 고객이 신청한 소모품 리스트만 노출되도록 하여 작업 당일의 기준을 명확히 합니다.
  - 직관적 작업 리스트 : 복잡한 정보 대신 고객이 요청한 '소모품명'과 '주문 수량'만 제공하여 청소 담당자의 업무 효율을 높입니다.
  - 작업 완료 및 실시간 화면 동기화 : 비품 보충 후 '저장' 버튼을 누르면 해당 항목이 화면에서 즉시 사라집니다. 
                                '보충 완료' 상태로 업데이트되어, 작업자는 아직 처리하지 않은 남은 작업에만 온전히 집중할 수 있습니다.

3. **숙소 운영자 (HOST)** *ex. `Room201Host`*
  - 객실 및 기간별 방문자 조회 : 원하는 조회 기간을 설정하여 해당 기간 내 특정 객실에 방문했던 모든 고객의 정보를 한눈에 파악할 수 있습니다.
  - 맞춤형 매출 필터링 : 설정한 기간 내 발생한 '전체 매출'을 보거나, '특정 방문 고객'을 선택하여 해당 고객에게서 발생한 개별 매출만 필터링하여 조회할 수 있습니다.
  - 상세 주문 내역 리스트 : 각 매출 건에 대해 '주문 일자', '소모품명', '주문 수량', '금액'이 포함된 상세 리스트가 제공되어 정확한 내역 관리가 가능합니다.
  - 보충 완료 기반 정밀 매출 집계 : 단순 신청 내역이 아닌, 청소 담당자가 '보충 완료'로 상태를 업데이트한 소모품에 한해서만 실제 매출로 반영됩니다.
  - 자동 합계 산출 : 조회된 리스트 하단에 해당 내역의 총합계 금액이 자동으로 계산되므로, 직관적으로 기간별/고객별 수익 현황을 추적할 수 있습니다.

## 기술 스택
### Backend
* **Language**: Java 17
* **Framework**: Spring Boot 3.5.10
* **Build Tool**: Maven
* **Database Access**: MyBatis (3.0.5)
* **Libraries**: Lombok, Spring Validation

### Frontend
* **Core**: React (19.2.0), Vite
* **State Management**: TanStack Query (React Query)
* **HTTP Client**: Axios
* **Routing**: React Router DOM
* **Styling & UI**: Emotion (@emotion/react)

### Database
* **RDBMS**: MySQL

## ERD 및 시스템 구조
```
[ user ] (고객/사용자)               [ order ] (주문/작업내역)              [ product ] (소모품)
+-----------------------+           +-----------------------+           +-----------------------+
| PK user_id            | 1       N | PK order_id           | N       1 | PK product_id         |
|    room_id            |-----------| FK user_id            |-----------|    name               |
|    checkin_date       |           | FK product_id         |           |    price              |
|    checkout_date      |           |    room_id            |           |    create_date        |
|    role               |           |    order_date         |           |    update_date        |
|    create_date        |           |    order_quantity     |           +-----------------------+
|    update_date        |           |    order_price        |
+-----------------------+           |    status             |
                                    |    completed_at       |
                                    |    create_date        |
                                    |    update_date        |
                                    +-----------------------+
```

## API 명세서 요약
상세한 API 명세는 [Notion 링크]에서 확인하실 수 있습니다.
https://voracious-crocus-4b1.notion.site/32c598a6cd688023a827f75578387199?source=copy_link

## 요구 사항
* Java 17
* Node.js (v18 이상 권장) 및 npm
* MySQL (8.0 이상 권장)

## 설치 및 실행
### 1. Repository 클론
git clone [https://github.com/vistaviezq/HHN_Order_System.git](https://github.com/vistaviezq/HHN_Order_System.git)
cd HHN_Order_System

### 2. 백엔드 실행 (Spring Boot)
cd hhn-back
# 빌드 및 실행 (Windows 기준)
./mvnw spring-boot:run

### 3. 프론트엔드 실행 (React)
# 새로운 터미널을 열어 프로젝트 루트로 이동 후
cd koreait-web4-react
npm install
npm run dev