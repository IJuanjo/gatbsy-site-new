import "./src/styles/global.css"

export const onClientEntry = () => {
    console.log("corriendo...")
}
export const onPreRouteUpdate = () => {
    console.log("cambiando de ruta...")
}

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
    pathname,
    ...rest
}) => {
    console.log("scrolling...", location)
    console.log(pathname)

    console.log("rest", rest)
    return true
}