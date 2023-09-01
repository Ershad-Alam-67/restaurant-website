import React, { useContext, useState, useEffect } from "react"
export const MyContext = React.createContext()

const CartData = ({ children }) => {
  const [cartData, setCartData] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  const cartDataHandler = (newdata) => {
    setCartData((pre) => {
      return [...pre, newdata]
    })
  }

  useEffect(() => {
    let cnt = 0
    let tot = 0
    cartData.forEach((item) => {
      cnt = cnt + parseInt(item.cnt)
      tot = tot + parseFloat(item.price) * parseFloat(item.cnt)
    })
    setCount(cnt)
    setTotal(tot.toFixed(2))
  }, [cartData])
  return (
    <MyContext.Provider value={{ cartData, cartDataHandler, count, total }}>
      {children}
    </MyContext.Provider>
  )
}
export default CartData
