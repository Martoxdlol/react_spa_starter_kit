import { useSession } from 'auth-components'
import { createContext, useContext } from 'react'
import { type AppStringsKeys, type LangKeys, getLang, getString } from '../strings'

const langContext = createContext<LangKeys>(getLang(navigator.language))

export function LangProvider(props: { children: React.ReactNode }) {
    const session = useSession()

    const userLocale = session?.user.locale
    const lang = getLang(userLocale || navigator.language)

    return <langContext.Provider value={lang}>{props.children}</langContext.Provider>
}

export function useString(key: AppStringsKeys) {
    const lang = useContext(langContext)

    return getString(key, lang)
}
