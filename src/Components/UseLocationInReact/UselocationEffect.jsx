import {useLocation} from 'react-router-dom'

const UselocationEffect = () => {
    const location=useLocation()
    console.log(location)
  return (
    <>
      <h1>{location.pathname.replace("/",'')} Page</h1>
    </>
  )
}

export default UselocationEffect
