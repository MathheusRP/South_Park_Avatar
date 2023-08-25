import { HomeStyled } from "./style";
import { ClothingSection } from "../../components/clothing_sections/index";
import { BodyView } from "../../components/bodyPart/body";
import { Body2 } from "../../assets/svg/body";
import { bodyList } from "../../data/bodyColor";
import { ModelView } from "../../components/modelView";
import { hairList } from "../../data/hairList";
import { HairView } from "../../components/bodyPart/hair";
import { ColorList } from "../../components/colors";

import { hatList } from "../../data/hatList"
import { HatView } from "../../components/bodyPart/hat";

import { UserContext } from "../../context/useContext";
import { useContext } from "react";

export const Home = () => {

    const { body, setBody, menu, setHair, hair, setHat, setTypeHair } = useContext(UserContext)

    const setHatFunction = (hat: any) => {
        setHat(hat)
        setTypeHair(hat.typeHair)
    }

    return (
        <HomeStyled>
            <section className="clothingSection ">
                <ClothingSection />
                <section className="options">
                    <ul className="optionsList">
                        {
                            menu == "body" ? (
                                bodyList.map((skin, index) => {
                                    return (
                                        <span key={index} onClick={() => setBody(skin)}>
                                            <BodyView svg={<Body2 />} skin={skin.skin} underwear={skin.underwear} />
                                        </span>
                                    )
                                })
                            ) : menu == "hair" ? (
                                hairList.map((hair, index) => {
                                    return (
                                        <div key={index} className="container" onClick={() => setHair(hair)}>
                                            <span className="circle"></span>
                                            <div className="icon">
                                                <HairView svg={hair.svg} color={hair.color} />
                                            </div>
                                        </div>
                                    )
                                })
                            ) : menu == "hat" ? (
                                hatList.map((hat, index) => {
                                    return (
                                        <div key={index} className="container" onClick={() => setHatFunction(hat)}>
                                            <span className="circle"></span>
                                            <div className="icon">
                                                <HatView svg={hat.svg} color1={hat.color1} color2={hat.color2} color3={hat.color3} color4={hat.color4} />
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (<></>)
                        }
                    </ul>
                    <ColorList />
                </section>
            </section>
            <section className="viewer">
                <div className="Window">
                    <ModelView body={body} hair={hair} />
                </div>
            </section>
        </HomeStyled>
    )
}