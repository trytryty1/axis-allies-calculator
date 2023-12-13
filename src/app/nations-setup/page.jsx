"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useSWR from 'swr'
import Cookies from 'js-cookie';

const fetcher = (url) => fetch(url, {method: "POST", credentials: "include"}).then((res) => res.json());

export default function Page() {
    const gameCode = Cookies.get('gameId')

    const { data } = useSWR('/api/get-nations', fetcher)
    console.log(data)

    return (
        <>
            {gameCode}
        </>
    )
}