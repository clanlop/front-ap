

const Link = ({to,title}) => {
  return (
    <a  className="btn" href={to} role="button">{title}</a>
  )
}

export default Link