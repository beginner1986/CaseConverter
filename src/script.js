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

    textArea.value = sentences.join(". ");
});

let saveTextFileBtn = document.getElementById("save-text-file");
saveTextFileBtn.addEventListener("click", function () {
    download("text.txt", textArea.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}