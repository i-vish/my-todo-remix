import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import resetCss from "./reset.css"
import NavBar from "./components/ui/navbar";


export const links: LinksFunction = () => [
  {rel: "stylesheet", href: resetCss},
  { rel: "stylesheet", href: styles },
  {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"}
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col items-center">
        <div className="container mx-auto py-8 text-center prose">
        <h1 className="text-4xl font-bold text-blue-600">Todo App</h1>
        <div className="divider h-px bg-gray-300 my-4"></div>
          <NavBar />
          <Outlet />
        </div>
        <ScrollRestoration getKey={location => location.pathname}/>  {/*  default location.key (unique)  (pathname -> save scroll position by URL) */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
