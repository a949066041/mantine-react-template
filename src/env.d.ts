/// <reference types="@rsbuild/core/types" />

declare const APP_TITLE: string
declare const APP_VERSION: string

declare module '*.mdx' {
  import { ComponentType } from 'react'
  const component: ComponentType
  export default component
}