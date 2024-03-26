import './muifactory.css';
export function MuiWrapper(props) {
    return (
        <div className="mui-wrapper" style={props.style}>
            {props.children}
        </div>
    );
}