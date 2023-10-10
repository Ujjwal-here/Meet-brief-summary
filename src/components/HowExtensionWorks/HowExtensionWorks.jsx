import {HowExtensionWorksCard} from "../../reusable/HowExtensionWorksCard";
import "./HowExtensionWorks.css"
import Install from "../../assets/install.svg"
import Summary from "../../assets/summary.svg"
import Process from "../../assets/process.svg"


export function HowExtensionWorks() {
    return (
        <div className="how-extension-works">
            <HowExtensionWorksCard
                pic={Install}
                heading="Install & Login"
                paraOne="Head over to the Chrome Web Store or On our Website and download the Meet-Breif Extension."
                paraTwo="Log in with your existing credentials or Sign up to get started."
            />
            <HowExtensionWorksCard
                pic={Process}
                heading="Generate Captions"
                paraOne="Click on the extension icon to open the caption generation interface."
                paraTwo="Hit 'Generate' to start capturing captions from your Google Meet session. Hit
                'Stop' when the meeting concludes to halt caption capture."
            />
            <HowExtensionWorksCard
                pic={Summary}
                heading="Summary"
                paraOne="The extension processes captions and generates a concise summary once you Hit 'Stop'"
                paraTwo="Access the summary along with the unique meeting code on our dedicated site."
            />
        </div>
    )
}