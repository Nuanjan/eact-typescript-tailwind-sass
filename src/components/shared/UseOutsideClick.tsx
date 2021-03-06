import { useEffect } from 'react';

import React from 'react'

const UseOutsideClick = (ref: any, callback: any) => {
    const handleClick = (e:any) => {
        if(ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }
useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => {
        document.removeEventListener("click", handleClick)
    }
})
}

export default UseOutsideClick