//PROMOTION_SWIPER
new Swiper(".swiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 4500,
  },
});

//FOOTER
// 슬라이드 영역 요소 검색!
const footerToggleEl = document.querySelector('.toggle_menu--contents');
// 슬라이드 영역를 토글하는 버튼 검색!
const footerToggleBtnEl = document.querySelector('.footer_toggle_menu');
// 슬라이드 영역 숨김 여부 기본값!
let isHidefooterToggle = true;
footerToggleEl.classList.add('hide');
// 토글 버튼을 클릭하면,
footerToggleBtnEl.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidefooterToggle = !isHidefooterToggle
  // 요소를 숨겨야 하면,
  if (isHidefooterToggle) {
    footerToggleEl.classList.add('hide');
  // 요소가 보여야 하면,
  } else {
    footerToggleEl.classList.remove('hide');
  }
});

// 올 해 연도 자동계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');



// 마우스 커서 커스텀
const cursor = document.querySelector('.cursor')

const updateCursor = (e) => {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
}

window.addEventListener('mousemove', updateCursor);



//슈팅배송 마우스 호버 시 가다림 효과
// 버튼과 컨텐츠 요소를 선택
const deliverItemName = document.querySelector('.deliver__item--name');
const deliverItemContents = document.querySelector('.deliver__item--contents');

// 호버 상태 유지 시간 (밀리초)
const HOVER_DELAY = 2000;
const LEAVE_HOVER = 100;

// 타이머 변수
let hoverTimer;

// 마우스를 버튼 위에 올렸을 때
deliverItemName.addEventListener('mouseenter', () => {
  clearTimeout(hoverTimer); // 이전 타이머를 취소
  deliverItemContents.style.display = 'block'; // 콘텐츠 표시
  deliverItemContents.style.height = '8.5em'; // 높이 설정
});

// 마우스를 버튼에서 벗어났을 때
deliverItemName.addEventListener('mouseleave', () => {
  hoverTimer = setTimeout(() => {
    deliverItemContents.style.height = '0'; // 콘텐츠 숨김
    deliverItemContents.style.display = 'none';
  }, LEAVE_HOVER); // 2초 후에 숨김
});

// 마우스가 `deliver__item--contents` 위에 있을 때 숨김 방지
deliverItemContents.addEventListener('mouseenter', () => {
  clearTimeout(hoverTimer); // 타이머 취소
});

// 마우스가 `deliver__item--contents`를 벗어났을 때 다시 타이머 시작
deliverItemContents.addEventListener('mouseleave', () => {
  hoverTimer = setTimeout(() => {
    deliverItemContents.style.height = '0';
    deliverItemContents.style.display = 'none';
  }, LEAVE_HOVER);
});

// 헤더 햄버거 버튼 기능
document.addEventListener('DOMContentLoaded', () => {
  const moreBtn = document.querySelector('.o-B.o-BBurger'); // 햄버거 버튼  .material-icons.more-btn 
  const menuList = document.querySelector('.top_sub_menu ul.menu_list--user_manage'); // 메뉴 리스트

  // 초기 상태 설정: 첫 화면에서 메뉴 숨기기
  function setInitialMenuState() {
    if (window.innerWidth > 1024) {
      menuList.style.display = 'flex'; // 1024px 이상에서는 메뉴 항상 보이기
    } else {
      menuList.style.display = 'none'; // 1024px 이하에서는 숨기기
    }
  }

  // 초기 상태 실행
  setInitialMenuState();

  // 메뉴 버튼 클릭 이벤트
  moreBtn.addEventListener('click', (event) => {
    if (window.innerWidth <= 1024) { // 1024px 이하일 때만 동작
      event.stopPropagation(); // 이벤트 버블링 방지
      const isVisible = menuList.style.display === 'flex'; // 현재 메뉴가 보이는지 확인
      menuList.style.display = isVisible ? 'none' : 'flex'; // 보이거나 숨기기
    }
  });

  // ul.menu_list--user_manage 외부 클릭 시 메뉴 닫기
  document.addEventListener('click', (event) => {
    if (window.innerWidth <= 1024) { // 1024px 이하일 때만 동작
      if (!menuList.contains(event.target) && !moreBtn.contains(event.target)) {
        menuList.style.display = 'none'; // 메뉴 숨기기
      }
    }
  });

  // 화면 크기 변화 시 초기화
  window.addEventListener('resize', () => {
    setInitialMenuState(); // 화면 크기 변경 시 메뉴 상태 초기화
  });
});
