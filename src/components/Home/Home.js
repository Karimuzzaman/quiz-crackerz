import React from 'react';
import './Home.css'
import Img from '../../images/quiz.jpg'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic'


const Home = () => {
    const data = useLoaderData();
    const topics = data.data;


    return (

        <div >
            <div className="card mb-3 home container mt-5 bg-secondary bg-gradient">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Quiz Ocean Mania</h5>
                            <p className="card-text"><b>
                                What does the ocean have to do with the air you breathe? Test your knowledge and impress your friends with this pop quiz on web development — and prepare to be surprised.</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}>

                    </Topic>)
                }

            </div>
        </div>


    );
};

export default Home;