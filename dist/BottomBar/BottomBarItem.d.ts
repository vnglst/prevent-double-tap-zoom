import * as React from 'react';
import './BottomBarItem.css';
interface IBottomBarItemProps {
    value: string;
    onChange?: any;
    selected?: boolean;
    icon: React.ReactNode;
    label?: string;
}
declare const BottomBarItem: ({ value, label, onChange, icon, selected, }: IBottomBarItemProps) => JSX.Element;
export default BottomBarItem;
