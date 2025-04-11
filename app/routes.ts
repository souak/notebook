import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("notebooks", "routes/home.tsx", {id: 'notebooks'}),
    route("notebooks/:notebookId", "routes/notebook.tsx"),

] satisfies RouteConfig;
