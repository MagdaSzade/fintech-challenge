import {injectGlobal} from 'emotion';
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
  .conteiner {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 2vh;
    overflow: hidden;
    background-image: url(./img/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content-conteiner {
    width: 80%;
    height: 95vh;
    margin: 0px auto;
    border: solid 1px ${cssColors.details};

  }
`;
