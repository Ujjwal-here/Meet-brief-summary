import './ReusableCardOne.css'

export function ReusableCardOne() {
    return (
        <section className="card">
            <div className="container">
                <h1 className="card-heading">Meeting Code</h1>
                <hr/>
                <p className="card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc
                    eget arcu suscipit
                    faucibus eu varius urna. Pellentesque nec massa porta ante malesuada commodo sed id ex. Aliquam
                    fermentum nec erat eget volutpat.</p>
                <p className="readmore">Read more ....</p>
            </div>
        </section>
    )
}