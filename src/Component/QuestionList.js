import React from 'react'

function QuestionList({question, options, handleClick, currentAnswer}) {
  return (
    <>
    <div>
        <h2 className='mt-20 text-center text-4xl font-semibold transition-transform duration-300 transform hover:scale-105 '>{question}</h2>
        <ul className='text-center mt-7'>
            {options.map((option, index)=>{
                return <li
                className={`block mx-auto mt-2 p-2 max-w-lg bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:opacity-90 ${currentAnswer === option ? 'selected' : ''}`}
                key={index}
                onClick={() => { handleClick(option) }}
              >
                {option}
              </li>
            })}
        </ul>
    </div>
    </>
  );
}

export default QuestionList