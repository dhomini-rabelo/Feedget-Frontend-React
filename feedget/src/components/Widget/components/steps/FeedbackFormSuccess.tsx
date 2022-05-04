import { CloseButton } from "../CloseButton"
import successIcon from '../../assets/Success.svg'


export function FeedbackFormSuccess({ onFeedbackRestart }: { onFeedbackRestart: () => void }){
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <main className="flex flex-col items-center py-10 w-[384px]">
                <img src={successIcon} alt="success-icon" />
            </main>

            <span className="text-xl mt-2">Agradecemos o feedback!</span>

            <button onClick={onFeedbackRestart} type="button" className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">
                Quero enviar outro
            </button>
        </>
    )
}