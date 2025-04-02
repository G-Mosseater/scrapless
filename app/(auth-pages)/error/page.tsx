import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default async function Page({ searchParams }: { searchParams: Promise<{ error: string }> }) {
  const params = await searchParams
  const router = useRouter()

  const handleRetry = () => {
    router.push('/auth/sign-in')  
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sorry, something went wrong.</CardTitle>
            </CardHeader>
            <CardContent>
              {params?.error ? (
                <p className="text-sm text-muted-foreground">Code error: {params.error}</p>
              ) : (
                <p className="text-sm text-muted-foreground">An unspecified error occurred. Please try again.</p>
              )}
              <div className="mt-4 flex justify-center gap-4">
                <button
                  onClick={handleRetry}
                  className="btn btn-primary"
                >
                  Try Again
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="btn btn-secondary"
                >
                  Go to Homepage
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
