import ReactDOM from 'react-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';

const moment = require('moment');
console.log(moment().format());

ReactDOM.render(
  <Content>
    <Header name="i am is header!" />
    <Footer name ="i am is footer" />
  </Content>,
  document.getElementById('root')
);
