import {css} from 'emotion';

export const buttonStyles = css({
    minWidth: '7rem',
    padding: '0,3rem',
    margin: '0,3rem',
    backgroundColor: '#e9e7da',
    color: '#373f27',
    border: '1px solid #3f3f27',
    borderRadius: '10px',
    letterSpacing: '0.1rem',
    '&:hover': {
        color: 'gold',
        borderColor: 'gold',
    },
    '&:focus': {
        outline: 'none',
        boxShadow: '0.5rem 0.5rem 1rem black',
    },
});
