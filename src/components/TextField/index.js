import t from 'prop-types'
import { MaterialTextField } from './styles'
import { Grid } from '@material-ui/core'

const TextField = ({ xs, autoFocus, ...props }) => {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        variant='outlined'
        inputProps={{
          autoFocus
        }}
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  autoFocus: t.bool,
  xs: t.number
}

export default TextField
