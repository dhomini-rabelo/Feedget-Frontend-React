import { feedbackTypes } from "../data/feedback"


export type FeedbackKeysType = keyof typeof feedbackTypes


export interface FeedbackButtonProps { 
    value: { 
        title: string, 
        icon: {
             source: string, 
             alt: string
        } 
    },

    onChangeFeedback: () => void,
}

export interface FeedbackFormProps { 
    feedbackType: FeedbackKeysType,
    onFeedbackRestart: () => void,
    onFeedbackSent: (feedbackSent: boolean) => void,
}

