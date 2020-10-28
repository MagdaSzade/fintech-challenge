import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/cssConsants';

export const conteinerStyle = css({
    width: '100vw',
    height: '100vh',
    margin: '0',
    padding: '2vh',
    overflow: 'hidden',
    backgroundColor: CSS_COLORS.MAIN_BACKGROUND,
    '@media (max-width: 600px)': {
        padding: '0.5rem',
    },
});

export const contentConteinerStyle = css({
    width: '80%',
    maxWidth: '700px',
    height: '97vh',
    margin: '0px auto',
    border: `solid 1px ${CSS_COLORS.COMPONENT_BACKGROUND}`,
    borderRadius: '10px',
    owerflow: 'scroll',
    '@media (max-width: 700px)': {
        width: '100%',
        border: 'none',
    },
});
