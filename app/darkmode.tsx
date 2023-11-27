'use client';
import { useContext, Fragment, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { DarkModeContext } from './darkmodecontext';

export default function DarkBtn() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Switch checked={darkMode} onChange={toggleDarkMode} as={Fragment}>
        {({ checked }) => (
            /* Use the `checked` state to conditionally style the button. */
            <button
            className={`${
                checked ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${
                checked ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
            </button>
        )}
        </Switch>
  )
}