

function SectionTitle(props) {
  return (
    <h3>{props.text}</h3>
  )
}

export default SectionTitle

SectionTitle.defaultProps = {
    text: 'Text'
}