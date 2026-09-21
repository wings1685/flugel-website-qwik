import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.png" />
		<link rel="apple-touch-icon" href="/favicon.png" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400&display=swap" />
        <RouterHead />
      </head>
      <body lang="ja">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
