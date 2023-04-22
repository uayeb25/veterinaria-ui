import React, { useState , useEffect } from "react";

function ExampleSelect() {

    type DiccionarioDeArreglos = {
        [llave: string]: string[]
    };

    const [data, setData] = useState<DiccionarioDeArreglos>({});
    const [animal, setAnimal] = useState<string>("");
    const [raza, setRaza] = useState<string>("");

    const changeInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAnimal(e.target.value);
        setRaza("");
    }

    useEffect(() => {
        async function fetchData() {
            const data: DiccionarioDeArreglos = {
                "perros": ["Pug", "Bulldog", "Chihuahua", "Pitbull", "Pastor Aleman", "Labrador", "Golden Retriever", "Husky", "Poodle", "Beagle", "Boxer", "Dalmata", "Rottweiler", "Doberman", "Chow Chow", "San Bernardo", "Gran Danes", "Bull Terrier", "Bullmastiff", "Bichon Frise", "Basset Hound", "Akita", "Border Collie", "Bichon Maltes", "Bulldog Frances", "Cocker Spaniel", "Dogo Argentino", "Dogo de Burdeos", "Fox Terrier", "Galgo", "Mastin", "Pinscher", "Presa Canario", "Presa Mallorquin", "Puli", "Rhodesian Ridgeback", "Samoyedo", "Schnauzer", "Setter", "Shar Pei", "Shiba Inu", "Shih Tzu", "Teckel", "Terranova", "Weimaraner", "Westy", "Yorkshire Terrier"],
                "gatos": ["Angora", "Persa"]
            };
            
            setData(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Example Select</h1>
            <select onChange={changeInput} >
                <option value="">Seleccione una opción</option>
                {
                    Object.keys(data).map((key) => {
                        return (
                            <option value={key}>{key}</option>
                        )
                    })
                }
            </select>
            <select onChange={(e) => setRaza(e.target.value)} >
                <option value="">Seleccione una opción</option>
                {
                    data[animal] && data[animal].map((raza) => {
                        return (
                            <option value={raza}>{raza}</option>
                        )
                    })
                }
            </select>
            <span>{animal}</span>
            <span>{raza}</span>
        </div>
    )
}

export default ExampleSelect;