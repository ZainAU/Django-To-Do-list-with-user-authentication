import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <div>
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
    );
}