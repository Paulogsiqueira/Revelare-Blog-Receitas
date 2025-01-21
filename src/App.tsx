import { recipes } from "./mocks/recipe";
import { PostList } from "./components/PostList";
import { Routes, Route, useLocation } from "react-router-dom";
import { CardAbout } from "./components/CardAbout";
import { PostFull } from "./components/PostFull";
import { useNavigate } from "react-router-dom";
import { CardAboutBlog } from "./components/CardAboutBlog";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewRecipe = (page: string) => {
    navigate(page);
  };

  return (
    <section className="mb-6">
      <div className="flex mx-auto my-6 max-w-[90%] bg-gray-200 px-2 vs:px-6 rounded-[10px] shadow-md">
        <div className="flex items-center mr-6 vs:mr-0 ">
          <img src="/utils/logo.png" alt="Logo do Blog Revelare" className="w-[50px] sm:w-[70px]" />
          <p className="text-sm vs:flex text-lg text-slate-800 font-bold">
            <span className="text-green-500 text-lg vs:text-2xl">B</span>log{" "}
            <span className="text-lg vs:text-2xl text-green-500">R</span>evelare
          </p>
        </div>
        <ul className="flex justify-center items-center gap-4 mt-2 text-md vs:text-xl">
          <li
            onClick={() => handleViewRecipe("/about")}
            className={`cursor-pointer font-semibold hover:text-green-500 px-2 py-1  ${
              location.pathname === "/about"
                ? "border-b-2 border-green-500 text-green-500"
                : ""
            }`}
          >
            Sobre
          </li>
          <li
            onClick={() => handleViewRecipe("/")}
            className={`cursor-pointer font-semibold hover:text-green-500 px-2 py-1 ${
              location.pathname === "/"
                ? "border-b-2 border-green-500 text-green-500"
                : ""
            }`}
          >
            Receitas
          </li>
        </ul>
      </div>
      <div className="flex max-w-[90%] mx-auto justify-between">
        <div className="max-w-full lg:max-w-[70%]">
          <Routes>
            <Route path="/" element={<PostList posts={recipes} />} />
            <Route path="/receita/:id" element={<PostFull />} />
            <Route path="/about" element={<CardAboutBlog />} />
          </Routes>
        </div>
        <div className="hidden ml-4 lg:flex self-start ">
          <CardAbout />
        </div>
      </div>
    </section>
  );
}

export default App;
