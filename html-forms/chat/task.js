const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.querySelector(".chat-widget__input");
let currentDate = new Date();

const botMessages = [
    "Кто тут?",
    "Мы ничего не будем вам продавать",
    "Где ваша совесть?",
    "Вы не купили ни одного товара, чтобы так с нами разговаривать!",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше!",
  	"Я уже отвечал на этот вопрос!",
	"Добрый день! До свидания!",
	"Учись правильно задавать вопросы!",
	];

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    input.focus();
})

input.addEventListener('keypress', ({key}) => {
    //User Ask
    if (key === "Enter" && input.value) {
        let localTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${localTime}</div>
                <div class="message__text">
                ${input.value}
                </div>
            </div>
        `;
        //Bot answer
        let randomMessage = botMessages[Math.floor(Math.random()*botMessages.length)];
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${localTime}</div>
                <div class="message__text">
                ${randomMessage}
                </div>
            </div>
        `;
        input.value = '';
        messages.parentElement.scrollTo(0, messages.scrollHeight);
    }
})