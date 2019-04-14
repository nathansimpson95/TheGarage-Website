/** @jsx jsx */
import Link from "next/link";
import { jsx } from "@emotion/core";

import Theme from "../components/theme";

export default () => (
  <Theme>
    <div
      css={{
        maxWidth: 500,
        margin: "150px auto",
        textAlign: "center"
      }}
    >
      <h1>Thank you</h1>
      <p>
        You will be among the first to enter The Garage! Stay tuned for more
        info in your inbox in the coming weeks, and{" "}
        <a href="https://www.facebook.com/thegrgeapp">like us on Facebook!</a>
      </p>
      <Link href="/">Go home</Link>
    </div>
  </Theme>
);
