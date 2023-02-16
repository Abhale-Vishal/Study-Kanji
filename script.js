const kanli = [
  {
    kanji: "一",
    japanese_meaning: "イチ , イツ , ひと- , ひと.つ",
    english_meaning: "one",
  },
  {
    kanji: "七",
    japanese_meaning: "シチ ,なな, なな.つ, なの",
    english_meaning: "seven",
  },
  {
    kanji: "万",
    japanese_meaning: "マン, バン, よろず",
    english_meaning: "ten thousand",
  },
  {
    kanji: "三",
    japanese_meaning: "サン, ゾウ, み, み.つ, みっ.つ",
    english_meaning: "three",
  },
  {
    kanji: "上",
    japanese_meaning: "ジョウ, ショウ, シャン,うえ, -うえ, うわ-",
    english_meaning: "above, up",
  },
  {
    kanji: "下",
    japanese_meaning: "カ, ゲ, した",
    english_meaning: "below, down, descend, give, low, inferior",
  },
  {
    kanji: "中",
    japanese_meaning: "なか, うち, あた.る , チュウ",
    english_meaning: "in, inside, middle, mean, centerr",
  },
  {
    kanji: "九",
    japanese_meaning: "キュウ, ク , ここの, ここの.つ",
    english_meaning: "nine",
  },
  {
    kanji: "二",
    japanese_meaning: "ニ, ジ, ふた, ふた.つ, ふたた.び",
    english_meaning: "two",
  },
  {
    kanji: "五",
    japanese_meaning: "いつ, いつ.つ, ゴ",
    english_meaning: "five",
  },
  {
    kanji: "人",
    japanese_meaning: "ジン, ニン, ひと, -り, -と",
    english_meaning: "person",
  },
  {
    kanji: "今",
    japanese_meaning: "コン, キン, いま",
    english_meaning: "now",
  },
  {
    kanji: "休",
    japanese_meaning: "キュウ, やす.む, やす.まる, やす.める",
    english_meaning: "rest, day off, retire, sleep",
  },
  {
    kanji: "会",
    japanese_meaning: "カイ, エ, あ.う, あ.わせる, あつ.まる",
    english_meaning: "meeting, meet, party, association, interview, join",
  },
  {
    kanji: "何",
    japanese_meaning: "なに, なん, なに-, なん-,カ",
    english_meaning: "what",
  },
  {
    kanji: "先",
    japanese_meaning: "セン, さき, ま.ず",
    english_meaning: "before, ahead, previous, future, precedence",
  },
];

//selection of the HTML tag's
const next = document.querySelector(".next");
const random = document.querySelector(".random");
const Previous = document.querySelector(".Previous");
const kanji = document.querySelector(".kanji");
const kanjiInTheBox = document.getElementById("kanji");
const meanInTheBox = document.getElementById("meaning");
const emeaning = document.getElementById("emeaning");
const meaning = document.querySelector(".meaning");
const learnbtn = document.querySelector(".learnbtn");
const maincontainer = document.querySelector(".main-container");
const btn = document.querySelector(".btn");
const back = document.querySelector(".back");
const textbtn = document.querySelector(".text-btn");
const mainexam = document.querySelector(".main-exam");
const backtest = document.querySelector(".back-test");
const random1 = document.querySelector(".random1");
const kanjicheck = document.querySelector("#kanjicheck");
const meaningcheck = document.querySelector("#meaningcheck");
const emeaningcheck = document.querySelector("#emeaningcheck");
const result = document.querySelector(".result");
const meaningexam = document.querySelector(".meaning-exam");
const JLPT = document.querySelector(".JLPT");

let currentKanji = 0;

JLPT.addEventListener("click", function () {
  btn.classList.toggle("hidden");
  textbtn.classList.toggle("hidden");
});

learnbtn.addEventListener("click", function () {
  maincontainer.classList.toggle("hidden");
  btn.classList.add("hidden");
  back.classList.remove("hidden");
  textbtn.classList.add("hidden");
  JLPT.classList.toggle("hidden");
});

textbtn.addEventListener("click", function () {
  mainexam.classList.toggle("hidden");
  btn.classList.add("hidden");
  textbtn.classList.toggle("hidden");
  backtest.classList.remove("hidden");
  JLPT.classList.toggle("hidden");
});

backtest.addEventListener("click", function () {
  btn.classList.remove("hidden");
  textbtn.classList.toggle("hidden");
  mainexam.classList.add("hidden");
  back.classList.add("hidden");
  backtest.classList.add("hidden");
  JLPT.classList.toggle("hidden");
});

back.addEventListener("click", function () {
  maincontainer.classList.toggle("hidden");
  btn.classList.remove("hidden");
  back.classList.add("hidden");
  textbtn.classList.remove("hidden");
  JLPT.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  kanjiInTheBox.innerHTML = kanli[currentKanji].kanji;
  meanInTheBox.textContent = kanli[currentKanji].japanese_meaning;
  emeaning.textContent = kanli[currentKanji].english_meaning;
});

next.addEventListener("click", function () {
  if (currentKanji < kanli.length) {
    currentKanji++;
    console.log(currentKanji);
    kanjiInTheBox.innerHTML = kanli[currentKanji].kanji;
    meanInTheBox.textContent = kanli[currentKanji].japanese_meaning;
    emeaning.textContent = kanli[currentKanji].english_meaning;
  }
});

Previous.addEventListener("click", function () {
  if (currentKanji >= 0) {
    currentKanji--;
    console.log(currentKanji);
    kanjiInTheBox.innerHTML = kanli[currentKanji].kanji;
    meanInTheBox.textContent = kanli[currentKanji].japanese_meaning;
    emeaning.textContent = kanli[currentKanji].english_meaning;
  }
});

random.addEventListener("click", function () {
  currentKanji = Math.trunc(Math.random() * kanli.length);
  kanjiInTheBox.innerHTML = kanli[currentKanji].kanji;
  meanInTheBox.textContent = kanli[currentKanji].japanese_meaning;
  emeaning.textContent = kanli[currentKanji].english_meaning;
});

random1.addEventListener("click", function () {
  currentKanji = Math.trunc(Math.random() * kanli.length);
  kanjicheck.textContent = kanli[currentKanji].kanji;
  meaningcheck.textContent = kanli[currentKanji].japanese_meaning;
  emeaningcheck.textContent = kanli[currentKanji].english_meaning;
});

result.addEventListener("click", function () {
  meaningexam.classList.toggle("hidden");
});
