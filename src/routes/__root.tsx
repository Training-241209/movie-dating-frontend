import { Toaster } from '@/components/ui/sonner'
import QueryProvider from '@/providers/query-provider'
import { createRootRoute, Outlet} from '@tanstack/react-router'
import { StompSessionProvider } from 'react-stomp-hooks'


export const Route = createRootRoute({
  component: () => {

    return (

            
          <QueryProvider>
          <div className='min-h-screen bg-red-300 '>
            <Outlet />
            <Toaster />
          </div>
          </QueryProvider>

    )
  },
})
