import styled from 'styled-components'
import { Divider as MaterialDivider, Paper, Typography } from '@material-ui/core'

export const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

export const PaperPizza = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
