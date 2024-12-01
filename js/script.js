$(function() {
// Задаємо цільову дату та час для відліку (у форматі "рік, місяць, день, година, хвилина, секунда")
var targetDate = new Date("2023-10-27T00:00:00").getTime();


// Оновлення лічильника кожну секунду
var x = setInterval(function() {
    // Поточна дата та час
    var currentDate = new Date().getTime();
    
    // Різниця між цільовою датою та поточною датою
    var timeLeft = targetDate - currentDate;
    
    // Обчислення днів, годин, хвилин і секунд
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Відображення лічильника на сторінці
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = days + " днів " + hours + " годин " + minutes + " хвилин " + seconds + " секунд ";
    
    // Перевірка, чи досягнута цільова дата
    if (timeLeft < 0) {
        clearInterval(x); // Якщо цільова дата досягнута, зупиняємо лічильник
        countdownElement.innerHTML = "Час вийшов!";
    }
}, 1000)});

$(function(){
    // Отримуємо елементи з DOM
const select = document.getElementById('mySelect');
const imageContainer = document.getElementById('imageContainer');

const imageContainer2 = document.getElementById('imageContainer2');
const imageContainer3 = document.getElementById('imageContainer3');
const imageContainer4 = document.getElementById('imageContainer4');
const imageContainer5 = document.getElementById('imageContainer5');

// Слухаємо подію "change" на <select>
select.addEventListener('change', function() {
  const selectedOption = select.options[select.selectedIndex];
  
  // Перевіряємо, чи обрано опцію зі значенням "3"
  if (selectedOption.value === "3") {
    // Якщо так, робимо контейнер із зображенням видимим
    imageContainer.style.display = 'block';
  } else {
    // В іншому випадку ховаємо контейнер із зображенням
    imageContainer.style.display = 'none';
  }
  if (selectedOption.value === "1") {
    // Якщо так, робимо контейнер із зображенням видимим
    imageContainer2.style.display = 'block';
  } else {
    // В іншому випадку ховаємо контейнер із зображенням
    imageContainer2.style.display = 'none';
  }
  if (selectedOption.value === "2") {
    // Якщо так, робимо контейнер із зображенням видимим
    imageContainer3.style.display = 'block';
  } else {
    // В іншому випадку ховаємо контейнер із зображенням
    imageContainer3.style.display = 'none';
  }

  if (selectedOption.value === "4") {
    // Якщо так, робимо контейнер із зображенням видимим
    imageContainer4.style.display = 'block';
  } else {
    // В іншому випадку ховаємо контейнер із зображенням
    imageContainer4.style.display = 'none';
  }

  if (selectedOption.value === "5") {
    // Якщо так, робимо контейнер із зображенням видимим
    imageContainer5.style.display = 'block';
  } else {
    // В іншому випадку ховаємо контейнер із зображенням
    imageContainer5.style.display = 'none';
  }


});

})