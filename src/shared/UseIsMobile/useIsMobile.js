import { useState, useEffect} from "react"

// Хук
export function useIsMobile() {
    // добавляю useState хук и задаю дефолтное значение для ширины
    const [windowWidth, setWindowWidth] = useState(window.innerWidth || 0)
    // добавляю useEffect хук с колбэк ф-ей
    useEffect(() => {
        // добавляю ф-ию изменения размера страницы
        function handleResize() {
            // изменяю значение ширины через функцию хука - setWindowWidth
            setWindowWidth(window.innerWidth)
        }
        // добавляю прослушку изменения размера и ф-ию изменения размера
        window.addEventListener("resize", handleResize)
        // вызываю ф-ию изменения размера
        handleResize()
        // удаляю прослушку
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return Boolean(windowWidth <= 768)
}