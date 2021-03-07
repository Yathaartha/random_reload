class randomZodiac {
  constructor() {
    this.zodiac = [
      "Happy Birthday!! May all your wishes come true.",
      "Let's meet at the park at 8pm tomorrow",
      "How was your day today?",
      "Do you like icecream? If yes which flavor?",
      "Let's go on a long drive looking for mother nature",
      "The fear of Covid has really gone down these past few weeks.",
      "Come to the principal's office immediately.",
      "You have a meeting at 5pm. Don't miss it.",
      "I hope your day was cheerful today.",
      "Congratulations on getting a new bike",
      "Wow, you look really pretty today.",
      "Summer is starting soon, better get ready for the mosquitoes.",
      "Time, Reality, Space, Mind, Power and Soul, acquire all these stones and you will become the most powerfl being.",
    ];
  }
  getRandomZodiac() {
    return this.zodiac[Math.floor(Math.random() * 11)];
  }

  renderZodiac() {
    const luckyzodiac = document.getElementById("zodiacsign");
    luckyzodiac.textContent = this.getRandomZodiac();
    console.log(this.rndNum);
  }
}

// class randomNumber {
//   constructor() {
//     this.rndNum = Math.floor(Math.random() * 100);
//     console.log(this.rndNum);
//   }

//   getLuckyNum() {
//     return this.rndNum;
//   }

//   renderLuckyNum() {
//     const luckynum = document.getElementById("luckynum");
//     luckynum.textContent = this.getLuckyNum();
//     console.log(this.rndNum);
//   }
// }

// const rng = new randomNumber();
// rng.renderLuckyNum();

const rnz = new randomZodiac();
rnz.renderZodiac();
