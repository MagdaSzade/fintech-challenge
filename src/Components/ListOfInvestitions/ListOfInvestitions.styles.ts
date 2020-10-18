import {css} from 'emotion';
import {cssColors} from '../../helpers/cssConsants';

export const recordContainerStyle = css({
    width: '90%',
    margin: '0.3rem auto',
    padding: '0.2rem',
    borderRadius: '5px',
    border: `1px solid ${cssColors.details}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

export const logoStyle = css({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
});
