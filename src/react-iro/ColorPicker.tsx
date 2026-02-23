import iro from "@jaames/iro"
import { IroColorPicker } from "@jaames/iro/dist/ColorPicker"
import { LayoutDirection, WheelDirection } from "@irojs/iro-core"
import React, { useRef, useEffect } from "react"
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
    const ref = useRef<HTMLDivElement>(null)
    const colorPicker = useRef<IroColorPicker>()

    useEffect(() => {
        const container = ref.current!;
        const cp = (colorPicker.current = iro.ColorPicker(ref.current!, {
            ...options
        }))

        console.log('creating handlers')
        const handler = (color: iro.Color) => setters.onChangeColor(color);
        cp.on("color:change", handler)

        return () => {
            cp.off("color:change", handler)
            container.innerHTML = "";
        }
    }, [])

    return <>

        <div ref={ref}></div>
    </>
}