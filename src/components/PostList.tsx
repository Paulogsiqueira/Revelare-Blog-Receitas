import { useEffect, useState } from "react";
import { RecipeDto } from "@/dto/recipesDto";
import { Post } from "./Post";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PostsListDto {
  posts: RecipeDto[];
}

export function PostList({ posts }: PostsListDto) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const postsPerPage = 4;

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [...new Set(posts.map((post) => post.category))];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsLoading(false);
    }, 2000);
  };

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <img src="/utils/loader.gif" alt="Loading..." className="w-25 h-25" />
        </div>
      )}

      <div className={isLoading ? "opacity-50 pointer-events-none" : ""}>
        <div className="border-2 border-green-400 p-8 rounded-xl bg-gray-200 backdrop-filter backdrop-blur-md bg-opacity-50 border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between mb-8 w-full xl:w-[90%] mx-auto">
            <div className="flex items-center mb-2 sm:mb-0">
              <label className="text-slate-900 font-bold text-sm md:text-md mr-2">
                Categoria:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-1 px-3 border rounded-full bg-white focus:outline-none text-sm md:text-md "
              >
                <option value="">Todas as Categorias</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <label className="text-slate-900 font-bold text-md mr-2 text-sm md:text-md ">
                Receita:
              </label>
              <input
                type="text"
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-1 px-3 border rounded-full focus:outline-none text-sm md:text-md "
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4p">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => <Post key={post.id} post={post} />)
            ) : (
              <p className="text-center text-gray-500">
                Nenhuma receita encontrada.
              </p>
            )}
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => paginate(Math.max(currentPage - 1, 1))}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-30"
                        : "cursor-pointer text-slate-700 hover:text-green-500"
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={() => paginate(i + 1)}
                      isActive={currentPage === i + 1}
                      className={`cursor-pointer bg-green-400 rounded-full text-white font-bold hover:bg-green-500 hover:text-white ${
                        currentPage === i + 1 ? "bg-green-600" : ""
                      }`}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      paginate(Math.min(currentPage + 1, totalPages))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-30"
                        : "cursor-pointer text-slate-700 hover:text-green-500"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
