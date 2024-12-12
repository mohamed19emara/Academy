import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import LatestFiles from '../../components/LatestFiles/LatestFiles'
import CurriculumSection from '../../components/CurriculumSection/CurriculumSection'
import RecommendedResources from '../../components/RecommendedResources/RecommendedResources'
import { Container } from 'react-bootstrap'

const HomePages = () => {
  return (
    <Container>
        <HeroSection />
         <LatestFiles/>
        <CurriculumSection/> 
         <RecommendedResources/> 
    </Container>
  )
}

export default HomePages