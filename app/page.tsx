import React from "react"
import HeaderBox from "../components/headerBox"
const Home = () => {
  const loggedIn = {firstName:'anish'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox 
            type="greeting"
            title="Dashboard"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"></HeaderBox>
        </header>
      </div>
    </section>
  )
}
export default Home