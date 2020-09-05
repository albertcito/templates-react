import React from 'react';

import { ErrorFormat } from 'util/dataFormat/globalStateFormat';

interface ErrorProperties {
  error: ErrorFormat;
}
const Error: React.FC<ErrorProperties> = ({ error }) => <>{error.message}</>;

interface ErrorsProperties {
  errors: ErrorFormat[] | ErrorFormat;
}

const Errors: React.FC<ErrorsProperties> = ({ errors }) => {
  if (!Array.isArray(errors)) {
    if (errors.message) {
      return <>{errors.message}</>;
    }
    return <>{errors}</>;
  }

  return (
    <div>
      {errors.map((error, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <Error
            error={error}
          />
        </div>
      ))}
    </div>
  );
};

export default Errors;
