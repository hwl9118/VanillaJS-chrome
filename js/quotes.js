const quotes = [
    {
        quote: "Dios abrira camino donde no lo hay.",
        translate: "신은 길이 없는 곳에 길을 만드신다.",
    },
    {
        quote: "Todo lo que sassbemos del amor es que el amor es todo lo que hay.",
        translate: "우리가 사랑에 대해 아는 모든 것은 사랑은 전부라는 것",
    },
    {
        quote: "Sin prisa pero sin pausa.",
        translate: "서두르지 말되 멈추지 마라.",
    },
    {
        quote: "El que no arriesga, no gana.",
        translate: "위험을 무릅쓰지 않으면 이길 수 없다.",
    },
    {
        quote: "Siempre sale el sol.",
        translate: "항상 해는 뜬다.",
    },
    {
        quote: "Esto Quod Es.",
        translate: "가장 자신다운 사람이 되어라.",
    },
    {
        quote: "No os agobiéis por el mañana, porque el mañana traerá su propio agobio.",
        translate: "내일 일로 고민하지 말라, 왜냐하면 내일은 그 나름대로의 고민을 또 가져올테니.",
    },
    {
        quote: "Por probar, nada se pierde.",
        translate: "시도해 본다고 잃은 건 없다.",
    },
    {
        quote: "Todo está en tus manos.",
        translate: "시간이 약이다.",
    },
    {
        quote: "Sí lo puedes soñar, lo puedes hacer.",
        translate: "당신은 꿈을 꿀 수 있어요, 당신은 할 수 있어요.",
    },
    {
        quote: "El momento para ser feliz es ahora",
        translate: "행복하기 위한 순간은 지금이다.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const translate = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
translate.innerText = todaysQuote.translate;