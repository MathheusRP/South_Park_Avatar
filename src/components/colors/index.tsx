import { ColorsListStyled } from "./style";
import { PiPaintBrushBroadBold } from "react-icons/pi"
import { UserContext } from "../../context/useContext";
import { useContext, useState, useEffect } from "react"


const colorList = [
    "rgb(30, 30, 30)",
    "rgb(40, 40, 40)",
    "rgb(50, 50, 50)",
    "rgb(70, 70, 70)",
    "rgb(120, 120, 120)",
    "rgb(150, 150, 150)",
    "rgb(180, 180, 180)",
    "rgb(200, 200, 200)",
    "rgb(110, 30, 30)",
    "rgb(50, 30, 30)",
    "rgb(80, 30, 30)",
    "rgb(140, 30, 30)",
    "rgb(30, 110, 30)",
    "rgb(170, 30, 60)",
    "rgb(30, 30, 170)",
    "rgb(50, 150, 50)",
    "rgb(200, 50, 50)",
    "rgb(10, 70, 120)",
    "rgb(80, 30, 80)",
    "rgb(30, 50, 30)",
    "rgb(30, 80, 30)",
    "rgb(30, 150, 30)",
    "rgb(50, 50, 80)",
    "rgb(30, 50, 110)",
    "rgb(50, 170, 50)",
    "rgb(180, 70, 180)",
    "rgb(30, 30, 150)",
    "rgb(50, 50, 200)",
    "rgb(90, 50, 90)",
    "rgb(120, 40, 100)",
    "rgb(150, 50, 150)",
    "rgb(50, 30, 90)",
    "rgb(10, 40, 60)",
    "rgb(120, 80, 100)",
    "rgb(60, 80, 40)",
    "rgb(150, 120, 40)",
    "rgb(80, 30, 30)",
    "rgb(100, 10, 10)",
    "rgb(160, 180, 10)",
    "rgb(140, 200, 40)",
    "rgb(200, 150, 90)",
    "rgb(180, 200, 70)",
    "rgb(220, 150, 10)",
    "rgb(200, 150, 50)",
    "rgb(200, 210, 40)",

]

export const ColorList = () => {

    const { setHairColor, menu } = useContext(UserContext)


    const setColor = (color: string) => {
        if (menu == "hair") {
            setHairColor(color)
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