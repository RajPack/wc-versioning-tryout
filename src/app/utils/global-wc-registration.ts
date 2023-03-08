
export function registerWC(name: string, component: any, majorVersion: number|string, minorVersion: number|string, mappedName?: string) {
  if(customElements.get(mappedName || name)) {
    return false; // already defined
  }
  const wcComponentFromRegistry = getFromAppWCRegistry(name, majorVersion, minorVersion)
  if(!!wcComponentFromRegistry) {
    return customElements.define(mappedName || name, class extends wcComponentFromRegistry {});
  }
  addToAppWCRegistry(name, component, majorVersion, minorVersion)
  return customElements.define(mappedName || name, class extends component {})
}

function getFromAppWCRegistry(name: string, majorVersion: number|string, minorVersion: number|string) {
  const appWCRegistry = (window as any).appWCRegistry as {[wcName: string]: {[version:string]: any}}
  const version = `${majorVersion}_${minorVersion}`
  return appWCRegistry?.[name]?.[version]
}

function addToAppWCRegistry(name: string,component: any, majorVersion: number|string, minorVersion: number|string) {
  let appWCRegistry = (window as any).appWCRegistry as {[wcName: string]: {[version:string]: any}}
  if(!appWCRegistry) {
    (window as any).appWCRegistry = {}
    appWCRegistry = (window as any).appWCRegistry 
  }
  const version = `${majorVersion}_${minorVersion}`
  appWCRegistry[name] = appWCRegistry[name] ?? {};
  appWCRegistry[name][version] = component
}


