import { useEffect, useState } from "react"

export default function useDebounce(value, delay) {

    const [debounceValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay )

        return () => {
            clearTimeout(timer);
        }       

    }, [value, delay])

    return debounceValue;
} 