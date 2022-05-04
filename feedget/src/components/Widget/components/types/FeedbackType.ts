export type FeedbackObjectType = { 
    value: { 
        title: string, 
        icon: {
             source: string, 
             alt: string
        } 
    },

    onChangeFeedback: () => void,
}