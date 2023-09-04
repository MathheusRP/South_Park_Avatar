import { ClothingSectionStyle } from "./style";
import BodyIcon from "../../assets/icons/body.svg"
import EyesIcon from "../../assets/icons/eyes.svg"
import HairIcon from "../../assets/icons/hair.svg"
import MouthIcon from "../../assets/icons/mouth.svg"
import ShirtIcon from "../../assets/icons/shirt.svg"
import Pants from "../../assets/icons/pants.svg"
import HatIcon from "../../assets/icons/hat.svg"

import { UserContext } from "../../context/useContext";
import { useContext } from "react"

export const ClothingSection = () => {
    const { setMenu } = useContext(UserContext)

    return (
        <ClothingSectionStyle id="container">
            <ul id="list">
                <li onClick={() => setMenu("body")}>
                    <img src={BodyIcon} alt="Body icon" />
                </li>
                <li onClick={() => setMenu("hair")}>
                    <img src={HairIcon} alt="Hair icon" />
                </li>
                <li onClick={() => setMenu("hat")}>
                    <img src={HatIcon} alt="Hat icon" />
                </li>
                <li onClick={() => setMenu("eyes")}>
                    <img src={EyesIcon} alt="Eyes icon" />
                </li>
                <li onClick={() => setMenu("mouth")}>
                    <img src={MouthIcon} alt="Mouth icon" />
                </li>
                <li onClick={() => setMenu("shirt")}>
                    <img src={ShirtIcon} alt="Shirt icon" />
                </li>
                <li onClick={() => setMenu("pants")}>
                    <img src={Pants} alt="Pants icon" />
                </li>
            </ul>
        </ClothingSectionStyle>
    )
}