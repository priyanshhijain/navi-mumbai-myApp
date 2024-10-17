"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faShuffle, faBars } from '@fortawesome/free-solid-svg-icons';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BellIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Header2: React.FC = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const authData = localStorage.getItem('username');
    if (authData) {
      setIsLogin(true);
      setUsername(authData);
    }
  }, []);

  return (
    <Disclosure as="header" className="w-full bg-blue-950 shadow-md py-3">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Image 
    src="/logo.jpeg" // Image source
    alt="Police Logo" // Alt text for accessibility
    width={48} // Set the width (12 * 4 = 48 for responsive scaling)
    height={48} // Set the height (12 * 4 = 48 for responsive scaling)
    className="object-cover" // Optional: additional class for styling, like maintaining aspect ratio
/>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <a href="/dashboard" className="text-base font-medium text-white hover:text-gray-300">
              Dashboard
            </a>
            <a href="/trackrequest" className="text-base font-medium text-white hover:text-gray-300">
              Track Request
            </a>
            <a href="/profile" className="text-base font-medium text-white hover:text-gray-300">
              Profile
            </a>
            <a href="/profile" className="text-base font-medium text-white hover:text-gray-300">
             Contact Us
            </a>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <button
              type="button"
              className="relative rounded-full bg-gray-700 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6 text-white" />
            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <Image
    alt=""
    src="/header.avif"
    width={256} // Image's actual width
    height={256} // Image's actual height
    className="h-8 w-8 rounded-full"
/>
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    {/* Add Menu Item */}
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-600 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          <Disclosure.Button
            as="a"
            href="/dashboard"
            className="block border-l-4 border-indigo-500 bg-gray-700 py-2 pl-3 pr-4 text-base font-medium text-white"
          >
            Dashboard
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="/trackrequest"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-300 hover:border-gray-400 hover:bg-gray-600 hover:text-white"
          >
            Track Request
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="/profile"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-300 hover:border-gray-400 hover:bg-gray-600 hover:text-white"
          >
            Profile
          </Disclosure.Button>
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
            <Image
    alt=""
    src="/header.avif"
    width={256} // Image's actual width
    height={256} // Image's actual height
    className="h-8 w-8 rounded-full"
/>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Tom Cook</div>
              <div className="text-sm font-medium text-gray-400">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-gray-700 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <Disclosure.Button
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
            >
              Settings
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
            >
              Sign out
            </Disclosure.Button>
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>

  );
};

export default Header2;