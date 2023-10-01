import { memo } from "react"
const Memoinreact = (data) => {
    console.log("Inner Memo:",data)
  return (
    <div>
       
    </div>
  )
}

export default memo(Memoinreact)
