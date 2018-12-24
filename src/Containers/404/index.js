import React from 'react';
import { HttpStatus } from 'src/Components/SSR';

const NotFound404 = () => (
  <HttpStatus httpStatus={404}>
    <div>
      <h1>Oops, nothing here!</h1>
    </div>
  </HttpStatus>
);

export default NotFound404;
