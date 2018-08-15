import { connect } from "react-redux";
import Link from 'next/link';

import ActiveLink from "../components/ActiveLink";
import css from '../static/style.scss';

class Index extends React.Component {
  // getInitialProps has to be static
  static getInitialProps = async ({reduxStore, req, query: {lang}}) => {
    return {lang};
  }

  render  = () => {
    // console.log(this.props)
    return (
      <div className={css.example}>
        <Link href="/home" passHref>
          <ActiveLink activeClassName='is-active'>Home</ActiveLink>
        </Link>
        <Link href="/inicio/" passHref>
          <ActiveLink activeClassName='is-active'>Inicio</ActiveLink>
        </Link>
        <Link href="/" passHref>
          <ActiveLink activeClassName='is-active'>/</ActiveLink>
        </Link>

        <h1>Index</h1>
        <p>Estado de redux creado en: {this.props.isClient}</p>
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
