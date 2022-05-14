import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import DatePicker from 'react-datepicker'
import { forwardRef } from 'react'
import { format } from 'date-fns'

const CalendarContainer = styled.div`
  display: flex;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
`
const InputWrapper = styled.div`
  margin-right: 5px;

  .date-input {
    width: 100px;
    height: 30px;
    border-radius: 7px;
    border: 1px solid black;
    padding: 5px 10px;
  }
`

const CalendarBtn = forwardRef(({ _, onClick }, ref) => (
  <Button type="button" onClick={onClick} ref={ref}>
    &#128197;
  </Button>
))

export function DateInput(props) {
  return (
    <CalendarContainer>
      <InputWrapper>
        <NumberFormat
          className="date-input"
          name={props.name}
          format="##/##/####"
          placeholder={props.placeholder}
          mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.value}
        />
      </InputWrapper>

      <DatePicker
        customInput={<CalendarBtn />}
        onChange={(date) =>
          props.onChange({
            target: { name: props.name, value: format(date, 'dd/MM/yyyy') },
          })
        }
      />
    </CalendarContainer>
  )
}
