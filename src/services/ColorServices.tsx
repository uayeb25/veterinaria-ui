import axios from "axios";

export interface ColorType {
    id: number;
    descripcion: string;
}

const URI = "http://localhost:8080"


export async function getColors(): Promise<ColorType[]> {
    const response = await axios.get<ColorType[]>(
        `${URI}/api/colores`
    );
    return response.data;
}

export async function addColor(color: string): Promise<ColorType> {
    const response = await axios.post<ColorType>(
        `${URI}/api/colores`
        , { descripcion: color } // body or payload
    );
    return response.data;
}

export async function deleteColor(id: number): Promise<void> {
    await axios.delete<void>(
        `${URI}/api/colores/${id}`
    );
}

export async function updateColor(id: number, color: string): Promise<ColorType> {
    const response = await axios.put<ColorType>(
        `${URI}/api/colores/${id}`
        , { descripcion: color } // body or payload
    );
    return response.data;
}
