export interface RecipeDto {
  id: number;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  author: string;
  date: string;
}
