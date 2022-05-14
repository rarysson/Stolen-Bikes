import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  font-weight: normal;
`
const Subtitle = styled.h2`
  font-size: 25px;
  font-weight: normal;
`

export function DepartmentHeader() {
  return (
    <header>
      <Title>Police Department of Berlin</Title>
      <Subtitle>Stolen bikes</Subtitle>
    </header>
  )
}
