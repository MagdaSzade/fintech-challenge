import {css} from 'emotion';
import {cssColors} from '../../helpers/cssConsants';

export const headerStyle = css({
    padding: '0.5rem 2rem',
    color: cssColors.details,
    display: 'flex',
    justifyContent: 'space-between',
});

export const siteName = css({
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
});

export const navStyle = css({
    fontSize: '0.5rem',
    display: 'flex',
    alignItems: 'center',
});
