const story = {
    start: {
        text: "Nasruddin had gone into the forest to chop wood. At day’s end, he bundled up the wood but, instead of putting the bundle on the donkey, he put the bundle on his own head. He then clambered up on the donkey and rode into town. What do you do?",
        choices: ["Ask Nasruddin why he is carrying the bundle on his head", "Leave Nasruddin alone and continue on your way"],
        consequence: ["askWhy", "leaveAlone"],
        image: "images/start.jpeg"
    },
    askWhy: {
        text: "“Nasruddin!” shouted one of his friends. “Why are you carrying that bundle of wood there on your head? Doesn’t it hurt?”",
        choices: ["Listen to Nasruddin's explanation", "Insist that he should put the wood on the donkey"],
        consequence: ["listenExplanation", "insistOnDonkey"],
        image: "images/askWhy.jpeg"
    },
    leaveAlone: {
        text: "You decide to leave Nasruddin alone and continue on your way. Later, you hear that Nasruddin explained to his friend that he wanted to help share the load.",
        choices: [],
        consequence: [],
        image: "images/leaveAlone.jpeg"
    },
    listenExplanation: {
        text: "“It does hurt,” Nasruddin admitted, “but I wanted to help share the load.” “I still don’t understand,” said Nasruddin’s friend, looking puzzled. “The donkey is carrying me,” explained Nasruddin, “but I’m carrying the wood.”",
        choices: ["Find Nasruddin's donkey", "Leave Nasruddin to his task"],
        consequence: ["findDonkey", "leaveToTask"],
        image: "images/listenExplanation.jpeg"
    },
    insistOnDonkey: {
        text: "You insist that Nasruddin should put the wood on the donkey. Nasruddin smiles and thanks you for the advice, but he continues to carry the wood on his head.",
        choices: [],
        consequence: [],
        image: "images/insistOnDonkey.jpeg"
    },
    findDonkey: {
        text: "Nasruddin’s donkey was lost, but Nasruddin appeared to be happy, not sad. Instead of looking for his donkey, he sat drinking coffee in the coffeehouse. What do you do?",
        choices: ["Ask Nasruddin why he isn't looking for his donkey", "Join Nasruddin for coffee"],
        consequence: ["askWhyNotLooking", "joinForCoffee"],
        image: "images/findDonkey.jpeg"
    },
    leaveToTask: {
        text: "You leave Nasruddin to his task and continue on your way. Nasruddin’s unique logic remains a mystery to you.",
        choices: [],
        consequence: [],
        image: "images/leaveToTask.jpeg"
    },
    askWhyNotLooking: {
        text: "Everyone was puzzled about this, knowing how much Nasruddin loved his donkey, and his donkey had now been missing for several days. “I don’t understand why you look so happy,” someone finally said to him. “How can you smile like that when your donkey is lost?”",
        choices: ["Listen to Nasruddin's explanation", "Suggest looking for the donkey together"],
        consequence: ["listenExplanationDonkey", "suggestLookingTogether"],
        image: "images/askWhyNotLooking.jpeg"
    },
    joinForCoffee: {
        text: "You join Nasruddin for coffee and enjoy a pleasant conversation. Nasruddin’s unique perspective makes you think differently about life.",
        choices: [],
        consequence: [],
        image: "images/joinForCoffee.jpeg"
    },
    listenExplanationDonkey: {
        text: "“I’m smiling because I’m not on the donkey,” explained Nasruddin, taking another sip of his coffee. “Just imagine: if I were on the donkey, I would be lost too!”",
        choices: [],
        consequence: [],
        image: "images/listenExplanationDonkey.jpeg"
    },
    suggestLookingTogether: {
        text: "You suggest looking for the donkey together. Nasruddin agrees, and you both set out on a new adventure.",
        choices: [],
        consequence: [],
        image: "images/suggestLookingTogether.jpeg"
    }
};


let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story-text").textContent = stage.text;
    document.getElementById("story-image").src = stage.image;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => makeChoice(index));
        choicesDiv.appendChild(button);
    });
}

function makeChoice(index) {
    const stage = story[currentStage];
    currentStage = stage.consequence[index];
    if (story[currentStage].choices.length === 0) {
        endGame();
    } else {
        updatePage();
    }
}

function endGame() {
    const stage = story[currentStage];
    document.getElementById("story-text").textContent = stage.text;
    document.getElementById("story-image").src = stage.image;
    document.getElementById("choices").innerHTML = "";

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", startGame);
    document.getElementById("choices").appendChild(restartButton);
}

window.onload = startGame;
