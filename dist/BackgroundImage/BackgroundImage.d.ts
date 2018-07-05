import * as React from 'react';
import './BackgroundImage.css';
interface IBackgroundImage {
    className?: string;
    imageSrc: any;
    children: React.ReactNode;
}
declare const BackgroundImage: ({ className, imageSrc, children, ...other }: IBackgroundImage) => JSX.Element;
export default BackgroundImage;
