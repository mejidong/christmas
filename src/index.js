const dDay = document.querySelector("h2#dDay");

function getDDay() {
  //D-Day 날짜 지정
  const setDate = new Date("2023-03-02T00:00:00+0900");
  //D-Day 날짜의 연, 월, 일 구하기
  const setDateYear = setDate.getFullYear();
  //getMonth 메서드는 0부터 세기 때문에 +1 해준다.
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDay = setDate.getDate();

  //현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
  const now = new Date();

  //D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다.
  const distance = setDate.getTime() - now.getTime();

  /*
  //Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
  //밀리초 값이기 때문에 1000을 곱한다.
  //1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
  //나머지 연산자(%)를 이용해서 시/분/초를 구한다.
  const day = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60))/(1000*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);

  //D-Day 날짜를 가져오고,
  //삼항 연산자를 사용해서 값이 10보다 적을 경우에 대해 조건부
  title.innerText = 
    `${setDateYear}년 ${setDateMonth}월 ${setDateDay}일까지 
      ${day}일 
      ${hours < 10 ? `0${hours}` : hours}시간 
      ${minutes < 10 ? `0${minutes}` : minutes}분 
      ${seconds < 10 ? `0${seconds}` : seconds}초 남았습니다.`;
  }
*/
  const day = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  dDay.innerText = `${setDateYear}년 ${setDateMonth}월 ${setDateDay}일까지 
  ${day}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;
}

const init = () => {
  // init 함수 생성해서 getDDay함수 호출하고,
  getDDay();
  // setInterval 메서드에서 getDDay함수를 1초(1000밀리초)마다 호출한다.
  setInterval(getDDay, 1000);
};

init();

/*
Date 생성자 [new Date()] : 시간을 나타내는 Date 객체를 생성하는 생성자입니다. Date 객체를 사용하기 위해 먼저 선언해 주어야 합니다. 참고 자료
Date().getFullYear() : 2021처럼 4자리의 연도를 얻을 수 있는 함수입니다. 참고 자료
Math.floor : 주어진 수와 같거나 작은 수 중에서 가장 큰 정수를 반환하는 함수입니다. 참고 자료
setInterval : 인수로 전달받은 함수를 지정해 둔 일정한 간격으로 실행할 수 있게 해주는 함수입니다
*/

https://velog.io/@dev-hannahk/js-d-day