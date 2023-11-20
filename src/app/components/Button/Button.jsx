import './style.scss'

function ButtonComponent({
  text,
  type = 'button',
  onClick = null,
  className = null,
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonComponent
