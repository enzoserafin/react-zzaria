import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card as MaterialCard,
  CardActionArea as MaterialActionArea,
  Divider as MaterialDivider,
  Grid,
  Typography
} from '@material-ui/core'

export const Content = styled.main`
flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;;
`

export const HeaderContent = styled.main`
  padding: 20px;
`

export const CardActionArea = styled(MaterialActionArea).attrs({
  component: Link
})`
  && {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-width: 250px;
    padding: 20px 0;
  }
`
export const Card = styled(MaterialCard)`
  && {
    border: 2px solid transparent;
    border-color: ${({ theme, checked }) => checked ? theme.palette.secondary.light : ''};
  }
`

export const Label = styled(CardActionArea).attrs({
  component: 'label'
})``

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

export const Divider = styled(MaterialDivider)`
  && {
    margin: ${({ theme }) => theme.spacing(3)}px;
    width: 100%;
  }
`

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

export const Img = styled.img`
  width: 200px;
`
