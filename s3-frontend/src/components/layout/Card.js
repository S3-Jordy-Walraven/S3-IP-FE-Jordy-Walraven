import classes from "../..//css/Card.module.css";

function Card(props) {
  return <div className={classes.card} style={{ "backgroundColor": "#212D3A", color: "white", textShadow: "1px 1px 2px white" }}>{props.children}</div>;
}

export default Card;
