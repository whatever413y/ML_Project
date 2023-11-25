import { Background } from '@/components/common/background'
import { OceanClient } from '@/components/ocean/ocean-client'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container grid gap-10">
      <div className="grid gap-3 w-full pt-20">
        <h1 className="font-extrabold text-5xl text-center">
          It&apos;s so incredible to finally be understood.
        </h1>

        <p className="mx-auto w-1/2 text-center text-muted-foreground text-lg">
          Only 10 minutes to get a &quot;freakishly accurate&quot; description
          of who you are and why you do things the way you do
        </p>
      </div>

      <div className="flex justify-center w-full my-10">
        <Link href="/test">
          <Button size="lg">
            Take the test <ChevronRightIcon />
          </Button>
        </Link>
      </div>

      <div className="h-full grid grid-cols-5 gap-2 mt-20">
        <OceanClient />
      </div>
    </main>
  )
}
