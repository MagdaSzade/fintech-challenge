import {css, injectGlobal} from 'emotion';
import {CSS_COLORS} from '../helpers/cssConsants';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    background-color: none;
    letter-spacing: 0.07em;
    box-sizing: border-box;
    font-size: 12px;
    color: ${CSS_COLORS.DETAILS};
  }
`;

export const componentBackgroundStyle = css({
    backgroundColor: CSS_COLORS.COMPONENT_BACKGROUND,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 500px)': {
        borderRadius: '0px',
    },
});
