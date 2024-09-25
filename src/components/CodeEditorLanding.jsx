import Button from './ui/Button'
import { Download, Github, Moon, Sun, Terminal, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import icon from '../assets/icon.png'
import codedark from '../assets/codeimg.png'
import codelight from '../assets/codelight.png'
import Link from './ui/Link'

export default function CodeEditorLanding() {
  const [darkMode, setDarkMode] = useState(false)

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
    const fileName = CODE_URL.split("/").pop()
    const link = document.createElement('a')
    link.href = CODE_URL
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800'>
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
        <section className='flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
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
                <Link href={"https://codiplus.vercel.app/"}  className='border-2 text-gray-900 border-gray-900 hover:bg-gray-50 dark:text-pink-400 dark:border-pink-400 dark:hover:bg-pink-950'>
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
                  Optimized for speed and performance, CodeCraft loads instantly
                  and runs smoothly.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-200 dark:border-gray-700 p-4 rounded-lg'>
                <Github className='size-12 mb-2 text-gray-900 dark:text-pink-400' />
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  Git Integration
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
                  Seamless Git integration for easy version control and
                  collaboration.
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
        <section className='flex items-center justify-center w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900 dark:text-white'>
              Code Preview
            </h2>
            <div className='flex items-center justify-center w-full'>
              <img
                className='shadow-lg w-[70em] min-w-[30em]  object-contain rounded-xl border-2 border-gray-600'
                src={darkMode ? codedark : codelight}
                alt='imagen de muestra del codigo'
              />
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
