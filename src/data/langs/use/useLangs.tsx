import React from 'react';

import { PaginationArgumentsOptional, PaginationClass } from 'data/pagination/classes/PaginationClass';
import { LangFormat } from '../type';
import paginationRequest from 'util/dataFormat/paginationRequest';
import LangsApi from '../queries/langs/api';
import { PaginationDataFormat, ErrorFormat } from 'util/dataFormat/serverDataFormat';
import { StatusFormat } from 'util/dataFormat/globalStateFormat';

function useLangs(
  parameters: PaginationArgumentsOptional = {},
  orderBy = 'lang.lang.lang_id',
) {
  const pagination = React.useRef(new PaginationClass(
    orderBy,
    parameters,
  )).current;

  const [data, setData] = React.useState<PaginationDataFormat<LangFormat[]>>();
  const [status, setStatus] = React.useState<StatusFormat>({
    submit: false,
    loaded: false,
  });

  const getData = React.useCallback(() => {
    const langsApi = new LangsApi();
    paginationRequest(
      () => {
        setStatus((currentStatus) => ({ ...currentStatus, submit: true }));
        return langsApi.all(pagination.get());
      },
      (response: PaginationDataFormat<LangFormat[]>) => setData(response),
      (errors: ErrorFormat) => setStatus((currentStatus) => ({ ...currentStatus, ...errors })),
      () => setStatus((currentStatus) => ({ ...currentStatus, submit: false, loaded: true })),
    );
  }, [pagination]);

  return {
    pagination,
    getData,
    data,
    status,
  };
}

export default useLangs;
