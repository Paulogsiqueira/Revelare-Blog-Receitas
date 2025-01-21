import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function CardAboutBlog() {
  return (
    <Card className="hover:shadow-xl transition-shadow p-4 bg-gray-100 border-2 border-green-400">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div>
            <CardTitle className="text-2xl text-slate-800">
              Blog Revelare
            </CardTitle>
            <CardDescription className="text-sm">
              Descubra o sabor da vida!
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <img src="/utils/cooking.jpg" className="max-w-[70%] sm:max-w-[50%] rounded-[3px] shadow-md mb-4"/>
        <p className="text-gray-700 mb-4">
          Bem-vindo ao <strong>Blog Revelare</strong>, seu destino para explorar
          receitas incríveis, dicas culinárias e histórias que inspiram. Nosso
          objetivo é tornar a culinária acessível, divertida e cheia de sabor!
        </p>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <strong>História:</strong> Tudo começou em uma pequena cozinha, onde
            a paixão por compartilhar receitas caseiras e dicas práticas se
            transformou em um sonho maior. Inspirado pelas memórias de infância,
            quando ajudava a avó a preparar pratos tradicionais, o fundador do
            Blog Revelare decidiu criar um espaço onde pudesse não apenas
            compartilhar suas experiências, mas também conectar pessoas através
            da culinária. A ideia era simples: tornar a cozinha um lugar
            acessível e acolhedor para todos, independentemente do nível de
            habilidade.
          </p>
          <p className="text-sm text-gray-600">
            Com o tempo, o blog cresceu e se tornou uma comunidade vibrante,
            repleta de entusiastas da gastronomia. Recebemos histórias incríveis
            de leitores que experimentaram nossas receitas em momentos
            especiais, como festas de família, jantares românticos ou até mesmo
            em suas primeiras aventuras na cozinha. Cada história compartilhada
            reforçou nossa missão de celebrar a diversidade gastronômica e
            mostrar que a culinária é uma linguagem universal, capaz de unir
            pessoas e culturas.
          </p>
          <p className="text-sm text-gray-600">
            Hoje, o Blog Revelare é mais do que um site de receitas; é um espaço
            de inspiração, aprendizado e conexão. Continuamos a explorar novos
            sabores, técnicas e tendências, sempre com o compromisso de oferecer
            conteúdo de qualidade e acessível. Nosso objetivo é que cada visita
            ao blog seja uma experiência enriquecedora, cheia de descobertas e,
            claro, muito sabor!
          </p>
          <p className="text-sm text-gray-600">
            <strong>Sugestões:</strong> Confira nossas receitas mais populares,
            como o <strong>Bolo de Chocolate</strong>, o{" "}
            <strong>Risoto de Cogumelos</strong> e o
            <strong> Frango Assado com Batatas</strong>.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Conteúdo:</strong> Aqui você encontra desde receitas simples
            até pratos sofisticados, além de tutoriais, dicas de ingredientes e
            muito mais.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">
          "A cozinha é o coração da casa, e queremos ajudar você a torná-la
          ainda mais especial."
        </p>
      </CardFooter>
    </Card>
  );
}
