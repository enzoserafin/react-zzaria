import styled from 'styled-components'
import { Divider as MaterialDivider, Grid, Paper, Typography } from '@material-ui/core'

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 3
})`
  padding: 20px;
`
export const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

export const PaperPizza = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`
export const Pizza = styled.div`
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  height: 200px;
  position: relative;
  justify-content: center;
  width: 200px;

  &::before,
  &::after {
    background: #ccc;
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after{
    height: 160px;
    width: 1px;
  }
`

export const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  align-items: center;
  background: #fff;
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  z-index: 1;
`
