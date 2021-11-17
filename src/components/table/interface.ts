
export interface Props {
    columns: object[],
    selectableTypes?: SelectableTypes,
    data: object[],
    onSelect?: (...args: any) => any
}

export type SelectableTypes = 'checkbox' | 'radio';
