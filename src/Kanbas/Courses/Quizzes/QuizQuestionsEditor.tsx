import React, { useState } from 'react';
import MultipleChoiceQuestionEditor from './MultipleChoiceQuestionEditor';
import { QuizDetailsProps, Screen, IQuiz } from './QuizTypes';

type Question = { type: string; text: string; };

const QuizQuestionsEditor: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);

    const addQuestion = () => {
        const newQuestion: Question = { type: 'MCQ', text: '' };
        setQuestions([ ...questions, newQuestion ]);
    };

    return (
        <div>
            <button onClick={addQuestion}>Add Question</button>
            {questions.map((q, index) => {
                switch (q.type) {
                    case 'MCQ':
                        return <MultipleChoiceQuestionEditor key={index} question={q} index={index}
                                                             onUpdate={(updatedQuestion: Question) => {
                                                                 const newQuestions = [...questions];
                                                                 newQuestions[index]= updatedQuestion;
                                                                 setQuestions(newQuestions);
                                                             }}/>;
                    // other question types...
                }
            })}
        </div>
    );
};

export default QuizQuestionsEditor;