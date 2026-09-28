import { useParams } from 'react-router-dom'
import CourseLayout from '../components/course/CourseLayout'
import StarRating from '../components/StarRating'
import { courseDetail } from '../data/course'

export default function CourseReviews() {
  const { id } = useParams()
  const courseId = id ?? '1'

  return (
    <CourseLayout courseId={courseId} course={courseDetail}>
      <h2 className="text-2xl font-extrabold mb-4">What Learners Are Saying</h2>
      <p className="text-gray-600 leading-relaxed max-w-2xl mb-8">
        Discover what our learners have to say about their experience with '{courseDetail.title}.'
        Read reviews and ratings from individuals who have embarked on the transformative journey of
        mastering digital asset creation.
      </p>

      <div className="border border-gray-200 rounded-2xl p-6 max-w-2xl mb-6">
        <StarRating rating={5} />
        <p className="text-gray-600 leading-relaxed mt-4">&quot;{courseDetail.highlightReview}&quot;</p>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl">
        {courseDetail.reviews.map((r) => (
          <div key={r.name} className="border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.role}</p>
                </div>
              </div>
              <span className="text-gray-400 text-xs whitespace-nowrap">{r.timeAgo}</span>
            </div>

            <div className="mt-4">
              <StarRating rating={r.rating} />
            </div>

            <p className="text-gray-600 leading-relaxed mt-4">{r.text}</p>
          </div>
        ))}
      </div>
    </CourseLayout>
  )
}
