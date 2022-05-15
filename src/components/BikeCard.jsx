import styled from 'styled-components'
import { fromUnixTime, format } from 'date-fns'

const Card = styled.article`
  border: 3px solid black;
  border-radius: 10px;
  background-color: gainsboro;
  padding: 15px;
  display: grid;
  gap: 5px 20px;
  grid-template-areas:
    'pic title'
    'pic description'
    'pic info';
  grid-template-columns: 100px 1fr;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`
const Pic = styled.img`
  grid-area: pic;
`
const PicPlaceholder = styled.p`
  grid-area: pic;
  font-size: 75px;
`
const Title = styled.p`
  grid-area: title;
  font-weight: bold;
  font-size: 20px;
`
const Description = styled.p`
  grid-area: description;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`
const Info = styled.p`
  grid-area: info;
`

export function BikeCard({
  bike: { title, description, pic, date, location },
}) {
  return (
    <Card>
      {pic ? (
        <Pic src={pic} alt="bike" width="100" height="100" />
      ) : (
        <PicPlaceholder>&#128690;</PicPlaceholder>
      )}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <Info>
        {format(fromUnixTime(date), 'E MMM dd yyyy')} - {location}
      </Info>
    </Card>
  )
}
