import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../Components/Login/Login'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

export default function Home() {
  return (
    <>
    <Header/>
    <Login/>
    <Footer/>
      
    </>
  )
}
