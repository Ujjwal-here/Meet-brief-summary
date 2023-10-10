import './Home.css'
import {KeyFeatures} from "../KeyFeatures";
import {HowExtensionWorks} from "../HowExtensionWorks";
import {Introduction} from "../Introduction";

export function Home() {
    return (
        <>
            {/*-----Introduction-----*/}
            <section className="home-s1-main">
                <Introduction/>
            </section>

            {/*-----KeyFeatures-----*/}
            <section className="home-s2-main">
                <div className="container">
                    <h2 className="home-s2-main-h2">Key Features</h2>
                    <KeyFeatures/>
                </div>
            </section>

            {/*-----HowExtensionWorks-----*/}
            <section className="home-s3-main">
                <div className="container">
                    <h2 className="home-s3-main-h2">How Extension Works</h2>
                    <HowExtensionWorks/>
                </div>
            </section>

        </>
    )
}