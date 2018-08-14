import { connect } from "react-redux";

import css from '../static/style.scss';

class Index extends React.Component {
  static getInitialProps = async ({reduxStore, req, query: {lang}}) => {
    return {lang};
  }

  render  = () => {
    // console.log(this.props)
    return (
      <div className={css.example}>
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
