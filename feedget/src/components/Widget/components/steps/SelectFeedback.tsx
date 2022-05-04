import { CloseButton } from "../CloseButton";
import { feedbackTypes } from "../data/feedback";
import { FeedbackKeysType } from "../types/FeedbackType";
import { FeedbackButton } from "./components/FeedbackButton";


export function SelectFeedback ({ setSelectedFeedback }: { setSelectedFeedback: (key: FeedbackKeysType) => void }) {
    return (
        <>            
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/ >
            </header>
            
            <main className="flex py-8 gap-2 w-full">
                { 
                    Object.entries(feedbackTypes).map(([key, value]) => (
                        <FeedbackButton  key={key}  value={value} onChangeFeedback={() => setSelectedFeedback(key as FeedbackKeysType)} 
                    />))
                }
            </main>
        </>
    )
}