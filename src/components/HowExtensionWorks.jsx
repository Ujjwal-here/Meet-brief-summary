import {HowExtensionWorksCard} from "../reusable/HowExtensionWorksCard";
import "./HowExtensionWorks.css"

export function HowExtensionWorks() {
    return (
        <div className="how-extension-works">
            <HowExtensionWorksCard
                heading="Installation & Authentication"
                paraOne="Download the Meet-Brief Extension"
                paraTwo="Log in with your existing credentials or Sign up to get started."
            />
            <HowExtensionWorksCard
                heading="Generate Captions"
                paraOne="Click on the extension icon to open the caption generation interface."
                paraTwo="Hit 'Generate' to start capturing captions from your Google Meet session.."
            />
            <HowExtensionWorksCard
                heading="Summary and Meeting Code"
                paraOne="The extension processes captions and generates a concise summary once you Hit 'Stop'"
                paraTwo="Access the summary along with the unique meeting code on our dedicated site."
            />
            <HowExtensionWorksCard
                heading="Summary and Meeting Code"
                paraOne="Once the meeting ends, the extension processes captions and generates a concise summary."
                paraTwo="Access the summary along with the unique meeting code on our dedicated site."
            />
        </div>
    )
}