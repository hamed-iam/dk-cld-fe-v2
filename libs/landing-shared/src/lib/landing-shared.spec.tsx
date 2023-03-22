import { render } from '@testing-library/react';

import LandingShared from './landing-shared';

describe('LandingShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandingShared />);
    expect(baseElement).toBeTruthy();
  });
});
