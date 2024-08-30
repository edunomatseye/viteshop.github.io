/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";

// Create Virtual Routes

const TableLazyImport = createFileRoute("/table")();
const PostsLazyImport = createFileRoute("/posts")();
const ContactLazyImport = createFileRoute("/contact")();
const AboutLazyImport = createFileRoute("/about")();
const IndexLazyImport = createFileRoute("/")();
const PostsPostIdLazyImport = createFileRoute("/posts/$postId")();

// Create/Update Routes

const TableLazyRoute = TableLazyImport.update({
  path: "/table",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/table.lazy").then((d) => d.Route));

const PostsLazyRoute = PostsLazyImport.update({
  path: "/posts",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/posts.lazy").then((d) => d.Route));

const ContactLazyRoute = ContactLazyImport.update({
  path: "/contact",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/contact.lazy").then((d) => d.Route));

const AboutLazyRoute = AboutLazyImport.update({
  path: "/about",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/about.lazy").then((d) => d.Route));

const IndexLazyRoute = IndexLazyImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route));

const PostsPostIdLazyRoute = PostsPostIdLazyImport.update({
  path: "/$postId",
  getParentRoute: () => PostsLazyRoute,
} as any).lazy(() =>
  import("./routes/posts.$postId.lazy").then((d) => d.Route),
);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/about": {
      id: "/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof AboutLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/contact": {
      id: "/contact";
      path: "/contact";
      fullPath: "/contact";
      preLoaderRoute: typeof ContactLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/posts": {
      id: "/posts";
      path: "/posts";
      fullPath: "/posts";
      preLoaderRoute: typeof PostsLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/table": {
      id: "/table";
      path: "/table";
      fullPath: "/table";
      preLoaderRoute: typeof TableLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/posts/$postId": {
      id: "/posts/$postId";
      path: "/$postId";
      fullPath: "/posts/$postId";
      preLoaderRoute: typeof PostsPostIdLazyImport;
      parentRoute: typeof PostsLazyImport;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  ContactLazyRoute,
  PostsLazyRoute: PostsLazyRoute.addChildren({ PostsPostIdLazyRoute }),
  TableLazyRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/contact",
        "/posts",
        "/table"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/contact": {
      "filePath": "contact.lazy.tsx"
    },
    "/posts": {
      "filePath": "posts.lazy.tsx",
      "children": [
        "/posts/$postId"
      ]
    },
    "/table": {
      "filePath": "table.lazy.tsx"
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.lazy.tsx",
      "parent": "/posts"
    }
  }
}
ROUTE_MANIFEST_END */
