import { useLocalStorage } from "./useLocalStorage"


export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("geceModu", initialValue);

    return [darkMode, setDarkMode]
} 