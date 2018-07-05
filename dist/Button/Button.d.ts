import * as React from 'react';
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}
declare const Button: ({ children, className, ...other }: IButtonProps) => JSX.Element;
export default Button;
