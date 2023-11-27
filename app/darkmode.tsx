'use client';
import { useState, Fragment, useEffect } from 'react'
import { Switch } from '@headlessui/react'

export default function DarkBtn() {
    const [enabled, setEnabled] = useState(() => document.body.classList.contains('dark'));
    useEffect(() => {
        // Update the dark mode class on the body tag when the state changes
        if (enabled) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    })
    return (
        <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
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