document.getElementById("submitButton").addEventListener("click", function () {
  const TOKEN = "6603262764:AAEoZNNGSfXmZXOsWttnAIDrzhbWXFSF61c";
  const CHAT_ID = "-1001686824386";

  const selectedOption = document.querySelector("input[name='toigo']:checked");
  const name = document.getElementById("nameInput").value;

  if (selectedOption && name) {
    const message = `
        Келуучу: ${name}
        Выбор: ${selectedOption.value}
      `;

    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          showModal();
          document.getElementById("nameInput").value = "";
          document.querySelector("input[name='toigo']:checked").checked = false;
        } else {
          alert("Произошла ошибка при отправке сообщения в телеграм.");
        }
      })
      .catch((error) => {
        console.error("Ошибка при отправке сообщения:", error);
      });
  } else {
    alert("Пожалуйста, заполните все поля формы.");
  }
});

// audio
const audio = document.getElementById("audio");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
audio.addEventListener("play", function () {
  toggleButton.textContent = "Pause";
});

audio.addEventListener("pause", function () {
  toggleButton.textContent = "Play";
});

//модального окна
function showModal() {
  const modal = document.getElementById("successModal");
  modal.style.display = "block";
}
function closeModal() {
  const modal = document.getElementById("successModal");
  modal.style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  const modal = document.getElementById("successModal");
  if (event.target === modal) {
    closeModal();
  }
});
AOS.init();

// Установите дату
const countdownDate = new Date("2023-09-31T23:59:59").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "Время истекло!";
  }
}, 1000);

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
