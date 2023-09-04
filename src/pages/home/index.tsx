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
import { IHat } from "../../interfaces";

import { eyesList } from "../../data/eyesList";
import { EyesView } from "../../components/bodyPart/eyes";

import { UserContext } from "../../context/useContext";
import { useContext } from "react";

import { mouthList } from "../../data/mouthList";
import { MouthView } from "../../components/bodyPart/mouth";

import { shirtList } from "../../data/shirtList";
import { ShirtView } from "../../components/bodyPart/shirt";
import BodyModel from "../../assets/icons/body2.svg"

import { PantsView } from "../../components/bodyPart/pants";
import { pantsList } from "../../data/pantsList";

export const Home = () => {

    const { body, setBody, menu, setHair, hair, setHat, setTypeHair, hat, setEyes, setMouth, setShirt, setPants } = useContext(UserContext)

    const setHatFunction = (newHat: IHat) => {
        if (hat != null && hat.hat_id === newHat.hat_id) {
            setHat(null)
            setTypeHair(1)
        } else {
            setHat(newHat)
            setTypeHair(newHat.typeHair)
        }
    }

    const setHairFunction = (newHair: any) => {
        if (hair != null && hair.hair_id === newHair.hair_id) {
            setHair(null)
        } else {
            setHair(newHair)
        }
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
                                        <div key={index} className="container" onClick={() => setHairFunction(hair)}>
                                            <span className="circle"></span>
                                            <div className="icon">
                                                <HairView svg={hair.svg} color={hair.color} color2={hair.color2} />
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
                            ) : menu == "eyes" ? (
                                eyesList.map((eye, index) => {
                                    return (
                                        <div key={index} className="container eyes" onClick={() => setEyes(eye)}>
                                            <span className="circle"></span>
                                            <div className="icon">
                                                <EyesView svg={eye.svg} />
                                            </div>
                                        </div>
                                    )
                                })
                            ) : menu == "mouth" ? (
                                mouthList.map((mouth, index) => {
                                    return (
                                        <div key={index} className="container" onClick={() => setMouth(mouth)}>
                                            <span className="circle"></span>
                                            <div className="icon">
                                                <MouthView svg={mouth.svg} />
                                            </div>
                                        </div>
                                    )
                                })
                            ) : menu == "shirt" ? (
                                shirtList.map((shirt, index) => {
                                    return (
                                        <div key={index} className="container shirt" >
                                            <img src={BodyModel} alt="model" />
                                            <div onClick={() => setShirt(shirt)} className="icon">
                                                <ShirtView svg={shirt.svg}
                                                    color1={shirt.color1}
                                                    color2={shirt.color2}
                                                    color3={shirt.color3}
                                                    color4={shirt.color4}
                                                    color5={shirt.color5}
                                                    color6={shirt.color6}
                                                    color7={shirt.color7}
                                                    color8={shirt.color8} />
                                            </div>
                                        </div>
                                    )
                                })
                            ) : menu == "pants" ? (
                                pantsList.map((pants, index) => {
                                    return (
                                        <div key={index} className="container shirt" >
                                            <img src={BodyModel} alt="model" />
                                            <div onClick={() => setPants(pants)} className="icon">
                                                <PantsView svg={pants.svg}
                                                    color1={pants.color1}
                                                    color2={pants.color2}
                                                    color3={pants.color3}
                                                    color4={pants.color4}
                                                />
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