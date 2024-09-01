import { ApiProvider } from 'api/react'
import { AuthProvider } from 'auth-components'
import { LangProvider } from 'i18n/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Screen } from '~/components/scaffolding/screen'
import { AuthBarrier } from './components/auth/auth-barrier'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApiProvider>
            <Screen>
                <AuthProvider>
                    <LangProvider>
                        <AuthBarrier>
                            <Hello />
                        </AuthBarrier>
                    </LangProvider>
                </AuthProvider>
            </Screen>
        </ApiProvider>
    </StrictMode>,
)

function Hello() {
    return <div className='bg-red-500 border-4 border-dashed h-full w-full p-4'>hello</div>
}
