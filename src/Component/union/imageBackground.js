import './imageBackground.css';
import IronmanImage from '../../Media/iron_man.jpg';
export function IronmanBackground() {
    return (
        <>
            <div className="ironman-background">
                <img src={IronmanImage} alt=""></img>
            </div>
            <div className="ironman-background-filter"></div>
        </>
    );
}