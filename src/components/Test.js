import { React, useState } from 'react'
import "./test.css"
import { Solution } from "../solutions/solution"


export default function Test() {
    const [size, setSize] = useState("");
    const [values, setValues] = useState("")
    const [state, setstate] = useState("")

    const handler = () => {
        const arr = size.split(" ");
        let N = Number(arr[0]);
        let K = Number(arr[1]);
        let B = values.split(" ");
        for (let i = 0; i < B.length; i++) {
            B[i] = Number(B[i])
        }

        // console.log(N, " ", K, " ", B);
        const result = Solution(N, K, B);
        console.log(result);
        if (result === true) {
            setstate("Yes")
        }
        else setstate("No");

    }
    return (
        <div className="box">
            <div><label htmlFor="size">Enter the Size of Array and Index.</label></div>
            <div><input type="text" id="size" name="size"
                onChange={(e) => { setSize(e.target.value) }}></input></div>
            <div><label htmlFor="values">Enter the Array Values.</label></div>
            <div><input type="text" id="values" name="values"
                onChange={(e) => { setValues(e.target.value) }}></input></div>
            <button type="button" onClick={handler}>Submit</button>
            { state && <h4>{state}</h4>}
        </div>
    )
}
