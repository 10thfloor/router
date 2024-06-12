/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as fooAsdfbarIdImport } from './routes/(foo)/asdf/(bar)/$id'

// Create/Update Routes

const fooAsdfbarIdRoute = fooAsdfbarIdImport.update({
  path: '/asdf/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(foo)/asdf/(bar)/$id': {
      id: '/asdf/$id'
      path: '/asdf/$id'
      fullPath: '/asdf/$id'
      preLoaderRoute: typeof fooAsdfbarIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ fooAsdfbarIdRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/asdf/$id"
      ]
    },
    "/asdf/$id": {
      "filePath": "(foo)/asdf/(bar)/$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */