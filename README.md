# React Iro - A React Wrapper for iro.js

React Iro is an open-source library that provides a React wrapper for iro.js, a versatile color picker library. With React Iro, you can easily integrate an interactive color picker into your React applications, allowing users to select colors for various elements and purposes.

## Installation

You can install React Iro using npm:

```bash
npm install react-iro
```

## Usage

To use React Iro in your React application, follow these steps:

1. Import the component:

```jsx
import ColorPicker from "react-iro"
```

2. Define the color picker options and pass them as props:

```jsx
const colorPickerOptions = {
  width: 200, // Width of the color picker
  color: "#ff0000", // Initial color
  // Other iro.js options can be added here
}
//Pass it to the component via the options props
<ColorPicker options={colorPickerOptions}/>
```

You can find all available options in the [iro.js documentation](https://iro.js.org).

## Props

React Iro accepts the following props:

- `options`: An object accepting all available options in the [iro.js documentation](https://iro.js.org).
- `setters`: An object containing all the events available in the original component.
  - Currently accepts only `onColorChange`, which is the equivalent of "color:change". More events will be added soon!

## Example

Here's a complete example of how to use React Iro:

```tsx
import { useState } from "react"
import ColorPicker from "react-iro"
import iro from "@jaames/iro";

const Example = () => {
    const [color, setColor] = useState<string>()

    return <>
        {/*will use this svg for the custom handle */}
        <svg display={"none"}>
            <defs>
                <g id="handle" >

                    <circle cx='50%' cy='50%' r='10' stroke='#004175' stroke-width='3' fill='transparent' />

                </g>
            </defs>
        </svg>
        <ColorPicker
            setters={{
                onChangeColor: (color: iro.Color) => {
                    setColor(color.rgbaString.replaceAll("rgba", ""))
                },
            }}
            options={{
                //all this options are regular iro.js options
                color: "#f1be51",
                width: 300,
                height: 300,
                wheelLightness: false,
                layoutDirection: "horizontal",
                handleSvg: "#handle",
                layout: [
                    //define your layout according to original docs
                ],
            }}
        />
    </>

}

```

## License

React Iro is open-source and licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

React Iro is based on the powerful iro.js library, and we extend our gratitude to the iro.js team for providing such a fantastic color picker solution.

---

By using React Iro, you can effortlessly add a feature-rich color picker to your React projects. Whether you need color customization for themes, charts, or anything else, React Iro has you covered. Enjoy building your applications with dynamic and intuitive color selection!
