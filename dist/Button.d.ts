import * as React from 'react';
import './Button.css';
interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}
declare const Button: ({ children, className, ...other }: IButtonProps) => JSX.Element;
export default Button;
