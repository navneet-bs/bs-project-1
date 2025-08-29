export default function Navlink({href, label}) {
  return (
    <a href={href} className="header-navlink px-3 py-2">{label}</a>
  )
}
