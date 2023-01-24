const classes = ["TestedWord_word_placeholder__2xuzY", "BlurredWord__word--blurred"];
const checkButtonClass = "PrimaryButtonTypes_check__cNVnz";

function autofillAnswer() {
    classes.forEach(cls => {
        const elems = document.getElementsByClassName(cls);
        for (let i = 0; ; i++) {
            const elem = elems.item(i);
            if (!elem) { break; }

            const answer = elem.firstChild.textContent;
            const answerBox = elem.nextSibling.firstChild;
            answerBox.click();
            answerBox.value = answer;
        }
    })
}

