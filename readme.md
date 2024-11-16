# e-커머스 쇼핑몰 플랫폼

##### 참여자: 김현지 (개인 프로젝트)  
  
#### 프로젝트 기간: 2024.10.20 ~ 2024.11.04 (14일)  
  
#### 프로젝트 도구: Swiper, Google Fonts 및 Material Icons, Media Qury
  
#### 사용 언어: Html, Css, Javascript  
  
### 1.프로젝트 개요: 
  사용자 친화적인 온라인 쇼핑몰 웹 페이지를 구축하는 것을 목표로 페이지는 헤더, 프로모션 섹션, 상품 리스트와 푸터로 구성.
  더불어 사용자 경험을 향상시키기 위해 Google Fonts와 Material Icons를 활용하여 시각적으로 통일된 스타일을 적용 및 Swiper 슬라이드 통해 생동감 있는 프로모션 배너를 제공.   
  
### 2.프로젝트 배경  
  다양한 상품을 소개하고 판매하는 플랫폼으로, 시각적으로 심플하며 매력적인 디자인이 필수로 연매출 3조가 넘는 올리브영 상품 리스트 디자인 활용.
  이 프로젝트는 쇼핑몰의 검색, 상품 목록 기능을 직관적이고 쉽게 이용할 수 있는 방식의 배치로 구현 및 브라우저 간의 일관성을 유지하기 위해 Css 리셋을 사용.
#### 2-1.사용자 친화적인 쇼핑몰 웹 페이지 구현:  
  - Swiper.js를 이용한 프로모션 배너 슬라이드 기능으로 생동감 있는 사용자 경험 제공
  - Google Fonts와 Material Icons를 통한 일관되고 정돈된 시각 스타일 제공  

#### 2-2.PC 환경(전체 화면)에 알맞는 디자인:  
  - 브라우저를 전체 화면으로 세팅 후 상품이 화면에서 깔끔하게 보이도록 함
  - reset-css를 통해 크로스 브라우징 유지
  
### 3.프로젝트 진행 과정  
1. **Html을 통한 페이지 구조화**
  - 헤더에 로고, 회원가입 및 로그인 버튼, 검색 기능, 카테고리 메뉴를 포함한 여러 요소를 배치해 사용자가 필요한 기능을 쉽게 찾을 수 있음.

2. **Css를 이용한 스타일링**
  - Css를 통해 페이지의 레이아웃과 시각적인 디자인 정의.
  - 웹 페이지의 각 요소에 스타일을 적용하여 깔끔하고 일관된 시각적 효과 유지. 

3. Javascript를 이용한 인터랙티브 기능 구현:
  - Swiper.js를 사용해 프로모션 배너 슬라이드 기능 구현.
  - Javascript로 푸터의 "FAMILY SITE" 메뉴를 토글하여 동적인 사용자 경험 및 정돈된 시각적 경험 제공. 

4. **Swiper와 Google Fonts를 이용한 확장성 있는 기능 요소**
  - Swiper 라이브러리를 사용해 슬라이더 기능을 구현해 사용자가 최신 프로모션 정보를 쉽게 접할 수 있도록 함.
  - Google Fonts로 텍스트 스타일을 시각적으로 개선.
  
### 4.트러블슈팅 과정
  #### 4-1.브라우저 창 축소 시 "product unit row2"가 뷰포트에 고정되어 뷰포트와 함께 이동하는 현상 개선 중.  
  #### 4-2.브라우저 개발자 도구 확인 시 "footer"가 "product unit row2"과 중복되는 현상 개선 중.
  #### 4-3.부드러운 스크롤 경험 개선을 위해 반응형 뷰포트 코드로 수정 진행 중.

  #### 4-4..sub-menu 내부의 <ul> 리스트를 Flex 컨테이너를 사용해 수직 중앙으로 정렬 안됨.
  ###### 4-4-1.문제 정의
  증상:  
  <ul class="menu_list--promotion_event">가 부모 요소.sub-menu의 수직 중앙에 정렬되지 않고, 상단에 위치.   

  ###### 4-4-2.코드 확인 및 추가 발생 원인 파악 
  .menu_list--promotion_event에 display: flex 적용되어 text 수평 정렬은 적용되었지만, 부모 요소 .sub-menu의 높이에 따른 수직 정렬 설정이 누락되었을 가능성이 있음.
  .sub-menu가 Flexbox가 아니어서 전체 높이에서 중앙 정렬이 작동하지 않을 가능성이 있음.  

  ###### 4-4-3.문제의 원인 분석
  ① .sub-menu의 높이가 명시되지 않았음.   

  기본적으로 HTML 요소는 내용(content)에 맞는 크기를 가진다.  
  .sub-menu 내부에는 <ul> 리스트만 들어 있기 때문에, .sub-menu의 높이는 <ul> 콘텐츠 높이만큼만 설정된다.  
  결과적으로 .sub-menu의 높이가 justify-content: center가 작동할 만큼 충분하지 않는 것이다.  

  ② Flex 컨테이너가 공간 기준으로 작동함  

  justify-content와 align-items 속성은 **부모 요소의 가용 공간(남는 여백)**을 기준으로 자식을 정렬한다.  
  그러나 .sub-menu의 높이가 자식 콘텐츠와 동일하다면 "남는 공간"이 없어서 정렬이 제대로 작동하지 않는다.  

  ###### 4-4-4.디버깅 과정
  ① 개발자 도구(DevTools)로 요소 확인  
    
  .sub-menu의 높이가 지정되지 않음. 기본 높이가 콘텐츠의 높이로 제한되고 있어 수직 정렬이 적용되지 않음.  
  .menu_list--promotion_event의 display: flex는 가로 방향으로만 작동하고, 세로 방향 정렬은 처리되지 않음.  

  ② CSS 속성 점검  

  .sub-menu에 display: flex와 flex-direction: column을 추가하지 않아 수직 중앙 정렬 조건을 충족하지 못함.  

  ###### 4-4-5.코드 적용 및 결과 확인
  이전 상태:  
  <ul class="menu_list--promotion_event">가 상단에 고정되어 있었음.
  수정 후 상태:  
  .menu_list--promotion_event가 .sub-menu의 전체 높이 기준으로 수직 중앙에 배치됨.

  ###### 4-4-6.결론

  ① 문제 원인:  
  .sub-menu에 Flexbox 레이아웃과 세로 방향 정렬 속성(flex-direction: column, justify-content: center)이 누락됨. 부모 컨테이너에서 수직 중앙 정렬이 불가능한 상태였음.  

  ② 해결 방법:
  .sub-menu를 Flexbox로 설정하고, 세로 방향 중앙 정렬 속성을 추가.



<p align="center">
  <img width="460" height="300" src="./image/Finished1.png">
</p>  
  
<p align="center">
  <img width="460" height="300" src="./image/Finished2.png">
</p>  

<p align="center">
  <img width="460" height="300" src="./image/Finished3.png">
</p>  

  
