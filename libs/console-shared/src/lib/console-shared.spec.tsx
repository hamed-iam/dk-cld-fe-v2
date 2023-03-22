import { render } from '@testing-library/react';

import ConsoleShared from './console-shared';

describe('ConsoleShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsoleShared />);
    expect(baseElement).toBeTruthy();
  });
});
