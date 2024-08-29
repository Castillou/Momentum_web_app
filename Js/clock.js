const clock = document.querySelector('#clock');

// getClock 함수
/* 
    1. new Date() 내장 함수를 사용하여 현재 날짜에 대한 정보를 불러옴
    2. get 명령어를 통해 date에서 시 분 초 가져오기
    3. 가져온 숫자(Number)를 문자(String)로 변환
    4. padStart(maxlength, fillString): 문자열의 길이가 maxlength보다 작을 경우 fillString에 기입한 문자열로 maxlength까지 채워줌

    5. setInterval(function, ms): 지정한 ms마다 함수를 반복 실행
*/
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
