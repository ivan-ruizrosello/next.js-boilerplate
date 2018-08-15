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
        <Link>
          <ActiveLink href="/home">Home</ActiveLink>
        </Link>
        <Link>
          <ActiveLink href="/inicio">Inicio</ActiveLink>
        </Link>
        <Link>
          <ActiveLink href="/">/</ActiveLink>
        </Link>
        
        <h1>Index</h1>
        <p>Estado creado en: {this.props.isClient}</p>
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
