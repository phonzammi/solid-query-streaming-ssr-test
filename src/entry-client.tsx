/* @refresh reload */
import './index.css'
import { hydrate } from 'solid-js/web'
import App from './App'
import { Document } from './document';

hydrate(() => (
    <Document>
        <App />
    </Document>
), document);
