import { GenderCard } from '@/features/components/genderCard'
import { createLazyFileRoute } from '@tanstack/react-router'
export const Route = createLazyFileRoute('/_protected/genderSelection')({
  component: RouteComponent,
})

function RouteComponent() {

  return(
    <div>
        <GenderCard/>
    </div>
    
    )
}
