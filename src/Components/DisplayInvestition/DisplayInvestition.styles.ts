import {css} from 'emotion';

export const chartStyle = css({
    width: '98vw',
    position: 'relative',
    left: '16px',
    display: 'flex',
    paddingTop: '0.5rem',
    justifyContent: 'center',
    '.yAxis .recharts-cartesian-axis-tick:first-child': {
        display: 'none',
    },
});
