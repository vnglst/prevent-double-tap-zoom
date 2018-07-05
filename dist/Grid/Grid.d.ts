import * as React from 'react';
import './Grid.css';
import Item from './Item';
interface IGridProps {
    children: React.ReactNode;
}
declare class Grid extends React.Component<IGridProps, object> {
    static Item: typeof Item;
    render(): JSX.Element;
}
export default Grid;
