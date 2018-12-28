import React from 'react';
import { HttpStatus } from 'src/Components/SSR';
import Head from 'src/Components/Head';
import Footer from 'src/Components/Footer';

const NotFound404 = () => (
  <HttpStatus httpStatus={404}>
    <Head title="Not found" />
    <div>
      <h1>Oops, nothing here!</h1>
    </div>
    <Footer />
  </HttpStatus>
);

export default NotFound404;
