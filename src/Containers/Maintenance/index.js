import React from 'react';

import Welcome from 'src/Components/Welcome';

const Maintenance = () => (
  <React.Fragment>
    <Welcome message="Thank you for visiting the web app :)" />
    <form>
      <input type="text" placeholder="Email here" />
      <input type="submit" value="Submit" />
    </form>
  </React.Fragment>
);

export default Maintenance;
