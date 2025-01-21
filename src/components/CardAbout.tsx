import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function CardAbout() {
  return (
    <Card className="hover:shadow-xl min-h-auto transition-shadow p-4 bg-gray-100 border-2 border-green-400">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 relative rounded-full overflow-hidden">
            <img
              src="/about/perfil.jpeg"
              alt="Foto do dono do blog"
              className="object-cover"
            />
          </div>
          <div>
            <CardTitle className="text-2xl">Paulo Gustavo</CardTitle>
            <CardDescription className="text-sm">27 anos</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Apaixonado por cozinha desde criança, Paulo adora experimentar novas
          receitas e compartilhar suas criações com o mundo. Para ele, cozinhar é
          uma forma de expressão e conexão com as pessoas.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <strong>Hobbies:</strong> Cozinhar, fotografar pratos, viajar para
            descobrir novos sabores.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">
          "Cozinhar é a minha maneira de espalhar amor e alegria."
        </p>
      </CardFooter>
    </Card>
  );
}