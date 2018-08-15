import isClient from './utils/isClient';

class ActiveLink extends React.Component {
  state = {
    href: this.props.href,
    className: undefined
  }

  isActive = () => {
    if(isClient()) {
      let location = window.location.pathname;
      let href;
      
      if(location[location.length -1] === '/') 
        location = location.substring(0, location.length -1);
      
      if(this.props.href[this.props.href.length -1] === '/')
        href = this.props.href.substring(0, this.props.href.length -1);
      else 
        href = this.props.href;
      
      return location === href
    }
  }

  createClassName = () => {
    return this.isActive()
      ? this.props.activeClassName
      : undefined;
  }

  componentDidMount = () => {
    const className = this.createClassName();
    if(className !== this.state.className){
      this.setState(prevState => {
        prevState.className = className;
        return prevState;
      });
    }
  } 

  render = () => {
    return (
      <a href={this.props.href} className={this.state.className}>
        {this.props.children}
      </a>
    );
  }
}

export default ActiveLink;