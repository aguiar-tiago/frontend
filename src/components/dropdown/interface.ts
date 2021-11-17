export interface Props {
    items: Item[],
    trigger: ("contextMenu" | "click" | "hover")[],
    title: string
}

type Item = {
    href: string,
    title: string
}