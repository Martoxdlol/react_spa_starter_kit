export type User = {
    id: string
    name: string
    picture: string | null
}

export type Session = {
    user: User
}

export interface GitHubUser {
    id: number
    login: string
    avatar_url: string
    email: string | null
}

export interface GoogleUser {
    sub: string
    name: string
    given_name: string
    family_name: string
    picture: string
    email: string
    email_verified: boolean
}
