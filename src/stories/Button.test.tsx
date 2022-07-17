import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './Button.stories'

const { Large, Small } = composeStories(stories)

describe('Button', () => {
  it('should render correctly', () => {
    render(<Small />)

    screen.logTestingPlaygroundURL()
  })
})