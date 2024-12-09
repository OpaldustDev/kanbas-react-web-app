import { useState } from 'react';
import QuizDetailsEditor from './QuizDetailsEditor';
import QuizQuestionsEditor from './QuizQuestionsEditor';
import { QuizDetailsProps, Screen, IQuiz } from './QuizTypes';

const QuizEditor = () => {
    const [mode, setMode] = useState('details');
    const [title, setTitle] = useState('');

    return (
        <div>
            <button onClick={() => setMode('details')}>Details</button>
            <button onClick={() => setMode('questions')}>Questions</button>
            {
                mode === 'details'
                    ? <QuizDetailsEditor title={title} setTitle={setTitle} goToQuestions={() => setMode('questions')} />
                    : <QuizQuestionsEditor />
            }
        </div>
    );
};

export default QuizEditor;