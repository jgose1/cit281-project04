const { data } = require('./p4-data.js');

function getQuestions() {
    return data.map(obj => obj.question);
  }
  
  function getAnswers() {
    return data.map(obj => obj.answer);
  }
  
  function getQuestionsAnswers() {
    return data.map(obj => ({ ...obj })); // deep clone for extra credit
  }

  
  function getQuestion(number = "") {
    const result = {
      question: "",
      number: "",
      error: "",
    };
  
    if (Number.isInteger(number)) {
      if (number < 1) {
        result.error = "Question number must be >= 1";
      } else if (number > data.length) {
        result.error = `Question number must be less than the number of questions (${data.length})`;
      } else {
        result.question = data[number - 1].question;
        result.number = number;
      }
    } else {
      result.error = "Question number must be an integer";
    }
  
    return result;
  }
  
  function getAnswer(number = "") {
    const result = {
      answer: "",
      number: "",
      error: "",
    };
  
    if (Number.isInteger(number)) {
      if (number < 1) {
        result.error = "Answer number must be >= 1";
      } else if (number > data.length) {
        result.error = `Answer number must be less than the number of questions (${data.length})`;
      } else {
        result.answer = data[number - 1].answer;
        result.number = number;
      }
    } else {
      result.error = "Answer number must be an integer";
    }
  
    return result;
  }
  
  function getQuestionAnswer(number = "") {
    const result = {
      question: "",
      answer: "",
      number: "",
      error: "",
    };
  
    if (Number.isInteger(number)) {
      if (number < 1) {
        result.error = "Question number must be >= 1";
      } else if (number > data.length) {
        result.error = `Question number must be less than the number of questions (${data.length})`;
      } else {
        result.question = data[number - 1].question;
        result.answer = data[number - 1].answer;
        result.number = number;
      }
    } else {
      result.error = "Question number must be an integer";
    }
  
    return result;
  }
  
  /*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set these to true one at a time to test specific functions
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  
  // getQuestions()
  if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },
      { d: "(0)", f: getQuestion(0) },
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },
      { d: "(0)", f: getAnswer(0) },
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },
      { d: "(0)", f: getQuestionAnswer(0) },
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }
    );
  }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  };
  