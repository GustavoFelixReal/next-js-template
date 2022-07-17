import { setGlobalConfig } from '@storybook/testing-react'

// import preview file as module, which contains global parameters and decorators
import * as globalStorybookConfig from '../.storybook/preview'

setGlobalConfig(globalStorybookConfig)
