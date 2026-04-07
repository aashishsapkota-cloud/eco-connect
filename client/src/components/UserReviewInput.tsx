import { Star } from "lucide-react"
import { useState } from "react"

const UserReviewInput = () => {
    const [rating, setRating] = useState(0)
    const [submit, setSubmit] = useState(false)

    return (
        <div>
            {submit ? (
                <p className="text-green-600 w-full text-center font-semibold">Thank you for your review!</p>
            ) : (
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={30}
                                className="cursor-pointer transition"
                                fill={star <= rating ? "#FFD700" : "none"}
                                stroke="#FFD700"
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </div>
                    <textarea placeholder="Write your review..." className="border-gray-300 border rounded-lg w-full h-20  p-4 my-2" />
                    <div className="flex justify-end">
                        <button onClick={() => setSubmit(true)} className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700">
                            Submit Review
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserReviewInput