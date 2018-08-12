import { connect } from "react-redux";

import css from '../static/style.scss';

class Index extends React.Component {
  render  = () => {
    return (
      <div className={css.example}>
        <h1>Index</h1>
        <p>Estado creado en: {this.props.isClient}</p>
        <p>Ahora estamos en: {(typeof window !== 'undefined' && window.document) ? 'client' : 'server'}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isClient: state.data.isClient
  };
}

export default connect(mapStateToProps)(Index);
