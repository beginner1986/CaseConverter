let textArea = document.querySelector("textarea");

let upperCaseBtn = document.getElementById("upper-case");
upperCaseBtn.addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase();
});

let lowerCaseBtn = document.getElementById("lower-case");
lowerCaseBtn.addEventListener("click" , function () {
    textArea.value = textArea.value.toLowerCase();
});

let properCaseBtn = document.getElementById("proper-case");
properCaseBtn.addEventListener("click", function () {
    let words = textArea.value.split(" ");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase()
            + words[i].substring(1).toLowerCase();
    };

    textArea.value = words.join(" ");
});

let sentenceCaseBtn = document.getElementById("sentence-case");
sentenceCaseBtn.addEventListener("click", function () {
    let sentences = textArea.value.split(". ");
    for(let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].charAt(0).toUpperCase() +
            sentences[i].substring(1).toLowerCase();
    }
    console.log(sentences);

    textArea.value = sentences.join(". ");
});