import React from "react";

import Theme from "../components/theme";

const SecondPage = () => (
  <Theme>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Theme>
);

export default SecondPage;
