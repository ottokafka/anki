import React, { useState } from "react";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
var pinyin = require("chinese-to-pinyin");

// -------ANKI sound starts here--------------------
var a1;
var anki;
var ankiPinyinArr = [];

function AnkiSound(pinyinStr) {
  //ankiPinyinArr = [];
  //todo: check if this console log is functional

  // function anikMake(str) {
  var aWord = [];
  var pinyinNumber = [];
  var num;

  // loop through the string; x i a n g - then push to an array
  for (var letter of pinyinStr) {
    // if not ā || ē push all the n||mal letter to array

    if (
      letter !== "ā" &&
      letter !== "á" &&
      letter !== "ǎ" &&
      letter !== "à" &&
      letter !== "ē" &&
      letter !== "é" &&
      letter !== "ě" &&
      letter !== "è" &&
      letter !== "ī" &&
      letter !== "í" &&
      letter !== "ǐ" &&
      letter !== "ì" &&
      letter !== "ō" &&
      letter !== "ó" &&
      letter !== "ǒ" &&
      letter !== "ò" &&
      letter !== "ū" &&
      letter !== "ú" &&
      letter !== "ǔ" &&
      letter !== "ù"
    ) {
      aWord.push(letter);
      //console.log(aWord);
    }

    // change the letter to a normal letter
    if (
      letter === "ā" ||
      "á" ||
      "ǎ" ||
      "à" ||
      letter === "ē" ||
      "é" ||
      "ě" ||
      "è" ||
      letter === "ī" ||
      "í" ||
      "ǐ" ||
      "ì" ||
      letter === "ō" ||
      letter === "ó" ||
      letter === "ǒ" ||
      letter === "ò" ||
      letter === "ū" ||
      "ú" ||
      "ǔ" ||
      "ù"
    ) {
      if (
        letter === "ā" ||
        letter === "ē" ||
        letter === "ī" ||
        letter === "ō" ||
        letter === "ū"
      ) {
        pinyinNumber.push("1");
      }

      if (
        letter === "á" ||
        letter === "é" ||
        letter === "í" ||
        letter === "ó" ||
        letter === "ú"
      ) {
        pinyinNumber.push("2");
      }

      if (
        letter === "ǎ" ||
        letter === "ě" ||
        letter === "ǐ" ||
        letter === "ǒ" ||
        letter === "ǔ"
      ) {
        pinyinNumber.push("3");
      }

      if (
        letter === "à" ||
        letter === "è" ||
        letter === "ì" ||
        letter === "ò" ||
        letter === "ù"
      ) {
        pinyinNumber.push("4");
      }
    }

    // push a number such as 1 2 3 4 if ā push 1

    // if a letter is ā é change it to a || e && push it to array
    // -------------------pinyin tone 1 -----------
    if (letter === "ā") {
      letter = "a";
      aWord.push(letter);
    }

    if (letter === "ē") {
      letter = "e";
      aWord.push(letter);
    }

    if (letter === "ī") {
      letter = "i";
      aWord.push(letter);
    }
    if (letter === "ō") {
      letter = "o";
      aWord.push(letter);
    }
    if (letter === "ū") {
      letter = "u";
      aWord.push(letter);
    }

    // -------------------pinyin tone 2 -----------
    if (letter === "á") {
      letter = "a";
      aWord.push(letter);
    }

    if (letter === "é") {
      letter = "e";
      aWord.push(letter);
    }

    if (letter === "í") {
      letter = "i";
      aWord.push(letter);
    }

    if (letter === "ó") {
      letter = "o";
      aWord.push(letter);
    }

    if (letter === "ú") {
      letter = "u";
      aWord.push(letter);
    }

    // -------------------pinyin tone 3 -----------
    if (letter === "ǎ") {
      letter = "a";
      aWord.push(letter);
    }

    if (letter === "ě") {
      letter = "e";
      aWord.push(letter);
    }

    if (letter === "ǐ") {
      letter = "i";
      aWord.push(letter);
    }

    if (letter === "ǒ") {
      letter = "o";
      aWord.push(letter);
    }

    if (letter === "ǔ") {
      letter = "u";
      aWord.push(letter);
    }

    // -------------------pinyin tone 4 -----------
    if (letter === "à") {
      letter = "a";
      aWord.push(letter);
    }

    if (letter === "è") {
      letter = "e";
      aWord.push(letter);
    }

    if (letter === "ì") {
      letter = "i";
      aWord.push(letter);
    }

    if (letter === "ò") {
      letter = "o";
      aWord.push(letter);
    }

    if (letter === "ù") {
      letter = "u";
      aWord.push(letter);
    }
  }

  num = pinyinNumber[0];
  if (pinyinNumber.length === 0) {
    pinyinNumber.push("5");
    num = pinyinNumber[0];
  }
  a1 = aWord.join();
  a1.replace(/,/g, "");
  anki = a1.replace(/,/g, "");
  anki = "[sound:" + anki + num + ".mp3]";
  //todo: dont forget to push anki
  ankiPinyinArr.push(anki); // original

  // Anki sound ends
}

function App() {
  const [firstPinyin, setPinyin] = useState("");
  const [endPinyin, setEndPinyin] = useState("");
  const [copy, setCopy] = useState("");

  return (
    <div className="top center">
      <input
        className="font"
        placeholder="Chinese"
        name="firstPinyin"
        onChange={e => setPinyin(e.target.value)}
      />

      <p>{pinyin(firstPinyin)}</p>
      <CopyToClipboard
        text={pinyin(firstPinyin)}
        onCopy={() => setCopy({ copied: true })}
      >
        <button style={{ marginTop: "2rem", backgroundColor: "green" }}>
          Copy Pinyin clipboard
        </button>
      </CopyToClipboard>
      <br />

      <button
        className="btn"
        onClick={() => {
          let myPinyin = pinyin(firstPinyin);
          myPinyin = myPinyin.split(" ");
          // This is empties the array - keep this
          ankiPinyinArr = [];

          for (let i of myPinyin) {
            AnkiSound(i);
          }

          ankiPinyinArr.toString();
          setEndPinyin(ankiPinyinArr.toString());
        }}
      >
        Create Anki Sound
      </button>
      <p>{endPinyin}</p>

      <CopyToClipboard
        text={endPinyin}
        onCopy={() => setCopy({ copied: true })}
      >
        <button style={{ marginTop: "2rem", backgroundColor: "green" }}>
          Copy Anki clipboard
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default App;
