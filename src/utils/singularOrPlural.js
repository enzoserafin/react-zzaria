const singularOrPlural = (amount, singularText, pluralText) => {
  return amount > 1 ? pluralText : singularText
}

export default singularOrPlural
