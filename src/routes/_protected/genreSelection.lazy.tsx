import { GenreListings } from '@/features/components/genreListings'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/genreSelection')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <GenreListings/>
    </div>
  )
    

}
