import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export function MovieTitle({genreName}:{genreName:string}){
    const vowels = ['a','e','i','o','u']
    if(vowels.includes(genreName[0].toLowerCase())){
        return(
            <div >
                <div className="absolute top-4 left-4">
                    <Link to = '/genreSelection'>
                    <Button>Back</Button>
                </Link>
                </div>
                
                <div className="text-4xl flex justify-center mb-10">
                    Please Select An {genreName} Movie
                </div> 
                
            </div>
            
    )}else{
        return(
            <div>
                <div className="text-4xl flex justify-center mb-10">
                    Please Select A {genreName} Movie
                </div> 
                <Link to = '/genreSelection'>
                    <Button>Back</Button>
                </Link>
            </div>
            
         )  
    }
    
    
}