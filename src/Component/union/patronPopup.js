import './patronPopup.css';
import { Link } from 'react-router-dom';
export function KofiPopup() {
    return (
        <Link to="https://ko-fi.com/kohakudayo" className="kofi-popup">
            <div className="kofi-popup-inner">
                <div className="kofi-icon">
                    <img src='https://storage.ko-fi.com/cdn/brandasset/kofi_s_logo_nolabel.png' alt="" style={{ width: "100%", height: "100%" }}></img>
                </div>
                <p className="kofi-popup-description-kofiname">Ko-fiで</p>
                <p className="kofi-popup-description">こはくをサポート</p>
            </div>
        </Link>
    );
}
