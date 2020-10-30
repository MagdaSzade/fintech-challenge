import {css} from 'emotion';

export const basketContainerStyle = css({
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '86vh',
    paddingTop: '1rem',
    overflow: 'scroll',
    '@media (max-width: 700px)': {
        height: '87vh',
    },
    '@media (max-width: 500px)': {
        height: '88vh',
    },
});

export const coverStyle = css({
    position: 'absolute',
    height: '86vh',
    '@media (max-width: 700px)': {
        height: '87vh',
    },
    '@media (max-width: 500px)': {
        height: '88vh',
    },
});
