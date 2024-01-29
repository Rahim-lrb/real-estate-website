import React from 'react'
import { MoonLoader } from 'react-spinners';


export default function Loader(loading) {
  return (
    <>
      <MoonLoader className="absolute top-1/2 left-1/2"
        color={"#ffffff"}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
      />
      </>
  )
}
