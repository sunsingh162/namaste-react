import { useEffect, useState } from "react"

const User = ({name, location}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let timeout = setInterval(() => {
        console.log('useEffect called')
      },1000)

      return () => {
        clearInterval(timeout)
        console.log('useEffect time cleared')
      }
    },[])

    console.log('render');
  return (
    <div className="user-card">
        <h1>Count : {count}</h1>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: sunny@gmail.com</h4>
    </div>
  )
}

export default User