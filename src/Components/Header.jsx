import React from 'react'
import logo from './../assets/Images/logo.png'
import user from './../assets/Images/user.png'
import {
    HiHome, 
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
    HiPlus
} from 'react-icons/hi2'
import HeaderItem from './HeaderItem'

function Header() {

    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]

  return (
    <div className='flex items-center gap-8 justify-between p-5'>
        <div className='flex items-center gap-8'>
            <img src = {logo} className='w-[80px] md:w-[100px] object-cover'/>
            {menu.map((item) => (
                <HeaderItem name = {item.name} Icon = {item.icon} />
            ))}
        </div>
        <img src={user} className='w-[55px] rounded-full'/>
    </div>
  )
}

export default Header