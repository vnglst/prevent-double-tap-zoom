import * as React from 'react';
import './Overlay.css';
interface IOverlayProps {
    children: React.ReactNode;
    className?: string;
}
declare class Overlay extends React.Component<IOverlayProps, object> {
    render(): JSX.Element;
}
export default Overlay;
