import React from "react";

import { 
    useState 
    , useEffect
} from "react";

import { 
    ColorType
    , getColors
    , addColor
    , deleteColor
 } from "../services/ColorServices"


function Color() {

    const [colors, setColors] = useState<ColorType[]>([]);
    const [color, setColor] = useState<string>("");   


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }

    const addColorEvent = async () => {
        const newColor = await addColor(color);
        setColors([...colors, newColor]);
        setColor("");
    }

    const deleteColorEvent = async (id: number) => {
        await deleteColor(id);
        setColors(colors.filter((color) => color.id !== id));
    }

    useEffect(() => {
        async function fetchData() {
            
            const x = await getColors();
            setColors(x);
        };
        fetchData();
    }, []);

    return (
        <div>
        <h1>Colors Management</h1>

            <span>Color: </span>
            <input 
                type="text" 
                placeholder="Type your new color"
                value={color}
                onChange={changeInput}
            />
            <button
                disabled={ color.length == 0 }
                onClick={addColorEvent}
            >
                Add
            </button>


            <ul>
                { colors.map((color) => (
                    <li key={color.id} >
                        { color.descripcion }
                        <button onClick={
                            () => deleteColorEvent(color.id)
                        } >
                            Remove
                        </button>
                        <button>
                            Edit
                        </button>
                    </li>
                    
                ))}
            </ul>

        </div>
    );
}

export default Color;