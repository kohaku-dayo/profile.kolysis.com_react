import './sizingUnion.css';
export function TitlePlate(props) {
    return (
        <>
            <p className="title-plate-title">{props.title}</p>
            {props.subTitle ? <p className="title-plate-sub-title">{props.subTitle}</p> : <></>}
            {props.children}
        </>
    );
}