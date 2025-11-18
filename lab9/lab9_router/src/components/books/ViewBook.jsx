import React from 'react'
import { useParams } from 'react-router-dom'

export default function ViewBook() {
    const {bookID} = useParams()
    return(
        <div>
            View Book {bookID}
        </div>
    )
}