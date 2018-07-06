import * as React from 'react'
import styled from 'styled-components'

interface IBackgroundImage {
  className?: string
  imageSrc: string
  children: React.ReactNode
}

const BackgroundImage = ({
  className,
  imageSrc,
  children,
  ...other
}: IBackgroundImage) => (
  <div>
    <ImageContainer className={className} imageSrc={imageSrc} {...other} />
    <ChildrenContainer>{children}</ChildrenContainer>
  </div>
)

const ImageContainer = styled.div`
  background-image: ${(props: { imageSrc: string }) =>
    `url(${props.imageSrc})`};
  background-size: cover;
  display: block;
  filter: blur(2px);
  height: 100%;
  left: 0;
  right: 0;
  position: fixed;
  transform: scale(
    1.1
  ); /* adds scaling to avoid white border on blurred image */
`

const ChildrenContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export default BackgroundImage
