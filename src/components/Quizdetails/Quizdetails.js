import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizdetails = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (

        <div>
            <h1>Welcome to quiz details</h1>
        </div>

    );
};

export default Quizdetails;