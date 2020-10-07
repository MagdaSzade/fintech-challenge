import {css} from 'emotion';

export const conteiner = css({
    display: 'grid',
    gridTemplateColumns: '8rem auto 1fr auto',
});

export const labelStyle = css({
    gridRow: 'span 2',
});

export const range = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.2rem',
});

export const slider = css({
    color: 'red',
});

export const value = css({
    gridColumn: 'span 3',
    border: 'none',
    textAlign: 'center',
});
