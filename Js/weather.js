// API: 다른 서버와 소통할 수 있는 방법
// getCurrentPosition(Success Callback, Error Callback)
// 성공했을때와 에러가 발생했을 때 각각 실행할 argument가 필요
// latitude(위도), longitude(경도)
// 5f6b9b9974bdb69c9f1f34cb9ab2e843 

const API_KEY = "5f6b9b9974bdb69c9f1f34cb9ab2e843";

// Success Callback
function onGeoOK(position) {
    // position > coords > latitude, longitude 값 호출 및 저장
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // &units=metric: 화씨 온도를 섭씨 온도로 변경
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:last-child");
            const city = document.querySelector("#weather span:first-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        }); 
    // fetch(): javascript called URL → promise
}
// Error Callback
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
