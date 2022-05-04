import { CloseButton } from "../../CloseButton";
import { FeedbackButtonProps } from "../../types/FeedbackType";


export function FeedbackButton ({ value, onChangeFeedback }: FeedbackButtonProps) {
    return (
        <button
            className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={onChangeFeedback}
            type="button"
            >
            <img src={value.icon.source} alt={value.icon.alt} />
            <span>{value.title}</span>
        </button>
    )
}