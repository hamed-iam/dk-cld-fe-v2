import { render } from '@testing-library/react';

import SharedUtilDataEntry from './shared-util-data-entry';

describe('SharedUtilDataEntry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUtilDataEntry />);
    expect(baseElement).toBeTruthy();
  });
});
