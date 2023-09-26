import Link from 'next/link'
import React from 'react'

type Props = {}

const MainPage = (props: Props) => {
    return (
        <div> Home Page
            <Link href='/about'>
                About
            </Link>
        </div>
    )
}

export default MainPage