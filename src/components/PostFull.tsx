import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { recipes } from "@/mocks/recipe";
import { ArrowBigLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export function PostFull() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleViewRecipesList = () => {
    navigate(`/`);
  };

  const recipeId = parseInt(id || "0", 10);

  const recipeFound = recipes.find((recipe) => recipe.id === recipeId);

  if (!recipeFound) {
    return <div>Receita não encontrada!</div>;
  }

  return (
    <Card className="hover:shadow-lg transition-shadow w-full bg-gray-100 border-2 border-green-400">
      <CardHeader>
        <div onClick={handleViewRecipesList} className="bg-green-400 w-8 h-8 flex justify-center items-center rounded-full mb-2 hover:bg-green-600 hover:cursor-pointer">
          <ArrowBigLeft className="w-6 text-white"/>
        </div>
        <CardTitle>
          <p>{recipeFound.title}</p>
        </CardTitle>
        <CardDescription>
          <p className="mb-2">
            Por {recipeFound.author} em {recipeFound.date}
          </p>
          <p className="py-1 px-2 inline rounded-full bg-gray-300 text-slate-700 text-sm font-semibold">
            {recipeFound.category}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-content w-full">
          <img
            className="max-w-[50%] rounded-[3px] shadow-md"
            src={recipeFound.image}
            alt={recipeFound.description}
          />
        </div>
        <p className="text-slate-700 font-semibold mt-4">
          {recipeFound.fullDescription}
        </p>
        <div>
          <p className="font-bold text-slate-900 mt-2 mb-1">Ingredientes:</p>
          <ul>
            {recipeFound.ingredients.map((ingredient, index) => (
              <li key={index} className="flex">
              <p className="flex my-auto w-1 h-1 mr-2 rounded-full bg-slate-900"></p>
              <p>{ingredient}</p>
            </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-slate-900 mt-4 mb-1">Modo de Preparo:</p>
          <ul>
            {recipeFound.instructions.map((instruction, index) => (
              <li key={index} className="flex">
                <p className="flex my-auto w-1 h-1 mr-2 rounded-full bg-slate-900"></p>
                <p>{instruction}</p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
