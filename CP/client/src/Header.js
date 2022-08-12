import React from "react";
import Button from "./Button";
import Logo from "./pictures/logo3.png";
import Avatar from "./pictures/avatar2.png";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    LoginIcon,
    LogoutIcon,
    PlusIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import ClickOutHandler from 'react-clickout-handler';
import { useState, useContext } from 'react';
import AuthModalContext from "./AuthModalContext";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import RedirectContext from "./RedirectContext";

function Header() {
    const [userDropdownVisibilityClass, setuserDropdownVisibilityClass] = useState('hidden');
    const [searchText, setSearchText] = useState('');
    const { setRedirect } = useContext(RedirectContext);

    function toggleUserDropdown() {
        if (userDropdownVisibilityClass === 'hidden') {
            setuserDropdownVisibilityClass('block');
        } else {
            setuserDropdownVisibilityClass('hidden')
        }
    }

    function doSearch(ev) {
        ev.preventDefault();
        setRedirect('/search/' + encodeURIComponent(searchText));
    }

    const authModal = useContext(AuthModalContext);
    const user = useContext(UserContext);

    return (
        <header className="w-full bg-rd p-2">
            <div className="mx-4 flex relative">
                <Link to="/">
                    <img src={Logo} alt="" className="w-10 h-10 mr-4" />
                </Link>
                <form
                    onSubmit={doSearch}
                    className="bg-rd-brighter p-1 px-3 flex rounded-md border border-rb mx-4 flex-grow"
                >
                    <SearchIcon className="text-gray-300 h-8 w-8 mt-1" />
                    <input
                        type="text"
                        className="bg-rd-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white"
                        placeholder="Search"
                        value={searchText} S
                        onChange={ev => setSearchText(ev.target.value)}
                    />
                </form>

                {user.username && (
                    <>
                        <button className='px-3 py-1'>
                            <ChatIcon className='text-gray-400 w-8 h-8 m-1 mx-2' />
                        </button>
                        <button className='px-3 py-1'>
                            <BellIcon className='text-gray-400 w-8 h-8 m-1 mx-2' />
                        </button>
                        <button className='px-3 py-1'>
                            <PlusIcon className='text-gray-400 w-8 h-8 m-1 mx-2' />
                        </button>
                    </>
                )}

                {!user.username && (
                    <div className="mx-1 hidden sm:block">
                        <Button outlined className="ml-2 mr-1" onClick={() => authModal.setShow('login')}>
                            Login
                        </Button>
                        <Button className="mr-2" onClick={() => authModal.setShow('register')}>Signup</Button>
                    </div>
                )}


                <ClickOutHandler onClickOut={() => setuserDropdownVisibilityClass('hidden')}>
                    <button className="rounded-md flex ml-4 border border-gray-700" onClick={() => toggleUserDropdown()}>
                        {!user.username && (
                            <UserIcon className="w-10 h-10 text-gray-400 m-1" />
                        )}

                        {user.username && (
                            <div className="bg-gray-800 rounded-md w-10 h-10">
                                <img src={Avatar} alt="" />
                            </div>
                        )}

                        <ChevronDownIcon className="text-gray-500 w-8 h-8 mt-2 ml-1" />
                    </button>

                    <div className={"absolute right-0 top-14 bg-rd border border-gray-700 z-10 rounded-md text-rt overflow-hidden " + userDropdownVisibilityClass}>
                        {user.username && (
                            <span className="block w-50 py-2 px-3 text-sm">
                                Hello, {user.username}!
                            </span>
                        )}
                        {!user.username && (
                            <button
                                className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm" onClick={() => authModal.setShow('login')}>
                                <LoginIcon className="w-5 h-5 mr-2" />
                                Log In / Sign Up
                            </button>
                        )}

                        {user.username && (
                            <button
                                className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm" onClick={() => user.logout()}>
                                <LogoutIcon className="w-5 h-5 mr-2" />
                                Log Out
                            </button>
                        )}


                    </div>


                </ClickOutHandler>


                {/* 
                <div className={"absolute right-0 top-12 bg-rd border border-gray-700 z-10 rounded-md text-rt overflow-hidden"}>
                    <button
                        className="block felx w-50 py-2 px-3 hover:bg-gray-300  hover:text-black text-sm">
                        <LoginIcon className="w-6 h-6 " />
                        Login / Signup
                    </button>
                </div> */}
            </div>
        </header >
    );
}

export default Header;
