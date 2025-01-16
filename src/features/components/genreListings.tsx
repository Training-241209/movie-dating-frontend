import { Button } from "@/components/ui/button";
import { useAuth } from "../hooks/use-Auth";
import { useGetGenres } from "../hooks/use-getGenres";
import { Link, useRouter } from "@tanstack/react-router";

export function GenreListings() {
    const { data = [] } = useGetGenres();
    const router = useRouter();

    const { data: auth } = useAuth();
    console.log("genre", auth);

    function onClick(genreId: number, genreName: string) {
        console.log(genreId);
        router.navigate({
            to: `/movie/${genreId.toString()}/${genreName}`,
            params: { genreId: genreId.toString(), genreName },
          });
    }
    
    return (
        <div>
            <div className="absolute top-4 left-4">
                {auth?.favoriteGenre != null && (
                <Link to="/chat">
                    <Button>Back</Button>
                </Link>
                )}
            </div>
            <div className="text-4xl font-semibold text-center text-gray-800 mb-10">
                Please Select A Genre
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-5 mx-5">
                {data.map((item: any) => (
                    <div
                        key={item.id}
                        className="w-[300px] h-[350px] text-center flex flex-col items-center gap-4 bg-gray-500 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-black "
                    >
                        <a href={`/movie/${item.id}/${item.name}`} onClick={() => onClick(item.id, item.name)}>
                        <div className="flex flex-col items-center">
                            <img
                                className="w-44 h-44 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-70 mt-10"
                                src={`src/assets/NewGenrePics/${item.name}.png`}
                                alt={item.name}
                            />
                            <p className="text-4xl font-semibold text-white mb-2 ">{item.name}</p>
                        </div>    
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
