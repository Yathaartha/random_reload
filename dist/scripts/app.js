class randomZodiac {
  constructor() {
    this.zodiac = [
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
      "Aquarius",
      "Pisces",
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

class randomNumber {
  constructor() {
    this.rndNum = Math.floor(Math.random() * 100);
    console.log(this.rndNum);
  }

  getLuckyNum() {
    return this.rndNum;
  }

  renderLuckyNum() {
    const luckynum = document.getElementById("luckynum");
    luckynum.textContent = this.getLuckyNum();
    console.log(this.rndNum);
  }
}

const rng = new randomNumber();
rng.renderLuckyNum();

const rnz = new randomZodiac();
rnz.renderZodiac();
