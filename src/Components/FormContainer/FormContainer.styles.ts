import {css} from 'emotion';
import {cssColors} from '../../helpers/cssConsants';

export const containerStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '0.5rem',
    padding: '1rem',
    margin: '0.5rem',
});

export const displayValueStyle = css({
    display: 'grid',
    gridTemplateRows: '1fr 4fr',
    gridGap: '0.5rem',
});

export const backgroundStyle = css({
    backgroundColor: cssColors.background,
    borderRadius: '10px',
    padding: '1rem',
});
