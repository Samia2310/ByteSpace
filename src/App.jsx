import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import SearchPage from './pages/SearchPage'
import CourseDetails from './pages/CourseDetails'
import CourseLessons from './pages/CourseLessons'
import CourseReviews from './pages/CourseReviews'
import CreatorProfile from './pages/CreatorProfile'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course/:id/lessons" element={<CourseLessons />} />
        <Route path="/course/:id/reviews" element={<CourseReviews />} />
        <Route path="/creator/:id" element={<CreatorProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
