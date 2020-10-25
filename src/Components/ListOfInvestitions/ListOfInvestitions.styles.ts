import {css} from 'emotion';
import {cssColors} from '../../helpers/cssConsants';

export const recordStyle = css({
    margin: '0.3rem auto',
    padding: '0.2rem',
    display: 'grid',
    gridTemplateColumns: ' 1fr 2fr 3fr 3fr 3fr',
    alignContent: 'center',
    justifyContent: 'space-between',
});

export const logoStyle = css({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: `1px solid ${cssColors.details}`,
    marginRight: '0.5rem',
});

export const recordContainerStyle = css({
    margin: '0.2rem auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    borderRadius: '5px',
    border: `1px solid ${cssColors.details}`,
});
