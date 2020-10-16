import {css} from 'emotion';
import {cssColors} from '../../helpers/cssConsants';

export const headerStyle = css({
    padding: '0.5rem 2rem',
    color: cssColors.details,
    display: 'flex',
    justifyContent: 'space-between',
});

export const logoStyle = css({
    display: 'flex',
    alignItems: 'center',
});

export const logoPStyle = css({
    fontSize: '1.5rem',
});
