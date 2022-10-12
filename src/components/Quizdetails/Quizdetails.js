import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizdetails = () => {
    const { data } = useLoaderData();
    //console.log(data);
    const { name, questions } = data;
    //console.log(questions);
    return (

        <div>
            <h1 className='mb-4'>Quiz Topic: {name}</h1>
            {
                questions.map((quiz, idx) => <Question
                    key={quiz.id}
                    quiz={quiz}
                    idx={idx}>

                </Question>)
            }

        </div>

    );
};

export default Quizdetails;