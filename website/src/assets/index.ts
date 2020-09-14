export function asset(...paths: string[]): string {
  for (const path of paths) {
    try {
      return require(`./${path}`);
    } catch {
      continue;
    }
  }
  return '' as never;
}
