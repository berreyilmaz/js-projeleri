const fromLang = document.querySelector("#from-lang");
const toLang = document.querySelector("#to-lang");
const btnTranslate = document.querySelector("#btnTranslate");
const fromtext = document.querySelector("#from-text");
const totext = document.querySelector("#to-text");
const exchange = document.querySelector(".exchange");
const icons = document.querySelectorAll(".icons");

for(let lang in languages) {
    let option = `<option value="${lang}">${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML("beforeend", option);
    toLang.insertAdjacentHTML("beforeend", option);
    fromLang.value = "tr-TR";
    toLang.value = "en-GB";
}

btnTranslate.addEventListener("click", () => {
    let text = fromtext.value;
    let from = fromLang.value;
    let to = toLang.value;
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`
   
    fetch(url)
        .then(res => res.json())
        .then(data => {
            totext.value=data.responseData.translatedText;
        });
});

exchange.addEventListener("click", () => {
    let text = fromtext.value;
    fromtext.value = totext.value;
    totext.value = text;

    let lang = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = lang;
})

for(let icon of icons) {
    icon.addEventListener("click", (element) => {
        if(element.target.classList.contains("fa-copy")) {
            if(element.target.id=="from"){
                navigator.clipboard.writeText(fromtext.value);
            }else {
                navigator.clipboard.writeText(totext.value);
            }
        }else {
            let utterance;
            if(element.target.id=="from"){
                utterance = new SpeechSynthesisUtterance(fromtext.value);
                utterance.lang = fromLang.value;
            }else {
                utterance = new SpeechSynthesisUtterance(totext.value);
                utterance.lang = toLang.value;
            }
            utterance = speechSynthesis.speak(utterance);
        }
    })
}

