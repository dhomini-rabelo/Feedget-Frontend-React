import { CloseButton } from "./CloseButton";
import { FeedbackButton } from "./steps/FeedbackButton";
import { feedbackButtonTypes } from "./data/feedback";
import { useState } from "react";


type feedbackKeysType = keyof typeof feedbackButtonTypes


export function WidgetForm () {
    const [selectedFeedback, setSelectedFeedback] = useState<feedbackKeysType | null>(null)

    
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[cal(100vw-2rem)] md:w-auto">
            
            <main className="flex py-8 gap-2 w-full">
                { !selectedFeedback ? (
                    Object.entries(feedbackButtonTypes).map(([key, value]) => (
                        <FeedbackButton  key={key}  value={value} onChangeFeedback={() => setSelectedFeedback(key as feedbackKeysType)} 
                    />))
                ): <div>{selectedFeedback}</div>}
            </main>

            <footer>
                <span className="text-xs text-neutral-400">Feito pela <a href="/" className="underline underline-offset-2">Rocketseat</a></span>
            </footer>

        </div>
    )
}