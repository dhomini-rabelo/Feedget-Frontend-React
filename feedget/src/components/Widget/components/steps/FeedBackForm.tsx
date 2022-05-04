import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../CloseButton";
import { feedbackTypes } from "../data/feedback";
import { FeedbackFormProps } from "../types/FeedbackType";
import { ScreenshotButton } from "./components/ScreenshotButton";
import { screenshotType } from "./types";


export function FeedbackForm ({ feedbackType, onFeedbackRestart, onFeedbackSent }: FeedbackFormProps) {
    const feedback = feedbackTypes[feedbackType]
    const [screenshot, setScreenshot] = useState<screenshotType>(null)
    const [comment, setComment] = useState<string>('')
    
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        console.log({screenshot, comment})
        onFeedbackSent(true)
    }

    return (
        <>
            <header>
                <button className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" type="button" onClick={onFeedbackRestart}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedback.icon.source} alt={feedback.icon.alt} className="w-6 h-6" />
                    <span>{feedback.title}</span>
                </span>

                <CloseButton/ >
            </header>
            
            <form onSubmit={handleSubmit} className="my-4 w-full">
                <textarea onChange={(e) => setComment(e.target.value)} placeholder="Digite seu feedback" className="w-full md:w-[304px] min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"></textarea>

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />
                    
                    <button disabled={comment.length === 0} type="submit" className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">
                        Enviar Feedback
                    </button>
                </footer>

            </form>
        </>
    )
}