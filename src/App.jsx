import styled from 'styled-components'

import { DepartmentHeader } from './components/DepartmentHeader'
import { Filters } from './components/Filters'

const AppWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 50px 0;
`

function App() {
  return (
    <AppWrapper>
      <DepartmentHeader />
      <Filters style={{ marginTop: '25px' }} />
    </AppWrapper>
  )
}

export default App
