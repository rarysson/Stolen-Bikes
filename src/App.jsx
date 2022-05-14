import styled from 'styled-components'

import { DepartmentHeader } from './components/DepartmentHeader'

const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 50px 0;
`

function App() {
  return (
    <Wrapper>
      <DepartmentHeader />
    </Wrapper>
  )
}

export default App
