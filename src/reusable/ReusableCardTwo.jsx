import './ReusableCardTwo.css'

export function ReusableCardTwo({heading, para}) {
    return (
        <section className="main">
            <h1 className="main-heading">{heading}</h1>
            <hr className="card-hr"/>
            <p className="main-para">{para}</p>
        </section>
    )
}