import { ApiProvider, api } from 'api/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from './components/ui/button'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApiProvider>
            <Hello />
        </ApiProvider>
    </StrictMode>,
)

function Hello() {
    const { data, isPending } = api.hello.useQuery()

    return (
        <div className='bg-red-500 border-4 border-dashed'>
            <Button variant='outline'>{data}</Button>
        </div>
    )
}
