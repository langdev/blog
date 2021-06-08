declare module '*.module.css' {
  const exports: { [exportName: string]: string }
  export = exports
}
