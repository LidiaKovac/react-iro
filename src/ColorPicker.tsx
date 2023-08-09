import iro from "@jaames/iro"
import { IroColorPicker } from "@jaames/iro/dist/ColorPicker"
import { LayoutDirection, WheelDirection } from "@irojs/iro-core"
import { useRef, useEffect } from "react"
interface ColorPickerLayoutDefinition {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: any;
}
export interface ColorPickerProps {
    //internal irojs props
    width?: number;
    height?: number;
    color?: string;
    colors?: iro.Color[];
    padding?: number;
    layoutDirection?: LayoutDirection;
    borderColor?: string;
    borderWidth?: number;
    handleRadius?: number;
    activeHandleRadius?: number;
    handleSvg?: string;
    handleProps?: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any
    };
    wheelLightness?: boolean;
    wheelAngle?: number;
    wheelDirection?: WheelDirection;
    sliderSize?: number;
    sliderMargin?: number;
    boxHeight?: number;
    layout?: ColorPickerLayoutDefinition[] | "default";
}
export interface WrapperOptions {
    onChangeColor: (val: iro.Color) => void
}
export default function ColorPicker({ options, setters }: { options: ColorPickerProps, setters: WrapperOptions },) {
    const colorPicker = useRef<IroColorPicker>()
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const cp = (colorPicker.current = iro.ColorPicker(ref.current!, {
            ...options

        }))
        cp.on("color:change", (color: iro.Color) => setters.onChangeColor(color))
        return () => {
            cp.off("color:change", setters.onChangeColor)
            // ref.current!.remove()
        }
    }, [])

    return <>

        <div ref={ref}></div>
    </>
}