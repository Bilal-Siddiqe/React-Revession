import React from 'react'

function Cards(props) {
    let myCard = {
        width: "10rem"
    }
    return (
        <>
            <div className="card" style={myCard}>
                <img src="https://images.pexels.com/photos/16552408/pexels-photo-16552408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="img1" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
export default Cards;
