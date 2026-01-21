import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className="cards">
      <Card user="Dev M" age="23" img="https://img.freepik.com/free-photo/3d-cartoon-character_23-2151021986.jpg?semt=ais_hybrid&w=740&q=80" description="Hi, I am Dev Mandal, A Web Devloper!"/>
      <Card user="Jotish B" age="25" img="https://kinghostbd.com/wp-content/uploads/2025/09/kinghostbd.jpg" description="Hello, I am Jotish B, A Graphic Designer!"/>
      <Card user="Rakesh M" age="24" img="https://images.stockcake.com/public/1/4/c/14c3fc6e-cdb9-4b36-8a35-5268e3429f17_large/happy-cartoon-boy-stockcake.jpg" description="Hello, I am Rakesh M, A Digital MArketer!"/>
    </div>
  )
}

export default App

