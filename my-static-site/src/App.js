import React from "react";
import { Root, Routes, addPrefetchExcludes, Head } from "react-static";
import { Router } from "components/Router";
import Dynamic from "containers/Dynamic";

import "./css/bootstrap.min.css";
import "./app.css";

import favicon from "images/tabcar.png";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

//This is our top-level component
function App() {
  return (
    <Root>
      <Head>
        <link rel="shortcut icon" href={favicon} />
        <link
          href="https://fonts.googleapis.com/css?family=Acme&display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Jaldi&display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
}

export default App;
