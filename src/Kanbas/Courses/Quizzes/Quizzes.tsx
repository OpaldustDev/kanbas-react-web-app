import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const quiz1 = {
    id: "1",
    title: "Quiz",
    // Other quiz properties...
};

const Quizzes: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/QuizDetails');
    }, [navigate]);

    return (
        <div>
            <h1>Quizzes</h1>
            <div>
                <h2>{quiz1.title}</h2>
            </div>
        </div>
    );
};

export default Quizzes;