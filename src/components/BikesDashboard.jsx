import styled from 'styled-components'

import { BikeCard } from './BikeCard'

const Dashboard = styled.div``
const TotalInfo = styled.p`
  text-align: right;
  margin-bottom: 15px;
`

export function BikesDashboard({ totalStolenBikes, bikes }) {
  return (
    <Dashboard>
      <TotalInfo>Total: {totalStolenBikes}</TotalInfo>
      {bikes.map((bike) => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </Dashboard>
  )
}
