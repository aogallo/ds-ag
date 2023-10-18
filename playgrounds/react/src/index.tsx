import React from 'react'
import { createRoot } from 'react-dom/client'

import { Color, Margin, Select, Text } from '@ds.ag/react'

import '@ds.ag/scss/lib/Margin.css'
import '@ds.ag/scss/lib/Select.css'
import '@ds.ag/scss/lib/Text.css'
import '@ds.ag/scss/lib/Utilities.css'

const options = [
  { label: 'ReactJs', value: 'reactjs' },
  { label: 'Angualr', value: 'angular' },
]

const container = document.querySelector('#root')
const root = createRoot(container!)

root.render(
  <>
    {/* <Color hexCode='#000' height='xxxl' /> */}
    {/* <div> */}
    {/*   <Margin right space='xl'> */}
    {/*     <Text size='xl'>Test text</Text> */}
    {/*   </Margin> */}
    {/* </div> */}
    <Select options={options} />
    {/* <p>some text</p> */}
  </>,
)
