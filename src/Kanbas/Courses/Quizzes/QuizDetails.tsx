import React, { useState, FC } from 'react';
import { QuizDetailsProps, Screen, IQuiz } from './QuizTypes';
import QuizEditor from './QuizEditor';

const QuizDetails: FC<QuizDetailsProps> = ({  }) => {
    const [quiz, setQuiz] = useState<IQuiz>({
        quizType: "Graded Quiz",
        points: 0,
        assignmentGroup: "Quizzes",
        shuffleAnswers: true,
        timeLimit: "20 Minutes",
        multipleAttempts: false,
        numAttempts: 1,
        showCorrectAnswers: false,
        accessCode: '',
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: '',
        availableDate: '',
        untilDate: '',
        title: '',
        description: '',
    });

    const [screen, setScreen] = useState<Screen>(Screen.DETAILS);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setQuiz({ ...quiz, [name]: value });
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setQuiz({ ...quiz, [name]: checked });
    };

    if (screen === Screen.EDITOR) {
        return (
            <div>
                <QuizEditor /> {/* render the QuizEditor component here */}
                <button onClick={() => setScreen(Screen.DETAILS)}>Back to Details</button>
            </div>
        );
    } else if (screen === Screen.PREVIEW) {
        return (
            <div>
                {/* Here, you will render the QuizPreview component */}
                <button onClick={() => setScreen(Screen.DETAILS)}>Back to Details</button>
            </div>
        );}
    else
    {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>
                    Type:
                    <select name="quizType" value={quiz.quizType} onChange={handleChange}>
                        <option value="Graded Quiz">Graded Quiz</option>
                        <option value="Practice Quiz">Practice Quiz</option>
                        <option value="Graded Survey">Graded Survey</option>
                        <option value="Ungraded Survey">Ungraded Survey</option>
                    </select>
                </label>
                <label>
                    Points:
                    <input type="number" name="points" value={quiz.points} onChange={handleChange}/>
                </label>
                <label>
                    Assignment Group:
                    <select name="assignmentGroup" value={quiz.assignmentGroup} onChange={handleChange}>
                        <option value="Quizzes">Quizzes</option>
                        <option value="Exams">Exams</option>
                        <option value="Assignments">Assignments</option>
                        <option value="Project">Project</option>
                    </select>
                </label>
                <label>
                    Shuffle Answers:
                    <input type="checkbox" name="shuffleAnswers" checked={quiz.shuffleAnswers}
                           onChange={handleCheckboxChange}/>
                </label>
                <label>
                    Time Limit:
                    <input type="text" name="timeLimit" value={quiz.timeLimit} onChange={handleChange}/>
                </label>
                <label>
                    Multiple Attempts:
                    <input type="checkbox" name="multipleAttempts" checked={quiz.multipleAttempts}
                           onChange={handleCheckboxChange}/>
                </label>
                <label>
                    How Many Attempts:
                    <input type="number" name="numAttempts" value={quiz.numAttempts} onChange={handleChange}
                           disabled={!quiz.multipleAttempts}/>
                </label>
                <label>
                    Show Correct Answers:
                    <input type="checkbox" name="showCorrectAnswers" checked={quiz.showCorrectAnswers}
                           onChange={handleCheckboxChange}/>
                </label>
                <label>
                    Access Code:
                    <input type="text" name="accessCode" value={quiz.accessCode} onChange={handleChange}/>
                </label>
                <label>
                    One Question at a Time:
                    <input type="checkbox" name="oneQuestionAtATime" checked={quiz.oneQuestionAtATime}
                           onChange={handleCheckboxChange}/>
                </label>
                <label>
                    Webcam Required:
                    <input type="checkbox" name="webcamRequired" checked={quiz.webcamRequired}
                           onChange={handleCheckboxChange}/>
                </label>
                <label>
                    Lock Questions After Answering:
                    <input type="checkbox" name="lockQuestionsAfterAnswering"
                           checked={quiz.lockQuestionsAfterAnswering}
                           onChange={handleCheckboxChange}/>
                </label>
                <label>
                    Due date:
                    <input type="date" name="dueDate" value={quiz.dueDate} onChange={handleChange}/>
                </label>
                <label>
                    Available date:
                    <input type="date" name="availableDate" value={quiz.availableDate} onChange={handleChange}/>
                </label>
                <label>
                    Until date:
                    <input type="date" name="untilDate" value={quiz.untilDate} onChange={handleChange}/>
                </label>

                <button onClick={() => console.log('Navigate to Quiz Preview')}>Preview</button>
                <button onClick={() => setScreen(Screen.EDITOR)}>Edit</button>
                {/*<button onClick={onBack}>Back</button>*/}
            </div>
        );
    }
}

export default QuizDetails;