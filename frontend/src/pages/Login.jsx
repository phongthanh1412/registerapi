import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Redirect to home after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-50 rounded-3xl shadow-2xl p-10">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-3 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Hi,</h1>
            <h2 className="text-3xl font-bold text-gray-700">Welcome back</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-5 py-4 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700 placeholder-gray-500"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 px-5">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className="w-full px-5 py-4 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700 placeholder-gray-500"
              placeholder="Password"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600 px-5">{errors.password.message}</p>
            )}
          </div>

          {/* Status Messages */}
          {mutation.isSuccess && (
            <div className="p-4 rounded-2xl bg-green-100 text-green-800 border border-green-300">
              <p className="font-semibold text-center">Login successful! Redirecting...</p>
            </div>
          )}

          {mutation.isError && (
            <div className="p-4 rounded-2xl bg-red-100 text-red-800 border border-red-300">
              <p className="text-center">
                {mutation.error?.response?.data?.message || 'Invalid email or password'}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full px-4 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full font-bold text-lg hover:from-teal-500 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide"
          >
            {mutation.isPending ? 'Logging in...' : 'Login'}
          </button>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600 mt-6">
            Don't have account?{' '}
            <Link to="/signup" className="text-cyan-500 hover:text-cyan-600 font-semibold">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
