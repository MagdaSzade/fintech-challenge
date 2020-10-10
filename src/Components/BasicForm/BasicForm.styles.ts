import {css} from 'emotion';

export const formStyles = css({
    textAlign: 'center',
    input: {
        textAlign: 'right',
    },
});

export const grid = css({
    width: '90%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    alignItems: 'center',
});

export const radioStyle = css({
    width: '80%',
    margin: '0.5rem auto !important',
    display: 'grid !important',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'left',
    '.MuiFormControlLabel-root': {
        margin: '0',
        height: '2rem',
    },
});

export const labelStyle = css({
    display: 'block',
    paddingTop: '0.4rem',
});
