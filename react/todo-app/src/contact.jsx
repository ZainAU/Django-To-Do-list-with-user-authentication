import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <div>
        <div className="header-bar">
            <h1>Contact Us</h1>
            </div>
            <div className='card-body'>
            <form>
                <div>
                <label>Name: </label>
                <input type="text"/>
                </div>
                <div>
                <label>Email Address: </label>
                <input type="email"/>
                </div>
                <div>
                <label>Message: </label>
                <textarea/>
                </div>
                <Link to='/dashboard'>Back</Link>
            </form>
            </div>
        </div>
    );
}