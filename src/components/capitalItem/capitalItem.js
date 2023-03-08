const CapitalItem = props => {
  const {details, onChangeOption} = props
  const {id, capitalDisplayText} = details

  const onclick = () => onChangeOption(details)

  return (
    <option value={id} onChange={onclick}>
      {capitalDisplayText}
    </option>
  )
}

export default CapitalItem
