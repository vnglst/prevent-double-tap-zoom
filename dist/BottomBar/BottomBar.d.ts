import * as React from 'react';
import './BottomBar.css';
import BottomBarItem from './BottomBarItem';
interface IBottomBarProps {
    children: React.ReactNode;
    value: string;
    onChange: any;
}
declare class BottomBar extends React.Component<IBottomBarProps, object> {
    static Item: typeof BottomBarItem;
    render(): JSX.Element;
    private generateChildren;
}
export default BottomBar;
