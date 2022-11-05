import './Text.css';

function Text(props) {
  return (
    <textarea className="textarea" cols={50} rows={10} placeholder="Type your text here..." onChange={props.handleTextarea} value={props.content}></textarea>
  )
}

export default Text;