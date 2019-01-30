import React from 'react';
import { HttpStatus } from 'src/Components/Route';
import Head from 'src/Components/Head';

const NotFound404 = () => (
  <HttpStatus httpStatus={404}>
    <Head title="Not found" />
    <div>
      <h1>Oops, nothing here!</h1>
    </div>
  </HttpStatus>
);

export default NotFound404;
