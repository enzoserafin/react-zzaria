import styled from 'styled-components'
import { withStyles } from '@material-ui/core'

export const Content = styled.main`
  padding: 20px;
`
const style = (theme) => ({
  main: theme.mixins.toolbar
})

export const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))
