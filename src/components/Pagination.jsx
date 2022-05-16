import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const NavBtn = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:focus {
    background-color: gray;
  }

  &.selected {
    background-color: silver;
  }
`

export function Pagination({ maxPages, currentPage, style, onPaginate }) {
  function paginate(nav) {
    if (nav === 'first') {
      onPaginate(1)
    } else if (nav === 'last') {
      onPaginate(maxPages)
    } else if (nav === 'next' && currentPage < maxPages) {
      onPaginate(currentPage + 1)
    } else if (nav === 'prev' && currentPage > 1) {
      onPaginate(currentPage - 1)
    } else if (typeof nav === 'number' && nav !== currentPage) {
      onPaginate(nav)
    }
  }

  return (
    <Container style={style}>
      <NavBtn
        onClick={() => {
          paginate('first')
        }}
      >
        &lt;&lt; First
      </NavBtn>

      <NavBtn
        onClick={() => {
          paginate('prev')
        }}
      >
        &lt; Prev
      </NavBtn>

      {[...Array(maxPages)].map((_, index) => (
        <NavBtn
          key={index}
          onClick={() => {
            paginate(index + 1)
          }}
          className={currentPage === index + 1 ? 'selected' : ''}
        >
          {index + 1}
        </NavBtn>
      ))}

      <NavBtn
        onClick={() => {
          paginate('next')
        }}
      >
        Next &gt;
      </NavBtn>

      <NavBtn
        onClick={() => {
          paginate('last')
        }}
      >
        Last &gt;&gt;
      </NavBtn>
    </Container>
  )
}
