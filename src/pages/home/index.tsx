import { HomeStyled } from "./style";
import modelo from "../../assets/image/SP-Studio.png"
import { ClothingSection } from "../../components/clothing_sections/index";
import { Icon } from "../../components/icons";
import { Body2 } from "../../assets/svg/body";
import { bodyList } from "../../data/bodyIcon";
import { ModelView } from "../../components/modelView";

import { UserContext } from "../../context/useContext";
import { useContext } from "react";

export const Home = () => {

    const { body, setBody } = useContext(UserContext)

    return (
        <HomeStyled>
            <section className="clothingSection ">
                <ClothingSection />
                <section className="options">
                    <ul>
                        {
                            bodyList.map((skin) => {
                                return (
                                    <span onClick={() => setBody(skin)}>
                                        <Icon svg={<Body2 />} color1={skin.color1} color2={skin.color2} color3={skin.color3} />
                                    </span>
                                )
                            })
                        }
                    </ul>
                </section>
            </section>
            <section className="viewer">
                <div className="Window">
                    <ModelView body={body} />
                </div>
            </section>
        </HomeStyled>
    )
}