
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RecipeDto } from "@/dto/recipesDto";
import { useNavigate } from "react-router-dom";

interface PostDto {
  post: RecipeDto;
}

export function Post({ post }: PostDto) {
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    navigate(`/receita/${post.id}`);
  };
  
  return (
    <Card className="hover:shadow-lg transition-shadow w-full sm:w-[48%] mb-4">
      <CardHeader>
        <CardTitle>
          <p>{post.title}</p>
        </CardTitle>
        <CardDescription>
          <p className="mb-2">
            Por {post.author} em {post.date}
          </p>
          <p className="py-1 px-2 inline rounded-full bg-gray-300 text-slate-700 text-sm font-semibold">
            {post.category}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-content w-full">
          <img
            className="max-w-[70%] sm:max-w-[50%] rounded-[3px] shadow-md"
            src={post.image}
            alt={post.description}
          />
        </div>
        <p className="text-slate-700 font-semibold mt-4">{post.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleViewRecipe}
          className="w-full bg-green-500 font-bold text-md text-white hover:bg-green-600"
        >
          Ver Receita
        </Button>
      </CardFooter>
    </Card>
  );
}
