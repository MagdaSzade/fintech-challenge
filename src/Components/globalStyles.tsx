import {injectGlobal} from 'emotion';

injectGlobal`
  * {
    background-color: black;
    letter-spacing: 0.07em;
    font-size: 12px;
    color: red;
  }
  .hover:hover {
    color: gold;
  }
`;
