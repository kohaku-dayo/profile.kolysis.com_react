import './frameUnion.css';
export function CenterElements(props) {
    return (
        <div className="center-elements">
            <div className="center-elements-child">
                {props.children}
            </div>
        </div>
    )
}

export function VerticalContainer(props) {
    return (
        <div className="vertical-container" style={props.style}>
            {props.children}    
        </div>
    );
}
export function VerticalScrollContainer(props) {
    return (
        <div className="vertical-scroll-container" style={props.style}>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export function HoverLightContainer(props) {
    return (
        <div className="hover-light-container">
            {props.children}
        </div>
    );
}
export function VerticalWidthAdjustment(props) {
    return (
        <div className="vertical-width-adjustment">
            {props.children}
        </div>
    );
}
export function HalfWidthVerticalWidthAdjustment(props) {
    return (
        <div className="half-width-vertical-width-adjustment">
            {props.children}
        </div>
    );
}
export function SkillTag(props) {
    return (
        <div className="skill-tag">
            <p>{props.title}</p>
        </div>
    );
}