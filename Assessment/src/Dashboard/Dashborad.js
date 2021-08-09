import React from 'react'


export default function Dashborad() {
    return (
        <div>
            <div className="container">
                <h1>Welcome to Dashboard!!!</h1>
                <br></br><br></br>   
                <div className="card-deck">
                <div className="col-sm-4">
                    <div className="card text-white bg-dark">
                    <h5 className="card-title">To Register </h5>
                    <p className="card-text">To register a new student account click below.</p>
                    <a href="/dashborad/register" className="btn btn-primary">REGISTER HERE</a>
                    </div>
                </div>
                <br></br>
                <div className="col-sm-4">
                    <div className="card text-white bg-dark">
                    <h5 className="card-title">LISTS </h5>
                    <p className="card-text">To view list of registered accounts click below.</p>
                    <a href="/dashborad/viewlist" className="btn btn-primary">ACCOUNT LISTS</a>
                    </div>
                </div>
                </div>
                </div>
                </div>
    )
}
