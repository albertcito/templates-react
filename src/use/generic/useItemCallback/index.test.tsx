import React from 'react';
import { render, act } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';

import useItemCallback from '.';
import delay from 'test/util/delay';

interface BaseDataProperties {
  email: string;
  name: string;
}
const baseData = {
  email: 'me@albertcito.com',
  name: 'Albert Tjornehoj',
};
const onRemove = () => delay<BaseDataProperties>(100, baseData);

const RenderHook: React.FC = () => {
  const [data, setData] = React.useState<BaseDataProperties>();
  const { removeItem } = useItemCallback<BaseDataProperties>();
  React.useEffect(() => {
    removeItem({
      onRemove,
      key: baseData.email,
      onSuccess: setData,
    });
  }, [removeItem]);

  if (!data) {
    return <span>loading...</span>;
  }
  return <div>{baseData.name}</div>;
};

describe('useItemCallback Test', () => {
  it('shows an div loading', () => {
    const { getByText } = render(<RenderHook />);
    const loading = getByText(/loading.../i);
    expect(loading).toBeInTheDocument();
  });

  it('shows the data loaded', async () => {
    await act(async () => {
      const container = render(<RenderHook />);
      await waitFor(() => expect(container.getByText(baseData.name)).toBeInTheDocument());
    });
  });
});
