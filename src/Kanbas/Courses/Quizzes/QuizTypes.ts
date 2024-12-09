export interface QuizDetailsProps {
    // onBack: () => void;
}

export enum Screen {
    DETAILS,
    QUESTIONS,
    PREVIEW,
    EDITOR
}

export interface IQuiz {
    // Add other attributes as per your requirements...
    quizType: string;
    points: number;
    assignmentGroup: string;
    shuffleAnswers: boolean;
    timeLimit: string;
    multipleAttempts: boolean;
    numAttempts: number;
    showCorrectAnswers: boolean;
    accessCode: string;
    oneQuestionAtATime: boolean;
    webcamRequired: boolean;
    lockQuestionsAfterAnswering: boolean;
    dueDate: string;
    availableDate: string;
    untilDate: string;
    title: string;
    description: string;
}