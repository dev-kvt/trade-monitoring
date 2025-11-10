import React from 'react'
import  Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItem'
import { DropdownMenu } from './dropdown-menu'
import UserDropdown from './UserDropdown'
const Header = () => {
  return (
    <header className='sticky top-0  header'>  
        <div className='container header-wrapper'>
            <Link href = '/'>
            <Image src ="/assets/icons/logo.png" alt="potato trader logo" width = {140} height ={600} className ="h-12 w-auto cursor-pointer" />
            </Link>
            <nav className='hidden sm:block'>
                <NavItems/>
            </nav>
            <UserDropdown/>


        </div>
    </header>
    )
}

export default Header