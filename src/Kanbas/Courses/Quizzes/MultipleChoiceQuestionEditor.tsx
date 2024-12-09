import React, { useEffect, useState, SetStateAction } from "react";

type MCQProps = {
    index: number;
    question: { type: string; text: string; };
    onUpdate: Function;
};

const MultipleChoiceQuestionEditor: React.FC<MCQProps> = ({ question, onUpdate }) => {
    const [questionText, setQuestionText] = useState('');

    // Handle the cases where 'question' might change
    useEffect(() => {
        setQuestionText(question.text);
    }, [question]);

    const handleTextChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        const updatedText = e.target.value;
        setQuestionText(updatedText);
        onUpdate({ type: 'MCQ', text: updatedText });
    };

    // Handle other fields...

    const handleSave = () => {
        // Save logic...
    };

    return (
        <div>
            <input type="text" value={questionText} onChange={handleTextChange} />
            <button onClick={handleSave}>Save</button>
            {/* Show other fields here... */}
        </div>
    );
};

export default MultipleChoiceQuestionEditor;