/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import Card from './components/Card'
import TopBar from './components/TopBar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  let data=[
    {
    Product: "popular Item",
    Price:  "400RS"
    },
    {
    Product: "popular Item",
    Price:  "400RS"
    },
    {
    Product: "popular Item",
    Price:  "400RS"
    },
    {
    Product: "popular Item",
    Price:  "400RS"
    },
    {
    Product: "popular Item",
    Price:  "400RS"
    },
    {
    Product: "popular Item",
    Price:  "400RS"
    },
    {
    Product: "popular Item",
    Price:  "400RS"
    },
    {
    Product: "popular Item",
    Price:  "400RS"
    },
  ]
  let[count,setcount] = useState(0)
  return <>
    <TopBar count={count} setcount={setcount}/>
    <Header/>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e,i)=>{
                return<Card data={e} count={count} setcount={setcount} key={i}/>
              })
            }
            
          </div>
      </div>
    </section>
    <Footer/>
  </>
}

export default App