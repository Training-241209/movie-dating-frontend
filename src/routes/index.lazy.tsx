import { useAuth } from '@/features/hooks/use-Auth';
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {

    const { data: auth } =  useAuth();

    const router = useRouter();

    useEffect(() => {
      if (auth) {
        console.log("auth", auth);
        router.navigate({ to: "/dashboard"});
      }
      else{
        console.log("no auth");
        router.navigate({ to: "/auth/login"});
      }
    });
}