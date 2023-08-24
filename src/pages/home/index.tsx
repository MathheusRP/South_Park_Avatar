import { HomeStyled } from "./style";
// import modelo from "../../assets/image/SP-Studio.png"
import { ClothingSection } from "../../components/clothing_sections/index";
import { BodyView } from "../../components/bodyPart/body";
import { Body2 } from "../../assets/svg/body";
import { bodyList } from "../../data/bodyColor";
import { ModelView } from "../../components/modelView";
import { hairList } from "../../data/hairList";
import { HairView } from "../../components/bodyPart/hair";
import { ColorList } from "../../components/colors";

import { UserContext } from "../../context/useContext";
import { useContext } from "react";

export const Home = () => {

    const { body, setBody, menu, setHair, hair } = useContext(UserContext)

    return (
        <HomeStyled>
            <section className="clothingSection ">
                <ClothingSection />
                <section className="options">
                    <ul className="optionsList">
                        {
                            menu == "body" ? (
                                bodyList.map((skin) => {
                                    return (
                                        <span onClick={() => setBody(skin)}>
                                            <BodyView svg={<Body2 />} skin={skin.skin} underwear={skin.underwear} />
                                        </span>
                                    )
                                })
                            ) : "body" ? (
                                hairList.map((hair) => {
                                    return (
                                        <span onClick={() => setHair(hair)}>
                                            <HairView svg={hair.svg} color={hair.color} />
                                        </span>
                                    )
                                })
                            ) : (<></>)


                            // bodyList.map((skin) => {
                            //     return (
                            //         <span onClick={() => setBody(skin)}>
                            //             <Icon svg={<Body2 />} color1={skin.color1} color2={skin.color2} color3={skin.color3} />
                            //         </span>
                            //     )
                            // })
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