import { Markdown } from '@/components/demo/Markdown'
import { Card, CardContent } from '@/components/ui/card'
import { promises as fs } from 'fs'
import path from 'path'

export default async function Page() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center gap-12 py-8">
        <h1 className="text-2xl lg:text-6xl">🎉 Welcome to the Party 🥳</h1>
        <Readme />
      </div>
    </>
  )
}

const Readme = async () => {
  const p = path.join(process.cwd(), '/README.md')
  const readme = await fs.readFile(p, 'utf8')
  return (
    <>
      <Card className="max-w-full py-8">
        <CardContent>
          <Markdown className="break-words">{readme}</Markdown>
        </CardContent>
      </Card>
    </>
  )
}
