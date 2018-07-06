import * as React from 'react';
interface IBackgroundImage {
    className?: string;
    imageSrc: string;
    children: React.ReactNode;
}
declare const BackgroundImage: ({ className, imageSrc, children, ...other }: IBackgroundImage) => JSX.Element;
export default BackgroundImage;
