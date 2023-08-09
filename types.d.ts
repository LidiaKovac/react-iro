declare module 'react-iro' {

    interface ColorPickerLayoutDefinition {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options?: any;
    }
    interface ColorPickerProps {
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
    interface WrapperOptions {
        onChangeColor: (val: iro.Color) => void
}
    }