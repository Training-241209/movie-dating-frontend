import { useAuth } from '@/features/hooks/use-Auth';
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
// import { GenreListings } from '@/features/components/genreListings';
// import { GenderCard } from '@/features/components/genderCard';
import { useEffect } from 'react';

export const Route = createLazyFileRoute('/_protected/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
    const router = useRouter();
    const { data: auth, refetch } = useAuth();
    console.log("dashboard", auth);
  
    useEffect(() => {
        if (auth) {
          refetch(); // Trigger a refetch if the auth data is incomplete or changed
        }
      }, [auth, refetch]);


    if(auth){

        if(auth.gender ==="" || auth.gender === null){
            router.navigate({to: '/genderSelection'})
        }
        else if (auth.favoriteGenre === null){
            router.navigate({to: '/genreSelection'})
        }
        else{
            router.navigate({ to: "/chat"});
        }
    }
  
    // Optionally, render a loading or fallback UI if `auth` is undefined or null
    return null;
  }
  