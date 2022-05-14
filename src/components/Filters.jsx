import styled from 'styled-components'
import { Formik } from 'formik'

import { DateInput } from './DateInput'

const FiltersContainer = styled.div`
  display: flex;
`
const FormContainer = styled.form`
  display: flex;
`
const SearchInput = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid black;
  padding: 5px 10px;
  margin-right: 25px;
`
const DateInputWrapper = styled.div`
  margin-right: 25px;
`
const SubmitBtn = styled.button`
  padding: 5px 10px;
`

export function Filters(props) {
  return (
    <FiltersContainer style={props.style}>
      <Formik
        initialValues={{
          caseDescription: '',
          initialDate: '',
          finalDate: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submit', values)
          setSubmitting(false)
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <FormContainer onSubmit={handleSubmit}>
            <SearchInput
              type="text"
              name="caseDescription"
              placeholder="Search case descriptions"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.caseDescription}
            />

            <DateInputWrapper>
              <DateInput
                name="initialDate"
                placeholder="From"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.initialDate}
              />
            </DateInputWrapper>

            <DateInputWrapper>
              <DateInput
                name="finalDate"
                placeholder="To"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.finalDate}
              />
            </DateInputWrapper>

            <SubmitBtn type="submit" disabled={isSubmitting}>
              Find cases
            </SubmitBtn>
          </FormContainer>
        )}
      </Formik>
    </FiltersContainer>
  )
}
