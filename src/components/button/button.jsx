const Button = ({ className, content, fn }) => {
  return (
    <button className={className} onClick={() => fn(content)}>
      <h1>{content.payload}</h1>
    </button>
  )
}

export default Button
