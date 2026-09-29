import { useParams } from 'react-router-dom'
import CourseLayout from '../components/course/CourseLayout'
import StarRating from '../components/StarRating'
import { courseDetail } from '../data/course'

export default function CourseReviews() {
  const { id } = useParams()
  const courseId = id ?? '1'

  return (
    <CourseLayout courseId={courseId} course={courseDetail}>
      <h2 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4">What Learners Are Saying</h2>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mb-6 sm:mb-8">
        Discover what our learners have to say about their experience with '{courseDetail.title}.'
        Read reviews and ratings from individuals who have embarked on the transformative journey of
        mastering digital asset creation.
      </p>

      <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mb-5 sm:mb-6">
        <StarRating rating={5} />
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3 sm:mt-4">
          &quot;{courseDetail.highlightReview}&quot;
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl">
        {courseDetail.reviews.map((r) => (
          <div key={r.name} className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-bold text-xs sm:text-sm">{r.name}</p>
                  <p className="text-gray-400 text-[11px] sm:text-xs">{r.role}</p>
                </div>
              </div>
              <span className="text-gray-400 text-[11px] sm:text-xs whitespace-nowrap">{r.timeAgo}</span>
            </div>

            <div className="mt-3 sm:mt-4">
              <StarRating rating={r.rating} />
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3 sm:mt-4">{r.text}</p>
          </div>
        ))}
      </div>
    </CourseLayout>
  )
}