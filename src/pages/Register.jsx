import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthVisual from '../components/auth/AuthVisual'
import logo from '../assets/logo.png'

const copy = {
  signup: {
    heading: 'Sign up and come in',
    description:
      'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.',
  },
  login: {
    heading: 'Sign in with ease',
    description:
      'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.',
  },
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#14142B] mb-2">{label}</span>
      <input
        {...props}
        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-brand-blue transition placeholder:text-gray-400"
      />
    </label>
  )
}

function SignupForm({ onSwitch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
      <p className="text-brand-blue font-semibold mb-2">Create an Account</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 leading-tight">
        Welcome to ByteSpace
      </h1>

      <div className="flex flex-col gap-6">
        <Field label="Full Name" name="name" placeholder="Jamie Davis" autoComplete="name" />
        <Field label="Email" type="email" name="email" placeholder="designer@example.com" autoComplete="email" />
        <Field label="Password" type="password" name="password" placeholder="••••••••" autoComplete="new-password" />
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="bg-brand-lime text-[#14142B] font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
        >
          Continue
        </button>
      </div>

      <p className="text-center text-gray-500 mt-10">
        Already have an account?{' '}
        <button type="button" onClick={onSwitch} className="text-blue-600 font-medium hover:underline">
          Login
        </button>
      </p>
    </form>
  )
}

function LoginForm({ onSwitch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
      <p className="text-brand-blue font-semibold mb-2">Sign In</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 leading-tight">
        Welcome Back
      </h1>

      <div className="flex flex-col gap-6">
        <Field label="Email" type="email" name="email" placeholder="designer@example.com" autoComplete="email" />
        <Field label="Password" type="password" name="password" placeholder="••••••••" autoComplete="current-password" />
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="bg-brand-lime text-[#14142B] font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
        >
          Sign In
        </button>
      </div>

      <div className="flex items-center gap-4 my-10">
        <span className="flex-1 h-px bg-gray-200" />
        <span className="text-gray-400 text-sm">or</span>
        <span className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94Z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.81Z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.92l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A12 12 0 0 0 12 24Z" />
            <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.27a12 12 0 0 0 0 10.75l4-3.11Z" />
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.63l4 3.1C6.22 6.87 8.87 4.75 12 4.75Z" />
          </svg>
        </button>
      </div>

      <p className="text-center text-gray-500 mt-10">
        New user?{' '}
        <button type="button" onClick={onSwitch} className="text-blue-600 font-medium hover:underline">
          Create an account
        </button>
      </p>
    </form>
  )
}

export default function Register() {
  const [mode, setMode] = useState('signup')
  const { heading, description } = copy[mode]

  return (
    <div className="min-h-screen bg-brand-blue bg-grid lg:flex">
      <AuthVisual heading={heading} description={description} />

      <div className="relative flex-1 flex flex-col items-center justify-start px-6 sm:px-12 py-10 lg:pt-[34px]">
        <Link to="/" className="lg:hidden flex items-center gap-2 font-extrabold text-xl mb-12">
          <img src={logo} alt="ByteSpace" className="w-[150px] h-auto" />
        </Link>

        <div className="w-full max-w-[500px] min-h-[720px] bg-white rounded-2xl px-8 sm:px-12 py-11 flex items-center">
          {mode === 'signup' ? (
            <SignupForm onSwitch={() => setMode('login')} />
          ) : (
            <LoginForm onSwitch={() => setMode('signup')} />
          )}
        </div>
      </div>
    </div>
  )
}
