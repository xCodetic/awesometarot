import { useEffect, useState } from 'react'

import styles from './styles.module.css'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    return mounted ? (
        <select className={styles.switcher_container} value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    ) : null;
}

export default ThemeSwitcher