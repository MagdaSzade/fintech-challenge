import {css} from 'emotion';
import {cssColors} from '../../helpers/cssConsants';

export const containerStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '0.5rem',
    padding: '1rem',
    margin: '0.5rem',
    justifyItems: 'center',
});

export const backgroundStyle = css({
    width: '100%',
    backgroundColor: cssColors.background,
    borderRadius: '10px',
    padding: '1rem',
});

export const graphStyle = css({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gridColumn: '1 / span 2',
});

export const flex = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
});
