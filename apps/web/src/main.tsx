import { ApiProvider, api } from 'api/react'
import { AuthProvider } from 'auth-components'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Screen } from '~/components/scaffolding/screen'
import { Button } from '~/components/ui/button'
import { AuthBarrier } from './components/auth/auth-barrier'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApiProvider>
            <Screen>
                <AuthProvider>
                    <AuthBarrier>
                        <Hello />
                    </AuthBarrier>
                </AuthProvider>
            </Screen>
        </ApiProvider>
    </StrictMode>,
)

function Hello() {
    return <div className='bg-red-500 border-4 border-dashed h-full w-full p-4'></div>
}
