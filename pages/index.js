import { connect } from "react-redux";
import Link from 'next/link';

import ActiveLink from "../components/ActiveLink";
import Nav from '../components/nav';
import css from '../static/style.scss';


import { I18nextProvider} from 'react-i18next';
import startI18n from '../tools/startI18n';
import { getTranslation } from '../tools/translationHelpers';

class Index extends React.Component {
  // getInitialProps has to be static
  static getInitialProps = async ({reduxStore, req, query: {lang}}) => {
    const translations = await getTranslation(
      lang,
      ['nav'],
      'http://localhost:3000/static/locales/'
    );
    // console.log(translations);
    return {lang, translations};
  }

  constructor(props) {
    super(props);

    this.i18n = startI18n(props.translations, props.lang);
  }

  render  = () => {
    console.log(this.props)
    return (
      <div className={css.example}>
        <I18nextProvider i18n={this.i18n}>
          <Nav />
        </I18nextProvider>
        <h1>Index</h1>
        <p>Estado de redux creado en: {this.props.isClient ? 'client' : 'server'}</p>
        <p>Ahora estamos en: {(typeof window !== 'undefined' && window.document) ? 'client' : 'server'}</p>
        <p>Props.lang (from next-pretty-url / express server): {this.props.lang}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isClient: state.isClient
  };
}

export default connect(mapStateToProps)(Index);
