import './KeyFeaturesCard.css'


export function KeyFeaturesCard({heading, para, pic}) {
    return (
        <section className="key-features-card-main">
            <div className="key-features-card-main-div">
                <img className="key-features-card-main-div-img" src={pic} alt="Data Extraction"/>
            </div>
            <div className="key-features-card-main-div-two">
                <h1 className="key-features-card-main-h1">{heading}</h1>
                <p className="key-features-card-main-p">{para}</p>
            </div>

        </section>
    )
}