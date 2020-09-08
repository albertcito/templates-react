import React from 'react';

import { ErrorFormat } from 'util/dataFormat/globalStateFormat';

export interface ErrorsProperties {
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
    <div className='errors-error'>
      {errors.map((error) => (
        <div key={error.message}>
          {error.message}
        </div>
      ))}
    </div>
  );
};

export default Errors;
