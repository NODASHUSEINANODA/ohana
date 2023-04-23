import React from "react";
import { actions, selectors } from "./store";

const RecoilButton = () => {
  const seOnetNumber = actions.useAddOneNumber()
  const setMinusOneNumber = actions.useMinusOneNumber()
  const number = selectors.useNumber()
  const square = selectors.useSquare()

  console.log(number)

  return (
    <>
      <h1>number: {number}</h1>
      <button
        onClick={() => {
          seOnetNumber()
        }}
      >+1</button>

      <br />

      <button
        onClick={() => {
          setMinusOneNumber()
        }}
      >-1</button>

      <h1>{number} ** 2 = {square}</h1>
    </>
  )
}

export default RecoilButton
