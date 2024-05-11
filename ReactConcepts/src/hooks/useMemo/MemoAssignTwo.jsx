import { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = [
  "hi",
  "my",
  "name",
  "is",
  "for",
  "to",
  "random",
  "word",
  "qwert",
];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}

const MemoAssignTwo = () => {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [search, setSearch] = useState("");
  //Usememo will run only on the input of dependency array
  const memoThis = useMemo(() => {
    const filteredSentences = sentences.filter((x) => x.includes(search));
    return filteredSentences;
  }, [search, sentences]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      {memoThis.map((word, id) => (
        <div key={id}>{word}</div>
      ))}
    </div>
  );
};

export default MemoAssignTwo;
