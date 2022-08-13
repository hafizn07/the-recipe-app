import React from 'react'

function Header() {
    return (
        <header className="flex flex-center flex-between">
            <a href="" className="logo">
                Food Diary
            </a>
            <nav>
                <ul className="flex">
                    <li>
                        <a href=""> Home </a>
                    </li>
                    <li>
                        <a href=""> Checkout </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header