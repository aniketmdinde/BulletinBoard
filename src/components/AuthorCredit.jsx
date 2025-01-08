import { useSelector } from "react-redux"
import { selectAllUsers } from "../features/UsersSlice"

function AuthorCredit({userId, className}) {
    const users = useSelector(selectAllUsers);

    const author = users.find((user) => user.id == userId
    )

    return (
        <div className={`author-credit ${className}`}>
            <i>~{author ? author.name : "Unknown"}</i>
        </div>
    )
}

export default AuthorCredit