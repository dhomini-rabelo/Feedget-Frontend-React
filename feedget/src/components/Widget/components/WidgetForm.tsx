import { FeedbackKeysType } from "./types/FeedbackType";
import { useState } from "react";
import { FeedbackFormSuccess } from "./steps/FeedbackFormSuccess";
import { SelectFeedback } from "./steps/SelectFeedback";
import { FeedbackForm } from "./steps/FeedbackForm";


export function WidgetForm () {
    const [selectedFeedback, setSelectedFeedback] = useState<FeedbackKeysType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState<boolean>(false)
    const handleRestartFeedback = () => {setSelectedFeedback(null), setFeedbackSent(false)}

    
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {
                !feedbackSent ? (
                    <>
                        {!selectedFeedback ? (
                                <SelectFeedback setSelectedFeedback={setSelectedFeedback} />
                            ) : (
                                <FeedbackForm feedbackType={selectedFeedback} onFeedbackRestart={handleRestartFeedback} onFeedbackSent={setFeedbackSent} />
                        )}
                    </>
                ) : (
                    <FeedbackFormSuccess onFeedbackRestart={handleRestartFeedback} />
                )
            }

            <footer>
                <span className="text-xs text-neutral-400">Feito pela <a href="/" className="underline underline-offset-2">Rocketseat</a></span>
            </footer>

        </div>
    )
}