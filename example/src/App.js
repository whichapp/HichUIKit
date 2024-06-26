import React from 'react'

import 'hich-ui-kit/dist/index.css'
import { Typography } from 'hich-ui-kit'

const App = () => {
  return (
    <>
      <Typography>hte</Typography>
      <Typography wrapper='h1'>Heading 1</Typography>
      <Typography wrapper='h2'>Heading 2</Typography>
      <Typography wrapper='h3'>Heading 3</Typography>
      <Typography wrapper='h4'>Heading 4</Typography>
      <Typography wrapper='h5'>Heading 5</Typography>
      <Typography wrapper='h6'>Heading 6</Typography>
      <Typography wrapper='p'>Paragraph</Typography>
      <Typography wrapper='label'>Label</Typography>
      <Typography wrapper='div'>Division</Typography>
      <Typography wrapper='span'>Span</Typography>
      <Typography wrapper='ssss'>hte</Typography>
      <hr />
      <Typography id='aa' wrapper='h1' variant='h-title-xxxl'>
        Heading 1
      </Typography>
      <Typography
        onClick={() => console.log('111111111')}
        wrapper='h1'
        variant='h-title-xxl'
      >
        Heading 2
      </Typography>
      <Typography wrapper='h1' variant='h-title-xl'>
        Heading 3
      </Typography>
      <Typography wrapper='h1' variant='h-title-l'>
        Heading 4
      </Typography>
      <Typography wrapper='h1' variant='h-title-m'>
        Heading 5
      </Typography>
      <Typography wrapper='h1' variant='h-title-s'>
        Heading 1
      </Typography>
      <Typography wrapper='h1' variant='h-title-xs'>
        Heading 1
      </Typography>
      <hr />
      <Typography wrapper='h1' variant='h-body-l'>
        Body large
      </Typography>
      <Typography wrapper='h1' variant='h-body-m'>
        Body medium
      </Typography>
      <Typography wrapper='h1' variant='h-body-caption'>
        Body caption
      </Typography>
      <hr />
      <Typography wrapper='h1' variant='h-label-l'>
        Label large
      </Typography>
      <Typography wrapper='h1' variant='h-label-m'>
        Label medium
      </Typography>
      <Typography wrapper='h1' variant='h-label-s'>
        Label small
      </Typography>
      <Typography wrapper='h1' variant='h-label-tags'>
        Label tags
      </Typography>
      <Typography wrapper='h1' variant='h-label-xs'>
        Label extra small
      </Typography>
      <hr />
      <Typography wrapper='h1' variant='h-button-l'>
        Button large
      </Typography>
      <Typography wrapper='h1' variant='h-button-m'>
        Button medium
      </Typography>
      <Typography wrapper='h1' variant='h-button-s'>
        Button small
      </Typography>
      <Typography wrapper='h1' variant='h-button-xs'>
        Button extra small
      </Typography>
      <hr />
    </>
  )
}

export default App
