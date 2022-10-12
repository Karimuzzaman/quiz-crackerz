import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ quiz, idx }) => {
    const [correct, setCorrect] = useState([]);
    //const notify = () => toast("Wow so easy !");


    //console.log(quiz);
    //console.log(idx);
    const { options, id, question, correctAnswer } = quiz;
    //console.log(options);
    const [a, b, c, d] = options;
    //console.log(a, b, c, d);


    const handleCorrectAnswer = (e) => {
        setCorrect(e);
        toast("Correct Answer is : " + correctAnswer);

    }

    const handleCheck = (e, f) => {
        console.log(e);
        console.log(f);
        if (e === f) {
            console.log('you are correct');
            toast("answer is correct !");
        }

        else {
            console.log('you are wrong');

            toast.error('Wrong Answer', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }






    return (
        <div className='border border-info rounded-4 bg-success bg-opacity-25 mb-3'>
            <p>Quiz {idx}: {question}</p>
            <div className="mb-4">
                <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked onClick={(e, f) => handleCheck(a, correctAnswer)} />
                    <label className="form-check-label ms-3" for="exampleRadios1">
                        {a}
                    </label>
                </div>
                <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked onClick={(e, f) => handleCheck(b, correctAnswer)} />
                    <label className="form-check-label ms-3" for="exampleRadios1">
                        {b}
                    </label>
                </div>
                <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked onClick={(e, f) => handleCheck(c, correctAnswer)} />
                    <label className="form-check-label ms-3" for="exampleRadios1">
                        {c}
                    </label>
                </div>
                <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked onClick={(e, f) => handleCheck(d, correctAnswer)} />
                    <label className="form-check-label ms-3" for="exampleRadios1">
                        {d}
                    </label>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>

            <div className="mb-3">
                <button className='border border-0 bg-secondary rounded-circle' value={correctAnswer} onClick={(e) => handleCorrectAnswer(e.target.value)}>
                    <FontAwesomeIcon className='fa-2x' icon={faEye} />
                </button>
            </div>
        </div>

    );
};

export default Question;