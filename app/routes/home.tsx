import type { Route } from "./+types/home";
import api  from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { SearchInput } from "../components/SearchInput";
import { useState } from "react";
import { useNavigate } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handelSearchChange = (value: string) => {
    setSearchQuery(value);
  }

  const {data, isLoading, error} = useQuery({queryKey: ['posts'], queryFn: fetchNoteBooks});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;
  return (

    <div className="h-screen flex flex-col">
      <div className="w-full flex justify-center mt-6">
        <SearchInput onSearchChange={handelSearchChange}/>
      </div>

      <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 mt-6">
        {(data ?? []).map((note: any) => (
          <div onClick={() => navigate(`/notebooks/${note.id}`)}  key={note.id} className="bg-gray-300 w-[200px] h-[270px] rounded-xl shadow-md mx-auto">{note.title}</div>
        ))}
      </div>
    </div>
  )
   
}

function fetchNoteBooks() {
  return api.get('posts').then(res => res.data);
}
