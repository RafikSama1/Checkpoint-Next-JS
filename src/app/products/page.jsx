"use client"
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios
        .get('https://dummyjson.com/products')
        .then((res) => setProducts(res.data.products));
    }, []);
    
    return (
        <>
            {
                products.map((product)=>{
                    return(
                    <Link href={`/products/${product.id}`} className="rounded-lg shadow p-2 bg-slate-900 w-[22rem] m-1 inline-block hover:text-orange-600 hover:bg-slate-800">{product.title}</Link>
                    )
                })
            }
        </>
    )
  }