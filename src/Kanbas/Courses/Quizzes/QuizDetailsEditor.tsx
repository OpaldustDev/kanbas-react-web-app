import React, { SetStateAction } from 'react';

type QuizDetailsEditorProps = {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    goToQuestions: () => void;
};

const QuizDetailsEditor: React.FC<QuizDetailsEditorProps> = ({ title, setTitle, goToQuestions }) => {
    const handleTitleChange = (e: { target: { value: SetStateAction<string>; }; }) => setTitle(e.target.value);

    // more state and handlers...

    const handleSave = () => {
        // save logic...
        // navigate to questions after save
        goToQuestions();
    };

    return (
        <div>
            <input type="text" value={title} onChange={handleTitleChange} />
            <button onClick={handleSave}>Save</button>
            {/* and other input fields... */}
        </div>
    );
};

export default QuizDetailsEditor;