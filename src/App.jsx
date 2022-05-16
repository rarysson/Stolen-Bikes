import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { BikesDashboard } from './components/BikesDashboard'
import { DepartmentHeader } from './components/DepartmentHeader'
import { Filters } from './components/Filters'
import { Pagination } from './components/Pagination'

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
  const [maxPages, setMaxPages] = useState(1)
  const [bikes, setBikes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTotalStolenBikes()
        setTotalStolenBikes(data)
        setMaxPages(Math.floor(totalStolenBikes / 10))
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
        const data = await fetchBikes(currentPage)
        setBikes(data)
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

    return <BikesDashboard totalStolenBikes={totalStolenBikes} bikes={bikes} />
  }

  return (
    <AppWrapper>
      <DepartmentHeader />
      <Filters style={{ marginTop: '25px', marginBottom: '25px' }} />
      <MainContent />
      {maxPages > 1 && (
        <Pagination
          currentPage={currentPage}
          maxPages={maxPages}
          style={{ marginTop: '25px' }}
          onPaginate={(page) => {
            setCurrentPage(page)
          }}
        />
      )}
    </AppWrapper>
  )
}

export default App
