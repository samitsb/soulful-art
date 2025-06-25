'use client'
import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Palette, Mail, Lock, ArrowRight, Link } from 'lucide-react';
import { toast } from 'sonner';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addLoginDetails } from '@/redux/reducerslices/userSlice';
import { useRouter } from 'next/navigation';





const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const login = () => {
   const { isLoggedIn } = useSelector((state: any) => state.user);
  useEffect(()=>{
    if(isLoggedIn) router.push('/')
  },[])


  const initialValues = {
    email: '',
    password: '',
  };
  const router = useRouter()
  const dispatch = useDispatch()
  const handleSubmit = async(values: typeof initialValues, { setSubmitting }: any) => {
    const {data}= await  axios.post(process.env.NEXT_PUBLIC_API_URL+'/login', values)
    if(data?.isLoggedIn) {
      if (data.user.role === 'admin'){
        router.push('/admin/dashboard')
      }else if (data.user.role === 'seller'){
        router.push('/seller/dashboard')
      }
      else{
      router.back()
      }
    }
    toast(data?.message)
    if(data) {
      dispatch(addLoginDetails(data))
    }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6F61] via-white to-[#CC5500] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Palette className="h-10 w-10 text-[#CC5500] mr-2" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#CC5500] to-[#FF6F61] bg-clip-text ">
              Soulful-Arts
            </h1>
          </div>
          <p className="text-lg text-gray-600">Welcome back to our creative community</p>
        </div>

        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800">Log In</CardTitle>
            <CardDescription className="text-gray-600"> 
              Continue your artistic journey
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched,isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Field
                        as={Input}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={`pl-10 ${
                          errors.email && touched.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-burnt-orange-500'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Field
                        as={Input}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={`pl-10 ${
                          errors.password && touched.password
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-burnt-orange-500'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Forgot Password */}
                  <div className="flex justify-end">
                    <a 
                      href="/forgotpassword" 
                      className="text-sm "
                    >
                      Forgot your password?
                    </a>
                  </div>

                  {/* Submit Button */}
                   <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F9A51D] hover:bg-orange-700 text-primary-foreground font-semibold py-3 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? 'Creating Account...' : 'Sign In'}
                  </Button>

                  {/* Register Link */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-gray-600">
                      Don't have an account?{' '}
                      <a
                        href="/register" 
                        className=" font-medium "
                      > Create one here
                      </a>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default login ;