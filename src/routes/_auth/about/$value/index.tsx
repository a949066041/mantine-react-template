import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/about/$value/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { value } = Route.useParams()
  return (
    <div>
      Hello "/about/
      { value }
      /"!
    </div>
  )
}
