export interface IBodyColor {
    id: number
    skin: string
    underwear: string
}

export interface IModelView {
    body: IBodyColor
}

export interface IBodyView {
    svg: JSX.Element
    skin?: string | null
    underwear?: string | "#ededed"
}

export interface IHair {
    hair_id?: number,
    svg: JSX.Element,
    color?: string | null
    color2?: string | null
}

export interface IHat {
    hat_id?: number,
    svg: JSX.Element | null
    typeHair?: number | undefined,
    color1?: string | null
    color2?: string | null
    color3?: string | null
    color4?: string | null

}