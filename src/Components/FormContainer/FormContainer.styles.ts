import {css} from 'emotion';

export const containerStyle = css({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '0.5rem',
    justifyItems: 'center',
    width: '95%',
    height: '86vh',
    margin: '0 auto',
    overflowY: 'auto',
    overflowX: 'hidden',
    '@media (max-width: 700px)': {
        width: '100%',
        height: '87vh',
    },
    '@media (max-width: 500px)': {
        gridTemplateColumns: '1fr',
        height: '88vh',
    },
});

export const graphStyle = css({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 500px)': {
        display: 'none',
    },
});

export const span2 = css({
    gridColumn: '1 / span 2',
    '@media (max-width: 500px)': {
        gridColumn: '1',
    },
});

export const flex = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
});
