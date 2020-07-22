import React from 'react'

export const Contact = () => {
    return (
        <div className="container">
            <div className="px-4">
                <h1>Contact</h1>
            </div>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-group form-check">
                    <input type="checkbox" class="form-check-input bg-light" id="exampleCheck1"></input>
                    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    
                </div>
                <button type="submit" class="btn btn-info">Submit</button>
            </form>

        </div>
    )
}
