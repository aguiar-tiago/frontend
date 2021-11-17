export interface Props {
    theme?: "dark" | "light",
    className?: string,
    menuItems?: Item[],
}

interface Item {
    title: string,
    url?: string,
}