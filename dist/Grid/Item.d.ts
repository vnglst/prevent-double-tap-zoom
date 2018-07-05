import * as React from 'react';
import './Item.css';
interface IItemProps {
    onMouseDown?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onTouchStart?: React.EventHandler<React.TouchEvent<HTMLElement>>;
    children: React.ReactNode;
    correct?: boolean;
    wrong?: boolean;
    almostCorrect?: boolean;
}
declare const Item: ({ children, correct, wrong, almostCorrect, ...other }: IItemProps) => JSX.Element;
export default Item;
