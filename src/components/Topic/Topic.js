import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BasicExample({ topic }) {
    const { id, name, logo, total } = topic;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`quiz/${id}`);

    }
    return (

        <div>
            <Card style={{ width: '18rem' }} className="container mt-5 mb-4 bg-secondary">
                <Card.Img variant="top" src={logo} />
                <Card.Body>

                    <Card.Text>
                        <h4>Name: {name}</h4>
                        <h4>Total quizzes: {total}</h4>
                    </Card.Text>
                    <Button variant="primary" onClick={handleNavigate}>Start Practice</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default BasicExample;