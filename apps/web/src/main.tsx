import { ApiProvider, api } from 'api/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Screen } from '~/components/scaffolding/screen'
import { Button } from '~/components/ui/button'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApiProvider>
            <Screen>
                <Hello />
            </Screen>
        </ApiProvider>
    </StrictMode>,
)

function Hello() {
    const { data } = api.hello.useQuery()
    return (
        <div className='bg-red-500 border-4 border-dashed h-full w-full p-4'>
            <Button variant='outline'>{data}</Button>
            <input type='text' />
        </div>
    )
}
