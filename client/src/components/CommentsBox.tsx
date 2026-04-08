import { Star, User } from "lucide-react"
import { getRelativeTime } from "../utils/getRelativeTime"
import Button from "./Button"

type Comment = {
    user: string
    rating: number
    text: string
    createdAt?: Date | string
    businessName?: string
}

type Props = {
    comments: Comment[]
}



const CommentsBox = ({ comments }: Props) => {
    return (
        <div>
            {comments?.length > 0 ? comments?.map((comment, index) => {
                return (
                    <div key={index} className="bg-green-50 rounded-lg p-4 mt-4">
                        <div className="flex gap-2 items-center justify-between">
                            <p className="text-gray-800 font-semibold  flex gap-2 items-center"> <User size={18} />
                                {/* @ts-expect-error */}
                                {comment?.user || comment?.businessName} <span className="text-gray-400 text-xs">{getRelativeTime(comment?.createdAt)}</span> </p>
                            <p className="flex gap-2 items-center"> {
                                Array.from({ length: Math.round(comment?.rating) }).map((_, index) => (
                                    <>
                                        <Star key={index} fill="#FFD700" stroke="#FFD700" size={18} />
                                    </>
                                ))}</p>
                        </div>
                        <p className="text-gray-600 text-sm ">{comment?.text}</p>

                        <Button className="bg-gray-200 text-gray-800 mt-2 mr-2">Edit</Button>
                        <Button className="bg-red-200 text-red-800">Delete</Button>
                    </div>
                )
            }) :
                <p>No comments yet</p>}
        </div>
    )
}

export default CommentsBox