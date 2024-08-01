import React, { useState } from 'react';
import QuestionList from './QuestionList';

function Quiz() {

    const questions = [
        {
            question: "What is React primarily used for?",
            options: ['Building mobile apps', "Server-side processing", "Building user interfaces", "Data Analysis"],
            answer: "Building user interfaces"        
        },
        {
            question: "Which feature of React allows it to efficiently update the UI?",
            options: ['Real DOM', "Virtual DOM", "Shadow DOM", "Document Fragment"],
            answer: "Virtual DOM"        
        },
        {
            question: "JSX stands for...",
            options: ['JavaScript XML', "Java Syntax Extension", "JavaScript Syntax", "Java Structured XML"],
            answer: "JavaScript XML"        
        },
        {
            question: "In JSX, how do you express JavaScript variables?",
            options: ['Inside curly braces', "Inside square brackets", "Inside single quotes", "Inside parentheses"],
            answer: "Inside curly braces"        
        },
        {
            question: "Which of the following is a correct way to comment in JSX?",
            options: ['{/*Comment here*/}', "//Comment here", "<! -- Comment here -->", "#Comment here"],
            answer: "{/*Comment here*/}"        
        },
        {
            question: "What is the correct syntax for embedding a JavaScript expression in JSX?",
            options: ['{expression}', "expression", "${expression}", "#expression"],
            answer: "{expression}"        
        },
        {
            question: "JSX is processed into...",
            options: ['JavaScript Objects', "HTML strings", "Virtual DOM Nodes", "Regular DOM Nodes"],
            answer: "JavaScript Objects"        
        },
        {
            question: "JSX elements must be wrapped in an enclosing tag. What is this concept known as?",
            options: ['Single Child Rule', "Parent-Child Relationship", "React Fragment", "Encapsulation"],
            answer: "Encapsulation"        
        },        
        {
            question: "What does the following JSX code render? {'Hello' + 'World'}",
            options: ['HelloWorld', "Hello World", "'Hello' 'World'", "Hello+World"],
            answer: "HelloWorld"        
        },
        {
            question: "What will be displayed on the screen for the following JSX code: <div> {2*5}</div>",
            options: ['2 * 5', "10", "2 5", "25"],
            answer: "10"        
        }
        

    ]

    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);   
    const [score, setscore] = useState(0);

    const handleClick = (option)=>{

        setCurrentAnswer(option);
        if(option === questions[currentQuestionIndex].answer){
            setscore(score+1);
        }
    }

    const handleNextQuestion = ()=>{
        setcurrentQuestionIndex(currentQuestionIndex+1);
        setCurrentAnswer(null);
    }
    return (
        <>
        <div className='font-semibold  mt-6 text-center'>
            <h1>Welcome to QuizQuest</h1>
        </div>
        {currentQuestionIndex <questions.length?
        <div>
        <QuestionList currentAnswer={currentAnswer} handleClick={handleClick} question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} />

        <button
        disabled={currentAnswer === null}
        className={`font-bold py-2 px-4 transform transition-all duration-100 border-2 border-gray-600 rounded-md p-2 block mx-auto mt-12 ${
            currentAnswer === null
            ? 'bg-gray-300 cursor-not-allowed opacity-50'
            : 'bg-gray-200 hover:bg-gray-400 cursor-pointer hover:shadow-xl hover:scale-105 hover:opacity-100'
        }`}

        onClick={handleNextQuestion}
        >
        Next Question
        </button>

        </div>

        : 
        <div>
            <h1 className='text-2xl font-bold text-center'>Your Score is : {score}</h1>
        </div>
        
        }
        
        </>
    )
}

export default Quiz;