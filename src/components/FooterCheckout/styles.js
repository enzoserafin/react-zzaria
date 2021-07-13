import styled from 'styled-components'

export const FooterContent = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-end'};
`
