import { type ReactElement } from 'react'
import {render, type RenderOptions} from '@testing-library/react'

const customRender = (ui: ReactElement, options?:Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}