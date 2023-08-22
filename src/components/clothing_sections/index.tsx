import { ClothingSectionStyle } from "./style";
import BodyIcon from "../../assets/icons/body.svg"
import EyesIcon from "../../assets/icons/eyes.svg"
import HairIcon from "../../assets/icons/hair.svg"
import MouthIcon from "../../assets/icons/mouth.svg"
import ShirtIcon from "../../assets/icons/shirt.svg"
import Pants from "../../assets/icons/pants.svg"


export const ClothingSection = () => {

    return (
        <ClothingSectionStyle>
            <ul>
                <li>
                    <img src={BodyIcon} alt="Body icon" />
                </li>
                <li>
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