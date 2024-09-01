import { api } from 'api/react'
import type { Session } from 'auth-helpers/models'
import { createContext, useContext, useEffect, useState } from 'react'

export type AuthContext = {
    session: Session | null
    isPending: boolean
    isError: boolean
    isUpdating: boolean
}

export type AuthProviderProps = {
    children: React.ReactNode
}

const authContext = createContext<AuthContext>({
    session: null,
    isError: false,
    isPending: false,
    isUpdating: false,
})

export function AuthProvider(props: AuthProviderProps) {
    const [savedSession, setSavedSession] = useState<Session | null>(null)

    const query = api.auth.currentUser.useQuery()

    const showLoading = !savedSession && query.isPending

    useEffect(() => {
        if (query.isFetched && query.data) {
            setSavedSession({
                user: query.data,
            })
        } else if (query.isFetched && !query.data) {
            setSavedSession(null)
        }
    }, [query.data, query.isFetched])

    return (
        <authContext.Provider
            value={{
                session: savedSession,
                isPending: showLoading,
                isUpdating: query.isLoading,
                isError: query.isPending && query.isError,
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(authContext)
}

export function useSession() {
    return useAuthContext().session
}

export function useUser() {
    return useSession()?.user
}
