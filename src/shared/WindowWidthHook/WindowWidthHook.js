import { useState, useEffect} from "react"

// Хук
export function useWindowWidth() {
    // добавляю useState хук и задаю дефолтное значение для ширины
    const [windowWidth, setWindowWidth] = useState({ width: undefined })
    // добавляю useEffect хук с колбэк ф-ей
    useEffect(() => {
        // добавляю ф-ию изменения размера страницы
        function handleResize() {
            // изменяю значение ширины через функцию хука - setWindowWidth
            setWindowWidth({ width: window.innerWidth })
        }
        // добавляю прослушку изменения размера и ф-ию изменения размера
        window.addEventListener("resize", handleResize)
        // вызываю ф-ию изменения размера
        handleResize()
        // удаляю прослушку
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    // возвращаю ширину (знач из хука)
    return windowWidth
}