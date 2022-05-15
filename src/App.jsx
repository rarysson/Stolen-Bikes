import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { BikesDashboard } from './components/BikesDashboard'
import { DepartmentHeader } from './components/DepartmentHeader'
import { Filters } from './components/Filters'

import { fetchTotalStolenBikes, fetchBikes } from './services/fetch'

const AppWrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 50px 0;
`
const ErrorMessage = styled.p`
  color: red;
`

function App() {
  const [totalStolenBikes, setTotalStolenBikes] = useState(0)
  const [bikes, setBikes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setTotalStolenBikes(await fetchTotalStolenBikes())
      } catch (e) {
        setHasError(true)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        setBikes(await fetchBikes(currentPage))
      } catch (e) {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [currentPage])

  function MainContent() {
    if (hasError) {
      return <ErrorMessage>Ooops, something went wrong</ErrorMessage>
    }

    if (isLoading) {
      return <p>Loading ...</p>
    }

    if (!bikes.length) {
      return <p>No results</p>
    }

    return (
      <BikesDashboard
        totalStolenBikes={totalStolenBikes}
        bikes={bikes}
        onPaginate={(page) => {
          setCurrentPage(page)
        }}
      />
    )
  }

  return (
    <AppWrapper>
      <DepartmentHeader />
      <Filters style={{ marginTop: '25px', marginBottom: '25px' }} />
      <MainContent />
    </AppWrapper>
  )
}

export default App
