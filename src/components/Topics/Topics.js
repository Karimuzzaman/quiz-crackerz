import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const data = useLoaderData();
    const topics = data.data;

    return (
        <div>

            {/* {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}>

                </Topic>)
            } */}
            {
                topics.map(topic => <Card
                    key={topic.id}
                    topic={topic}>
                </Card>)
            }

        </div>
    );
};

export default Topics;