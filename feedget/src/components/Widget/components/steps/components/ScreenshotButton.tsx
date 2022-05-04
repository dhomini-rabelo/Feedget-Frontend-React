import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../../../../Loading";
import { ScreenshotButtonProps } from "./types";


export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
    const [isTaking, setIsTaking] = useState<boolean>(false)


    async function handleTakeScreenshot() {
        setIsTaking(true)
        
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')

        onScreenshotTook(base64image)
        setIsTaking(false)
    }
    

    return !screenshot ? (
        <button 
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            type="button"
            onClick={handleTakeScreenshot}
        >
            {!isTaking ? <Camera className="w-6 h-6" /> : <Loading />}
        </button>
    ) : (
        <button
            className="w-10 h-10 p-1 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            style={{ backgroundImage: `url(${screenshot})`, backgroundPosition: 'right bottom', backgroundSize: 180 }}
            type="button"
            onClick={() => onScreenshotTook(null)}
        >
            <Trash weight="fill" />
        </button>
    )
}