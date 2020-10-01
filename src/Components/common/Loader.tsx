import React from 'react';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import {css} from 'emotion';

const flip = keyframes`
0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }`;

const Root: string = css({
    display: 'inline-block',
    transform: 'translateZ(1px)',
});

const Content: string = css({
    display: 'inline-block',
    width: '64px',
    height: '64px',
    margin: '8px',
    borderRadius: '50%',
    background: '#cda34f',
    animation: '${flip} 8.4s cubic-bezier(0, 0.2, 0.8, 1) infinite',
});

export const Loader: React.FC = () => {
    return (
        <>
            <Root>
                <Content />
            </Root>
        </>
    );
};
