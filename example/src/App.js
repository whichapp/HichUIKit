import React, { useState } from 'react'

import 'hich-ui-kit/dist/index.css'
import {
  Typography,
  ThemePallete,
  HichSwitch,
  ButtonBrand,
  ButtonPrimary,
  ButtonSubtle,
  ButtonPlain,
  ButtonPlainSecondary,
  ButtonOutlined
} from 'hich-ui-kit'

const App = () => {
  const [switch1, setSwitch1] = useState(false)
  const [switch2, setSwitch2] = useState(false)

  return (
    <>
      <section style={{ display: 'flex' }}>
        <ThemePallete
          wrapper='aside'
          style={{ flexGrow: '1', padding: '20px' }}
        >
          <div>
            <div style={{marginBottom: 10}}>
              <ButtonBrand size='small'>Small</ButtonBrand>
              <ButtonBrand size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonBrand>
              <ButtonBrand size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonBrand>
              <ButtonBrand disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonBrand>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonPrimary size='small'>Small</ButtonPrimary>
              <ButtonPrimary size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonPrimary>
              <ButtonPrimary size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonPrimary>
              <ButtonPrimary disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonPrimary>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonSubtle size='small'>Small</ButtonSubtle>
              <ButtonSubtle size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonSubtle>
              <ButtonSubtle size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonSubtle>
              <ButtonSubtle disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonSubtle>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonPlain size='small'>Small</ButtonPlain>
              <ButtonPlain size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonPlain>
              <ButtonPlain size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonPlain>
              <ButtonPlain disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonPlain>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonPlainSecondary size='small'>Small</ButtonPlainSecondary>
              <ButtonPlainSecondary
                size='medium'
                style={{ marginLeft: '15px' }}
              >
                Medium(Default)
              </ButtonPlainSecondary>
              <ButtonPlainSecondary size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonPlainSecondary>
              <ButtonPlainSecondary
                disabled={true}
                style={{ marginLeft: '15px' }}
              >
                Medium - Disabled
              </ButtonPlainSecondary>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonOutlined size='small'>Small</ButtonOutlined>
              <ButtonOutlined size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonOutlined>
              <ButtonOutlined size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonOutlined>
              <ButtonOutlined disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonOutlined>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonOutlined
                size='small'
                iconLeft='plus-normal'
                iconRight='arrow-right-normal'
              >
                Small
              </ButtonOutlined>
              <ButtonOutlined
                size='medium'
                iconLeft='plus-normal'
                iconRight='arrow-right-normal'
                style={{ marginLeft: '15px' }}
              >
                Medium(Default)
              </ButtonOutlined>
              <ButtonOutlined
                size='large'
                iconLeft='plus-normal'
                iconRight='arrow-right-normal'
                style={{ marginLeft: '15px' }}
              >
                Large
              </ButtonOutlined>
              <ButtonOutlined
                size='large'
                iconLeft='plus-normal'
                style={{ marginLeft: '15px' }}
              />
              <ButtonOutlined
                disabled={true}
                iconLeft='plus-normal'
                iconRight='arrow-right-normal'
                style={{ marginLeft: '15px' }}
              >
                Medium - Disabled
              </ButtonOutlined>
            </div>
          </div>
          <div>
            <HichSwitch
              checked={switch1}
              onChange={() => setSwitch1((state) => !state)}
            />
            <HichSwitch disabled={true} checked={false} />
            <HichSwitch disabled={true} checked={true} />
          </div>
          <div>
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
            <ThemePallete wrapper='div' theme='dark'>
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
            </ThemePallete>
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
          </div>
        </ThemePallete>
        <ThemePallete
          theme='dark'
          wrapper='aside'
          style={{ flexGrow: 1, padding: '20px' }}
        >
          <div>
            <div style={{marginBottom: 10}}>
              <ButtonBrand size='small'>Small</ButtonBrand>
              <ButtonBrand size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonBrand>
              <ButtonBrand size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonBrand>
              <ButtonBrand disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonBrand>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonPrimary size='small'>Small</ButtonPrimary>
              <ButtonPrimary size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonPrimary>
              <ButtonPrimary size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonPrimary>
              <ButtonPrimary disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonPrimary>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonSubtle size='small'>Small</ButtonSubtle>
              <ButtonSubtle size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonSubtle>
              <ButtonSubtle size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonSubtle>
              <ButtonSubtle disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonSubtle>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonPlain size='small'>Small</ButtonPlain>
              <ButtonPlain size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonPlain>
              <ButtonPlain size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonPlain>
              <ButtonPlain disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonPlain>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonPlainSecondary size='small'>Small</ButtonPlainSecondary>
              <ButtonPlainSecondary
                size='medium'
                style={{ marginLeft: '15px' }}
              >
                Medium(Default)
              </ButtonPlainSecondary>
              <ButtonPlainSecondary size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonPlainSecondary>
              <ButtonPlainSecondary
                disabled={true}
                style={{ marginLeft: '15px' }}
              >
                Medium - Disabled
              </ButtonPlainSecondary>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonOutlined size='small'>Small</ButtonOutlined>
              <ButtonOutlined size='medium' style={{ marginLeft: '15px' }}>
                Medium(Default)
              </ButtonOutlined>
              <ButtonOutlined size='large' style={{ marginLeft: '15px' }}>
                Large
              </ButtonOutlined>
              <ButtonOutlined disabled={true} style={{ marginLeft: '15px' }}>
                Medium - Disabled
              </ButtonOutlined>
            </div>
            <div style={{marginBottom: 10}}>
              <ButtonOutlined
                size='small'
                iconLeft='plus-bold'
                iconRight='arrow-right-normal'
              >
                Small
              </ButtonOutlined>
              <ButtonOutlined
                size='medium'
                iconLeft='plus-normal'
                iconRight='arrow-right-normal'
                style={{ marginLeft: '15px' }}
              >
                Medium(Default)
              </ButtonOutlined>
              <ButtonOutlined
                size='large'
                iconLeft='plus-normal'
                iconRight='arrow-right-normal'
                style={{ marginLeft: '15px' }}
              >
                Large
              </ButtonOutlined>
              <ButtonOutlined
                size='large'
                iconLeft='plus-normal'
                style={{ marginLeft: '15px' }}
              />
              <ButtonOutlined
                disabled={true}
                iconLeft='plus-normal'
                iconRight='arrow-right-normal'
                style={{ marginLeft: '15px' }}
              >
                Medium - Disabled
              </ButtonOutlined>
            </div>
          </div>
          <div>
            <HichSwitch
              checked={switch2}
              onChange={() => setSwitch2((state) => !state)}
            />
            <HichSwitch disabled={true} checked={false} />
            <HichSwitch disabled={true} checked={true} />
          </div>
          <div>
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
            <ThemePallete wrapper='div'>
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
            </ThemePallete>
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
          </div>
        </ThemePallete>
      </section>
    </>
  )
}

export default App
