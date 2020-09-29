import React from 'react'
import { render } from '@testing-library/react'
import { CardPreview } from './CardPreview'

it('Renders the expected name', () => {
    const expectedName = 'this is a test';
    const expectedIsbn = 'A.001.B001'
    const { getByText } = render(<CardPreview name={expectedName} isbn={expectedIsbn} />)
    expect(getByText(expectedName)).toBeInTheDocument();
});

