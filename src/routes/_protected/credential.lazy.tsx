import { createLazyFileRoute } from '@tanstack/react-router'
import { CredentialsCard } from '@/features/components/credentialsCard'
export const Route = createLazyFileRoute('/_protected/credential')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <CredentialsCard/>
    </div>
  )
}
