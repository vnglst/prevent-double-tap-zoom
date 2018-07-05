import * as React from 'react';
import './Input.css';
interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    valid?: boolean;
}
declare const Input: ({ className, valid, ...other }: IInputProps) => JSX.Element;
export default Input;
