import { useEffect, useState } from 'react'
import TextField from '../../components/TextField'
import t from 'prop-types'

const PhoneField = ({ onUpdate = () => { } }) => {
  const [phone, setPhone] = useState('')

  useEffect(() => {
    onUpdate(phone)
  }, [phone, onUpdate])

  function handleChangePhone(e) {
    setPhone(phoneMask(e.target.value))
  }

  function phoneMask(value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  return (
    <TextField
      label='Telefone'
      xs={4}
      value={phone}
      onChange={handleChangePhone}
    />
  )
}

PhoneField.propTypes = {
  onUpdate: t.func
}

export default PhoneField
