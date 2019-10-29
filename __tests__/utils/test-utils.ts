import { configure } from '@testing-library/dom'

// re-export everything
export * from '@testing-library/react'

configure({ testIdAttribute: 'dataTestId' });
