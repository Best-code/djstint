import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ContentOne } from '../components/contentOne'
import { ContentTwo } from '../components/contentTwo'

import { Widgets } from '../components/widgets'
import { ContentThree } from '../components/contentThree'
import { Footer } from '../components/footer'
import Header from '../components/header'
import { Logo } from '../components/Logo'
import CallToAction from '../components/CallToAction'

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-dark to-light">
    <ContentOne/>
    <ContentTwo/>
    <Widgets/>
    </div>
  )
}

export default Home
