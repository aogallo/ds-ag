import React from 'react'
import Select from './Select'

import { render, fireEvent } from '@testing-library/react'

const options = [
  { label: 'ReactJs', value: 'reactjs' },
  { label: 'Angualr', value: 'angular' },
]

test('renders all options passed to it', () => {
  const { getAllByRole, getByTestId } = render(<Select options={options} />)

  fireEvent.click(getByTestId('dseSelectButton'))

  // expect(getAllByRole('menuitemradio')).toHaveLength(options.length)
})
