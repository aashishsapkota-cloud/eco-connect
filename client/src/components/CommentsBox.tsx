import { Star, User } from "lucide-react"

type Comment = {
    user: string
    rating: number
    text: string
}

type Props = {
    comments: Comment[]
}

const CommentsBox = ({ comments }: Props) => {
    return (
        <div>
            <h1 className="text-xl font-bold text-gray-800 mb-2">Commments</h1>
            {comments?.length > 0 ? comments?.map((comment, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4 mt-4">
                    <div className="flex gap-2 items-center justify-between">
                        <p className="text-gray-800 font-semibold flex gap-2"> <User size={18} />{comment?.user}</p>
                        <p className="flex gap-2 items-center"> {
                            Array.from({ length: Math.round(comment?.rating) }).map((_, index) => (
                                <>
                                    <Star key={index} fill="#FFD700" stroke="#FFD700" size={18} />
                                </>
                            ))}</p>
                    </div>
                    <p className="text-gray-600 text-sm ">{comment?.text}</p>
                </div>
            )) :
                <p>No comments yet</p>}
        </div>
    )
}

export default CommentsBox