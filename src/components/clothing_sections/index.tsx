import { ClothingSectionStyle } from "./style";
import BodyIcon from "../../assets/icons/body.svg"
import EyesIcon from "../../assets/icons/eyes.svg"
import HairIcon from "../../assets/icons/hair.svg"
import MouthIcon from "../../assets/icons/mouth.svg"
import ShirtIcon from "../../assets/icons/shirt.svg"
import Pants from "../../assets/icons/pants.svg"

import { UserContext } from "../../context/useContext";
import { useContext } from "react"

import { hairList } from "../../data/hairList";
import { bodyList } from "../../data/bodyColor";

export const ClothingSection = () => {

    const { setMenu } = useContext(UserContext)

    return (
        <ClothingSectionStyle>
            <ul>
                <li onClick={() => setMenu("body")}>
                    <img src={BodyIcon} alt="Body icon" />
                </li>
                <li onClick={() => setMenu("hair")}>
                    <img src={HairIcon} alt="Hair icon" />
                </li>
                <li>
                    <img src={EyesIcon} alt="Eyes icon" />
                </li>
                <li>
                    <img src={MouthIcon} alt="Eyes icon" />
                </li>
                <li>
                    <img src={ShirtIcon} alt="Shirt icon" />
                </li>
                <li>
                    <img src={Pants} alt="Pants icon" />
                </li>
            </ul>
        </ClothingSectionStyle>
    )
}