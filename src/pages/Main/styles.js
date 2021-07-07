import { withStyles } from '@material-ui/core'

const style = (theme) => ({
  main: theme.mixins.toolbar
})

export const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))
