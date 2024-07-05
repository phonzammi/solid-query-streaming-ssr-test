import { Suspense } from 'solid-js'
import solidLogo from './assets/solid.svg'
import './App.css'
import MovieList from './components/MovieList'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'
import { Counter } from './components/Counter'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 5000,
        refetchIntervalInBackground: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <SolidQueryDevtools />
      <div class="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://www.solidjs.com" target="_blank">
            <img src={solidLogo} class="logo solid" alt="Solid logo" />
          </a>
        </div>
        <h1>Vite + Solid</h1>
        <div class="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <Counter />
          <Suspense>
            <MovieList />
          </Suspense>
        </div>
        <p class="read-the-docs">
          Click on the Vite and Solid logos to learn more
        </p>
      </div>
    </QueryClientProvider>


  )
}

export default App
