import { renderToStream } from 'solid-js/web'
import App from './App'
import { Document } from './document'

export function render() {
  return renderToStream(() => (
    <Document>
      <App />
    </Document>
  ));
}
