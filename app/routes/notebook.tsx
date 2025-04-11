import type { Route } from "./+types/notebook";
import api  from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { SearchInput } from "../components/SearchInput";
import { useState } from "react";


export async function loader({ params }: Route.LoaderArgs) {
    const postId = params.notebookId;
    return { postId };
//    return api.get(`posts/${params.notebookId}`);
}

// export async function action() {}

export default function NoteBook({loaderData}: Route.ComponentProps) {

  return (
    <>
    {" "}
    {loaderData.postId}
    </>
    
  )
   
}
