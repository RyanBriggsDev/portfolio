

function SectionTitle(props) {
  return (
    <h3 className="section-title">{props.text}</h3>
  )
}

export default SectionTitle

SectionTitle.defaultProps = {
    text: 'Text'
}