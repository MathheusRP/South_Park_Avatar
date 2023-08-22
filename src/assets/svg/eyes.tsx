
// export const Eyes = ({}: React.SVGProps<SVGSVGElement>) => {
export const Eyes = ({ color1, color2 }: any) => {

    return (
        <svg id="Camada_2" data-name="Camada 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188.47 174.68">
            <defs>
                <style>{
                    // `.cls-1 {fill: ${color1 || "#2b2b2b"}} .cls-2 {fill: ${color2 || "#ededed"}}`
                    `.cls-1 {fill: ${color1 || "#2b2b2b"}} .cls-2 {fill: ${color2 || "#ededed"}}`

                }
                </style>
            </defs>
            <ellipse className="cls-2" cx="136.63" cy="99.19" rx="40.37" ry="47.98" transform="translate(-30.83 77.65) rotate(-28.65)" />
            <ellipse className="cls-2" cx="55.27" cy="97.96" rx="47.98" ry="40.37" transform="translate(-57.19 99.5) rotate(-61.35)" />
            <rect className="cls-1" x="22.83" y="31.11" width="54.18" height="5.29" transform="translate(-6.49 12.55) rotate(-13.46)" />
            <rect className="cls-1" x="115.65" y="31.11" width="54.18" height="5.29" transform="translate(273.69 99.82) rotate(-166.54)" />
            <circle className="cls-1" cx="73.83" cy="100.64" r="5.12" />
            <circle className="cls-1" cx="119.18" cy="100.64" r="5.12" />

        </svg>
    )
}

