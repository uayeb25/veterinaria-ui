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
    , updateColor
 } from "../services/ColorServices"


function Color() {

    const [colors, setColors] = useState<ColorType[]>([]);
    const [color, setColor] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);


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

    const startEditColor = (id: number, descripcion: string) => {
        setIsUpdating(true);
        setColor(descripcion);
        setId(id);
    }

    const stopEditColor = () => {
        setIsUpdating(false);
        setColor("");
    }

    const updateColorEvent = async () => {
        const newColor = await updateColor(id, color);
        setColors(colors.map((color) => color.id === id ? newColor : color));
        setIsUpdating(false);
        setColor("");
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
                onClick={ isUpdating ? updateColorEvent : addColorEvent }
            >
                { isUpdating ? "Update" : "Add" }
            </button>
            
            { 
                isUpdating && 
                <button
                    onClick={stopEditColor}
                >
                    Cancel
                </button>
            }
            


            <ul>
                { colors.map((color) => (
                    <li key={color.id} >
                        { color.descripcion }
                        <button 
                            onClick={
                                () => deleteColorEvent(color.id)
                            }
                            disabled={isUpdating}
                        >
                            Remove
                        </button>
                        <button
                            disabled={isUpdating}
                            onClick={
                                () => startEditColor(color.id, color.descripcion)
                            }
                        >
                            Edit
                        </button>
                    </li>
                    
                ))}
            </ul>

        </div>
    );
}

export default Color;