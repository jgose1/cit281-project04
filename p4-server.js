// Import Express and your module
const express = require('express');
const app = express();
const port = 8080;
const host = '127.0.0.1';
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require('./p4-module');

// Middleware to parse JSON
app.use(express.json());

// === ROUTES ===

// GET all questions
app.get('/cit/question', (req, res) => {
  res.json({
    error: '',
    statusCode: 200,
    questions: getQuestions(),
  });
});

// GET all answers
app.get('/cit/answer', (req, res) => {
  res.json({
    error: '',
    statusCode: 200,
    answers: getAnswers(),
  });
});

// GET all questions + answers
app.get('/cit/questionanswer', (req, res) => {
  res.json({
    error: '',
    statusCode: 200,
    questions_answers: getQuestionsAnswers(),
  });
});

// GET a single question by number
app.get('/cit/question/:number', (req, res) => {
  const result = getQuestion(parseInt(req.params.number));
  res.json({
    ...result,
    statusCode: result.error ? 404 : 200,
  });
});

// GET a single answer by number
app.get('/cit/answer/:number', (req, res) => {
  const result = getAnswer(parseInt(req.params.number));
  res.json({
    ...result,
    statusCode: result.error ? 404 : 200,
  });
});

// GET a single question+answer by number
app.get('/cit/questionanswer/:number', (req, res) => {
  const result = getQuestionAnswer(parseInt(req.params.number));
  res.json({
    ...result,
    statusCode: result.error ? 404 : 200,
  });
});

// 404 route handler (must go last)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', statusCode: 404 });
});

// Start server
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
