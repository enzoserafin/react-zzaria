import { withStyles } from '@material-ui/core'
import styled from 'styled-components'

export const Content = styled.main`
  padding: ${({ theme }) => theme.spacing(3)}px;;
`

const style = (theme) => ({
  main: theme.mixins.toolbar
})

export const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))
