function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

document.getElementById("submit-btn").addEventListener("click", function() {
    const answers = {
        santa: 0,
        elf: 0,
        grinch: 0,
        snowman: 0
    };

    const quizForm = document.getElementById("quiz-form");
    const formData = new FormData(quizForm);
    formData.forEach((value) => {
        answers[value]++;
    });

    let max = 0;
    let character = "";
    for (let type in answers) {
        if (answers[type] > max) {
            max = answers[type];
            character = type;
        }
    }

    const resultDiv = document.getElementById("result");
    if (character === "santa") {
        resultDiv.textContent = "You are Santa! You look forward to the holidays all year because it means you get to spend time with loved ones."
    } else if (character === "elf") {
        resultDiv.textContent = "You are an Elf! You love the holidays and giving gifts."
    } else if (character === "grinch") {
        resultDiv.textContent = "You are the Grinch! You hate the holidays and don't understand why anyone would enjoy them."
    } else {
        resultDiv.textContent = "You are a Snowman! You like the simple side of the holidays and keeping things neat. You love the cold so it's a good excuse to go outside."
    }

});