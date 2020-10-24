import {css, injectGlobal} from 'emotion';
import {cssColors} from '../helpers/cssConsants';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    background-color: none;
    letter-spacing: 0.07em;
    box-sizing: border-box;
    font-size: 12px;
    color: ${cssColors.details};
  }
`;
export const conteinerStyle = css({
    width: '100vw',
    height: '100vh',
    margin: '0',
    padding: '2vh',
    overflow: 'hidden',
    backgroundColor: cssColors.MAIN_BACKGROUND,
    '@media (max-width: 600px)': {
        padding: '0.5rem',
    },
});

export const contentConteinerStyle = css({
    width: '80%',
    maxWidth: '700px',
    height: '97vh',
    margin: '0px auto',
    border: `solid 1px ${cssColors.COMPONENT_BACKGROUND}`,
    borderRadius: '10px',
    owerflow: 'scroll',
    '@media (max-width: 700px)': {
        width: '100%',
        border: 'none',
    },
});

export const componentBackgroundStyle = css({
    backgroundColor: cssColors.COMPONENT_BACKGROUND,
    borderRadius: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 500px)': {
        borderRadius: '0px',
    },
});
