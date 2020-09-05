import React from 'react';
import { render, act } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';

import useStatusData from '.';
import delay from 'test/util/delay';

interface BaseDataProperties {
  name: string;
}
const name = 'albert tjornehoj';
const getAll = () => delay<BaseDataProperties>(100, ({ name }));

const RenderHook: React.FC = () => {
  const [data, setData] = React.useState<BaseDataProperties>();
  const { getData } = useStatusData<BaseDataProperties>();
  React.useEffect(() => {
    getData({
      getAll,
      onSuccess: setData,
    });
  }, [getData]);

  if (!data) {
    return <div>loading...</div>;
  }
  return <span>{data.name}</span>;
};

describe('useStatusData Test', () => {
  it('shows an div loading', () => {
    const { getByText } = render(<RenderHook />);
    const loading = getByText(/loading.../i);
    expect(loading).toBeInTheDocument();
  });

  it('shows the data loaded', async () => {
    await act(async () => {
      const container = render(<RenderHook />);
      await waitFor(() => expect(container.getByText(name)).toBeInTheDocument());
    });
  });
});
