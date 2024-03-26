import { useMousePosition } from './CustomHook';

export function FollowMouse() {
    const mousePosition = useMousePosition();
    let calcX = -(mousePosition.x - element.y - (element.height / 2))
    let rotateY = mousePosition.y - element.x - (element.width / 2)

    return (
        <></>
    );
}