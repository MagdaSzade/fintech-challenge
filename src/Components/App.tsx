import React from 'react';
import {Global, css} from '@emotion/core';

export const App = () => {
    return (
        <>
            <Global styles={globalStyle} />
            <h3 className="hover">hover me</h3>
        </>
    );
};

const globalStyle = css`
    body {
        font-family: 'Kreon', serif;
        background-color: var(--main-background-color);
        letter-spacing: 0.07em;
        font-size: 12px;
        --main-background-color: #001514;
        --background-color: #e9e7da;
        --main-detail-color: #001514;
        --hover-color: #373f27;
        --added-detail-color: #ffe400;
        color: var(--main-detail-color);
    }
    .flex {
        display: flex;
    }
    .grid {
        display: grid;
    }
    .focus {
        &:focus {
            outline: none;
            box-shadow: 0.5rem 0.5rem 1rem gold;
        }
    }
    .hover {
        &:hover {
            color: gold;
            border-color: gold;
            background-color: var(--main-detail-color);
        }
    }
`;
