import { useLocalStorage } from "./useLocalStorage"


export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkmode", initialValue);

    return [darkMode, setDarkMode]
} 