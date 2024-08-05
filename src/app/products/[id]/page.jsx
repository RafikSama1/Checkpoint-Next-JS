"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page({ params }) {
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products/${params.id}`)
        .then((res) => setProduct(res.data));
    }, []);


    return (
        <>
            <h1>{product.title}</h1>
            <Link href={'/products'}> Back to products page</Link>
        </>
    )
  }