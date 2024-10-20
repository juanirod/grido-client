'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface ProductAddFormProps {
    onClose: () => void;
    onSuccess: () => void;
}

export function ProductAddForm({ onClose, onSuccess }: ProductAddFormProps) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
        const [loading, setLoading] = useState(false);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price, description }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(JSON.stringify(data))
             onSuccess(); 
            onClose();    
        } else {

        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="nombre">Nombre del producto</Label>
                    <Input
                        id="nombre"
                        type="text"
                        placeholder="Ingrese el nombre del producto"
                        required
                        onChange={(e) => setName(e.target.value)}

                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="descripcion">Descripcion</Label>
                    <Input
                        id="descripcion"
                        type="text"
                        placeholder="Ingrese una descripcion del producto"
                        required
                        onChange={(e) => setDescription(e.target.value)}

                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="price">Precio</Label>
                    </div>
                    <Input id="price" type="number" required
                        placeholder="Precio"
                        onChange={(e) => setPrice(parseInt(e.target.value))}

                    />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Cargando..." : "Agregar Producto"}
                </Button>

            </div>
        </form>

    )
}
