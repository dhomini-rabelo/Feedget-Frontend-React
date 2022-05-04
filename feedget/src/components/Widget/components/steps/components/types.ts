import { screenshotType } from "../types";


export interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: screenshotType) => void,
    screenshot: screenshotType
}