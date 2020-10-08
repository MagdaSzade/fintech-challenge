import {css} from 'emotion';
import {cssColors} from '../../helpers/cssConsants';

export const conteiner = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '0.5rem',
    padding: '1rem',
    margin: '0.5rem',
});

export const displayValue = css({
    display: 'grid',
    gridTemplateRows: '1fr 4fr',
    gridGap: '0.5rem',
});

export const background = css({
    backgroundColor: cssColors.background,
    borderRadius: '10px',
    padding: '1rem',
});
