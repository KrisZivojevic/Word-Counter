import './Navigation.css';

function Navigation(props) {
  return (
    <div className="navigation">
      <p>Word counter</p>
      <button onClick={props.handleRefresh}>Refresh</button>
    </div>
  )
}

export default Navigation;