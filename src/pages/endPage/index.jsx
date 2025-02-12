import { Link } from "react-router-dom"
import WindowControls from "../../components/window/window";
import './index.css';

function endPage() {
    return(
        <>
        <WindowControls></WindowControls>
        <div className="endPage">
        <div className="endText"> Study Session Done! </div>
        <div className="endSubText"> Good Job! </div>
        <img className="doggo" src="./assets/dog.gif"></img>
        <Link className="continueButton3" to="/Home" >
        HOME
        </Link>
        </div>
        </>
    );
}

export default endPage