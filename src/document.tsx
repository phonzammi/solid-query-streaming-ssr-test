/* @refresh skip */
import { JSX } from "solid-js";
import { HydrationScript, ssr } from "solid-js/web";

const docType = ssr("<!DOCTYPE html>");

export function Document(props: { children?: JSX.Element }) {
    return (
        <>
            {docType}
            <html lang="en">
                <head>
                    <title>Solid SSR</title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/src/index.css" />
                    <HydrationScript />
                </head>
                <body>
                    <div id="app">
                        {props.children}
                    </div>
                    <script type="module" src="/src/entry-client.tsx" async></script>
                </body>
            </html>
        </>
    );
};