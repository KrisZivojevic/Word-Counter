import './Counter.css';

function Counter(props) {
  return (
    <div className="counter">
      <p>{props.label}:</p>
      <span>{props.value}</span>
    </div>
  )
}

export default Counter;