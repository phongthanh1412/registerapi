import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-50 rounded-3xl shadow-2xl p-10">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Welcome!</h1>
          <p className="text-gray-600 text-lg">Join us and experience secure authentication</p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <div className="flex justify-center mb-1">
              <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 font-medium">Secure</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <div className="flex justify-center mb-1">
              <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 font-medium">Fast</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <div className="flex justify-center mb-1">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 font-medium">Modern</p>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/signup"
            className="block w-full px-4 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full font-bold text-lg hover:from-teal-500 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide text-center transform hover:scale-105"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="block w-full px-4 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-full font-bold text-lg hover:border-teal-400 hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg uppercase tracking-wide text-center transform hover:scale-105"
          >
            Login
          </Link>
        </div>

        {/* Bottom decorative text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Powered by <span className="font-semibold text-teal-600">NestJS</span> & <span className="font-semibold text-cyan-600">React</span>
          </p>
        </div>
      </div>
    </div>
  );
}
