

const Link = ({to, title}) => {
  return (
    <a className="btn btn-light" href={to} role="button">{title}</a>
  )
}

export default Link