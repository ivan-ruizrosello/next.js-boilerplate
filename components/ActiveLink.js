import { withRouter } from 'next/router';

const ActiveLink = (props) => {
  const style = {
    marginRight: 10,
    color: props.router.asPath == props.href? 'red' : 'black'
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.router.push(props.href);
  }
  
  return ( 
    <a href={props.href} style={style}>
      {props.children}
    </a>
  )
}

export default withRouter(ActiveLink);