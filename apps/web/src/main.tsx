import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/button'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='bg-red-500 border-4 border-dashed'>
            <Button variant="outline">Click ASD</Button>
        </div>
    </StrictMode>,
)
