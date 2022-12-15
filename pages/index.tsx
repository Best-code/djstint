import { SvgIcon } from '@mui/material'
import type { NextPage } from 'next'
import { ContentOne } from '../components/contentOne'
import { ContentTwo } from '../components/contentTwo'
import { Widgets } from '../components/widgets'

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
