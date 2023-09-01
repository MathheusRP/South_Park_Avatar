import { ColorsListStyled } from "./style";
import { PiPaintBrushBroadBold } from "react-icons/pi"
import { UserContext } from "../../context/useContext";
import { useContext, useState, useEffect } from "react"

const colorList = [
    "#d9011f",
    "#34c2a2",
    "#d1d134",
    "#5cd4dc",
    "#dd8b5f",
    "#3b1e18",
    "#d65580",
    "#e98bb4",
    "#bd3f02",
    "#d67f41",
    "#b2b247",
    "#8f4035",
    "#5d4330",
    "#242656",
    "#313c5b",
    "#17271c",
    "#222140",
    "#4f5745",
    "#1e202f",
    "#232323",
    "#424242",
    "#777777",
    "#afafaf",
    "#d6d6d6",
    "#fff",
    "#4d5bad",
    "#249652",
    "#46bc42",
    "#338731",
    "#667c1f",
    "#9cc420",
    "#c4ac20",
    "#c1b156",
    "#7a7241",
    "#7a5d41",
    "#6d4721",
    "#995b1d",
    "#a34b36",
]

export const ColorList = () => {

    const { setHairColor, menu, setShirtColor } = useContext(UserContext)


    const setColor = (color: string) => {
        if (menu == "hair") {
            setHairColor(color)
        } else if (menu == "shirt") {
            setShirtColor(color)
        }
    }

    const [colorStatus, setColorStatus] = useState("close")

    const openAndClose = () => {
        if (colorStatus == "close") {
            setColorStatus("open")
        } else {
            setColorStatus("close")
        }
    }

    useEffect(() => {
        if (menu == "body") {
            setColorStatus("off")
        }
        else {
            setColorStatus("close")
        }
    }, [menu])

    return (
        <ColorsListStyled className={colorStatus}>
            <button onClick={() => openAndClose()} type="button"><PiPaintBrushBroadBold className="icon" /></button>

            <ul>
                <li onClick={() => setColor("")} className="noColor">
                    <span></span>
                </li>
                {
                    colorList.map((color, index) => {
                        return (
                            <li key={index} onClick={() => setColor(color)} style={{ "backgroundColor": `${color}` }}></li>
                        )
                    })
                }

            </ul>

        </ColorsListStyled>
    )
}