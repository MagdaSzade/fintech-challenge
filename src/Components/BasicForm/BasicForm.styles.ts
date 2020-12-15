import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/cssConsants';

export const formStyles = css({
    textAlign: 'center',
    input: {
        textAlign: 'right',
    },
});

export const labelStyle = css({
    display: 'block',
    paddingTop: '0.6rem',
});

export const inpuForSelectStyle = css({
    paddingBottom: '0.8rem',
});

export const inputStyle = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '0.3rem',
});

export const errorStyle = css({
    position: 'absolute',
    padding: '0.2rem',
    width: '200px',
    border: `1px solid ${CSS_COLORS.DETAILS}`,
    background: CSS_COLORS.COMPONENT_BACKGROUND,
    fontSize: '0.8rem',
    zIndex: 100,
});

export const formContainerStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '3rem 1fr',
});

export const titleStyle = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
