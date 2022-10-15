import { MdOutlineSegment } from 'react-icons/md';
import { useState } from 'react';
import { MdArrowLeft, MdOutlineArrowDropDown } from 'react-icons/md';

export const Dropdown = (props) => {
    const [toggle, setToggle ] = useState(false);

    const Navigations = (text, path) => {
        return(
            <a href={path} className="w-44 h-14 flex justify-center uppercase text-2xl border-y-2 border-x-2 border-zinc-600 mr-1 bg-stone-900 indent-2 ">
                {text}
            </a>
        )
    };

    return (
        <nav>
            <div className='mr-1'>
                <button onClick={() => setToggle(!toggle)} className='flex -mt-1'>
                    <MdOutlineSegment size='42' />
                    <div className='mt-1 -ml-2'>
                    {(!toggle) ?
                            <MdArrowLeft size='35' /> :
                            <MdOutlineArrowDropDown size='35' />
                    }
                    </div>
                </button>
            </div>

            {(toggle) ?
            (<ul className={'absolute right-1 z-50 mt-1'}>
                <li>
                    {
                        (props.choice === 'about') ? 
                            [Navigations('Home', '/'), Navigations('Map', '/map'), Navigations('Weather', '/weather')] :
                        (props.choice === 'home') ?
                            [Navigations('Map', '/map'), Navigations('Weather', '/weather'), Navigations('About', '/about')] :
                        (props.choice === 'weather') ?
                            [Navigations('Home', '/'), Navigations('Map', '/map'), Navigations('About', '/about')] :
                        (props.choice === 'showWeather') ?
                            [Navigations('Home', '/'), Navigations('Map', '/map'), Navigations('Weather', '/weather'), Navigations('About', '/about')] :
                        (props.choice === 'map') ?
                            [Navigations('Home', '/'), Navigations('Weather', '/weather'), Navigations('About', '/about')] :
                        (props.choice === 'showMap') ?
                            [Navigations('Home', '/'), Navigations('Map', '/map'), Navigations('Weather', '/weather'), Navigations('About', '/about')] :
                        <></>
                    }
                </li>
            </ul>) :
            <></>
            }
        </nav>
    )
}