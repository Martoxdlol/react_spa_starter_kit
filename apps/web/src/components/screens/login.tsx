import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { GoogleIcon } from '../icons/google'
import { MicrosoftIcon } from '../icons/microsoft'
import Center from '../scaffolding/center'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function LoginScreen() {
    return (
        <Center>
            <Card className='w-full max-w-md'>
                <CardHeader className='space-y-1'>
                    <CardTitle className='text-2xl font-bold text-center'>Welcome back</CardTitle>
                    <CardDescription className='text-center'>Login with your social account</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col space-y-4'>
                    <a href='/api/auth/login/google'>
                        <Button onClick={() => undefined} className='w-full' variant='outline'>
                            <GoogleIcon />
                            Login with Google
                        </Button>
                    </a>
                    <a href='/api/auth/login/github'>
                        <Button onClick={() => undefined} className='w-full' variant='outline'>
                            <GitHubLogoIcon className='w-5 h-5 mr-2' />
                            Login with GitHub
                        </Button>
                    </a>
                    <a href='/api/auth/login/microsoft'>
                        <Button onClick={() => undefined} className='w-full' variant='outline'>
                            <MicrosoftIcon />
                            Login with Microsoft
                        </Button>
                    </a>
                </CardContent>
            </Card>{' '}
        </Center>
    )
}
