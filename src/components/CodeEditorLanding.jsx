import Button from './ui/Button'
import { Download, Moon, Sun, Terminal, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import icon from '../assets/icon.png'

import Link from './ui/Link'
import codeplus from '../assets/codiplus.mp4'

export default function CodeEditorLanding() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  function handleDownload() {
    const CODE_URL = 'https://codeplusweb.vercel.app/codiplus-1.0.0-setup.exe'
    const fileName = CODE_URL.split('/').pop()
    const link = document.createElement('a')
    link.href = CODE_URL
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className=' flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200'>
      <header className=' px-4  lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800'>
        <a className='flex items-center justify-center' href='#'>
          <img
            className='size-8 object-contain'
            src={icon}
            alt='icono de codiplus'
          />
          <span className='ml-2 text-lg font-bold text-gray-900 dark:text-white'>
            CodiPlus
          </span>
        </a>
        <nav className='ml-auto flex gap-4 sm:gap-6'></nav>
        <Button
          className='ml-4'
          onClick={toggleDarkMode}
          aria-label='Toggle theme'
        >
          {darkMode ? (
            <Sun className='text-white h-5 w-5' />
          ) : (
            <Moon className=' h-5 w-5' />
          )}
        </Button>
      </header>
      <main className='flex-1'>
        <section className='relative h-[25em] md:h-[40em] flex items-start justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='px-2 w-full -bottom-24 flex justify-center absolute h-full items-end'>
            <video
              muted
              autoPlay
              loop
              className='w-[50em] bg-gray-900 rounded-2xl shadow-xl object-contain top-80 '
              src={codeplus}
            ></video>
          </div>
          <div className='container px-4 md:px-6 relative'>
            <div className='flex flex-col md:-translate-y-28 items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-white'>
                  Return to code
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  The powerful, lightweight code editor for modern developers.
                </p>
              </div>
              <div className='space-x-4 flex'>
                <Button
                  onClick={handleDownload}
                  className='gap-2 flex-row flex hap-3 items-center justify-center bg-gray-900 text-white hover:bg-gray-600 dark:bg-pink-600 dark:hover:bg-pink-700 '
                >
                  <Download />
                  Download for Free
                </Button>
                <Link
                  href={'https://codiplus.vercel.app/'}
                  className='border-2 text-gray-900 border-gray-900 hover:bg-gray-50 dark:text-pink-400 dark:border-pink-400 dark:hover:bg-pink-950'
                >
                  Web Version
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900 dark:text-white'>
              Features
            </h2>
            <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
              <div className='flex flex-col items-center space-y-2 border-gray-200 dark:border-gray-700 p-4 rounded-lg'>
                <Zap className='size-12 mb-2 text-gray-900 dark:text-pink-400' />
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  Lightning Fast
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
                  Optimized for speed and performance, CodiPlus loads instantly
                  and runs smoothly.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-200 dark:border-gray-700 p-4 rounded-lg'>
                <svg
                  className='size-12 mb-2 text-gray-900  dark:stroke-pink-400'
                  width='44'
                  height='44'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='#000000'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z' />
                </svg>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  Tailwind Integration
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
                  You have all the power of tailwind that you need
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-200 dark:border-gray-700 p-4 rounded-lg'>
                <Terminal className='size-12 mb-2 text-gray-900 dark:text-pink-400' />
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  Integrated Terminal
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
                  Built-in terminal for running commands without leaving the
                  editor.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 CodiPlus IDE. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <a
            className='text-xs text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400'
            href='#'
          >
            Terms of Service
          </a>
          <a
            className='text-xs text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400'
            href='#'
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
