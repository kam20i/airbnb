import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import React from 'react'
import Posts from '../../container/Posts/Posts'
import Map from '../Map/Map';
import './Main.css'
import Layout from '../Layout/Layout';;



const Main = () => {
  return (
    <Router>
        <Layout>
      <Routes>
          <Route path="/map" element={<Map />} />
          <Route index element={<Posts />} />
      </Routes>
        </Layout>
    </Router>
  )
}

export default Main