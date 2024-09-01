import { useAuthContext, useSession } from 'auth-components'
import { AuthLoadingScreen } from './auth-loading-screen'
import { AuthScreen } from './auth-screen'

export type AuthBarrierProps = {
    children: React.ReactNode
}

export function AuthBarrier(props: AuthBarrierProps) {
    const context = useAuthContext()

    if (context.isPending) {
        return <AuthLoadingScreen />
    }

    if (!context.session) {
        return <AuthScreen />
    }

    return <>{props.children}</>
}
