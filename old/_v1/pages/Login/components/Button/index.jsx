import "./styles.scss"

export default function ({ name, onClick }) {
  function _onClick(e) { if (typeof onClick == 'function') onClick(e) }
  return (
    <button className="button-1" role="button" onClick={_onClick}>{name}</button>
  )

}