const API_URL = 'https://bikeindex.org:443/api/v3/'
const DISTANCE = 50
const LOCATION = 'Berlin'

export async function fetchTotalStolenBikes() {
  const response = await fetch(
    `${API_URL}/search/count?location=${LOCATION}&distance=${DISTANCE}`
  )
  const data = await response.json()

  return data.proximity
}

export async function fetchBikes(page) {
  const response = await fetch(
    `${API_URL}/search?page=${page}&per_page=10&location=${LOCATION}&distance=${DISTANCE}&stolenness=proximity`
  )
  const data = await response.json()

  return data.bikes.map((bike) => ({
    id: bike.id,
    title: bike.title,
    description: bike.description,
    pic: bike.thumb,
    date: bike.date_stolen,
    location: bike.stolen_location,
  }))
}
