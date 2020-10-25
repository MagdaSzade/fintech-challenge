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
