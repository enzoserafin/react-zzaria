import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  CardActionArea as MaterialActionArea,
  Divider as MaterialDivider,
  Grid,
  Typography
} from '@material-ui/core'

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: ${({ theme }) => theme.spacing(3)}px;
`
export const Divider = styled(MaterialDivider)`
  margin: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
`

export const CardActionArea = styled(MaterialActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`
export const Pizza = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  border-radius: 50%;
  display: flex;
  height: 200px;
  position: relative;
  justify-content: center;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    background: ${({ theme }) => theme.palette.grey.A100};
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
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  z-index: 1;
`
