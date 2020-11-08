import React from 'react';
import styled from 'styled-components';

export type ImgProps = {
  src: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  className?: string;
  over?: boolean;
  border?: boolean;
  alt: string;
  cover?: boolean;
} & React.HTMLAttributes<HTMLImageElement>;

function Img(props) {
  return <_Img {...props} />;
}

const _Img = styled.img<ImgProps>`
  box-sizing: border-box;
  ${({ width, circle, over, height, border, cover = false }) => `
    width: ${width || '100%'};
    height: ${over ? 'auto' : height || '100%'};
    max-height: ${over ? height || '100%' : 'auto'};

    border : ${border && '0.1rem solid #f0f0f0'};
    border-radius: ${circle ? '50%' : 9};

    object-fit: ${over || cover ? 'cover' : undefined};
    object-position: ${over && 'top'};
    overflow: ${over && 'hidden'};
  `}
`;

export default React.memo(Img);
