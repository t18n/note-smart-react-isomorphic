import React from 'react';

import { Heading } from 'src/Components/Typo';

const Maintenance = () => (
  <React.Fragment>
    <Heading as="h3">
      Thank you for visiting the web app :)
    </Heading>
    <form>
      <input type="text" placeholder="Email here" />
      <input type="submit" value="Submit" />
    </form>
  </React.Fragment>
);

export default Maintenance;
