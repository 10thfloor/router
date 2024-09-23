/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as testsNormalPageImport } from './routes/(tests)/normal-page'
import { Route as testsLazyWithLoaderPageImport } from './routes/(tests)/lazy-with-loader-page'
import { Route as testsLazyPageImport } from './routes/(tests)/lazy-page'

// Create Virtual Routes

const testsVirtualPageLazyImport = createFileRoute('/(tests)/virtual-page')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const testsVirtualPageLazyRoute = testsVirtualPageLazyImport
  .update({
    path: '/virtual-page',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(tests)/virtual-page.lazy').then((d) => d.Route))

const testsNormalPageRoute = testsNormalPageImport.update({
  path: '/normal-page',
  getParentRoute: () => rootRoute,
} as any)

const testsLazyWithLoaderPageRoute = testsLazyWithLoaderPageImport
  .update({
    path: '/lazy-with-loader-page',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() =>
    import('./routes/(tests)/lazy-with-loader-page.lazy').then((d) => d.Route),
  )

const testsLazyPageRoute = testsLazyPageImport
  .update({
    path: '/lazy-page',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(tests)/lazy-page.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(tests)/lazy-page': {
      id: '/lazy-page'
      path: '/lazy-page'
      fullPath: '/lazy-page'
      preLoaderRoute: typeof testsLazyPageImport
      parentRoute: typeof rootRoute
    }
    '/(tests)/lazy-with-loader-page': {
      id: '/lazy-with-loader-page'
      path: '/lazy-with-loader-page'
      fullPath: '/lazy-with-loader-page'
      preLoaderRoute: typeof testsLazyWithLoaderPageImport
      parentRoute: typeof rootRoute
    }
    '/(tests)/normal-page': {
      id: '/normal-page'
      path: '/normal-page'
      fullPath: '/normal-page'
      preLoaderRoute: typeof testsNormalPageImport
      parentRoute: typeof rootRoute
    }
    '/(tests)/virtual-page': {
      id: '/virtual-page'
      path: '/virtual-page'
      fullPath: '/virtual-page'
      preLoaderRoute: typeof testsVirtualPageLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  testsLazyPageRoute,
  testsLazyWithLoaderPageRoute,
  testsNormalPageRoute,
  testsVirtualPageLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/lazy-page",
        "/lazy-with-loader-page",
        "/normal-page",
        "/virtual-page"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/lazy-page": {
      "filePath": "(tests)/lazy-page.tsx"
    },
    "/lazy-with-loader-page": {
      "filePath": "(tests)/lazy-with-loader-page.tsx"
    },
    "/normal-page": {
      "filePath": "(tests)/normal-page.tsx"
    },
    "/virtual-page": {
      "filePath": "(tests)/virtual-page.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */