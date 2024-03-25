export function addBar(url: string): string {
    if (!url.startsWith("/")) {
      return "/" + url;
    }
   
    return url;
}