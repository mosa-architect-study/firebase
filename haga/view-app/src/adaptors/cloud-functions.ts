export const get = (path:string) => window.fetch("functions" + path,{method:"GET"}).then(e => e.json())
