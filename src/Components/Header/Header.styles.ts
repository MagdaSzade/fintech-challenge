import {css} from 'emotion';
import {cssColors} from '../../helpers/cssConsants';

export const headerStyle = css({
    padding: '2vh 2rem',
    color: cssColors.details,
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    height: '8vh',
    margin: '1vh auto',
    '@media (max-width: 700px)': {
        width: '100%',
    },
});

export const logoStyle = css({
    display: 'flex',
    alignItems: 'center',
});

export const logoPStyle = css({
    fontSize: '1.2rem',
    '@media (max-width: 300)': {
        fontSize: '0.8rem',
    },
});
