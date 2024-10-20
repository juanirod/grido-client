"use client"

import React, { useEffect, useState } from 'react';
import { columns, Product } from './columns'; // Asegúrate de importar correctamente tus columnas y el tipo Product
import { DataTable } from './DataTable'; // Tu componente DataTable adaptado
import { Skeleton } from "@/components/ui/skeleton"; // Si tienes un componente para el loading state

export const TableProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div>
                <Skeleton className="h-8 w-full mb-2" />
                <Skeleton className="h-8 w-full mb-2" />
                <Skeleton className="h-8 w-full mb-2" />
            </div>
        );
    }

    return (
        <DataTable columns={columns} data={products} />
    );
};
