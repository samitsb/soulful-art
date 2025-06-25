'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Palette, ShoppingBag, User, Mail, Lock, Phone, RouteOffIcon, Router } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';


interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  role: 'buyer' | 'artist';
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  phone: Yup.string()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
  role: Yup.string()
    .oneOf(['buyer', 'artist'], 'Please select a role')
    .required('Role is required'),
});

const Register = () => {
  const initialValues: RegisterFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'buyer',
  };

    const handleSubmit = async(values: typeof initialValues, { setSubmitting }: any) => {
    const {data}= await  axios.post(process.env.NEXT_PUBLIC_API_URL+'/register', values)
    toast(data)
    // Simulate API call
    setTimeout(() => {

      setSubmitting(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6F61] via-white to-[#CC5500] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Palette className="h-10 w-10 text-burnt-orange-600 mr-2" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-burnt-orange-600 to-deep-coral-600 bg-clip-text ">
              Soulful-Arts
            </h1>
          </div>
          <p className="text-lg text-gray-600">Join our creative community</p>
        </div>

        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800">Create Your Account</CardTitle>
            <CardDescription className="text-gray-600">
              Start your artistic journey with us today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting,values, setFieldValue, touched, errors }) => (
                <Form className="space-y-6">
                  {/* Role Selection */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700">I want to join as:</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 ${
                          values.role === 'buyer'
                            ? 'border-burnt-orange-500 bg-burnt-orange-50'
                            : 'border-gray-200 hover:border-burnt-orange-300'
                        }`}
                        onClick={() => setFieldValue('role', 'buyer')}
                      >
                        <div className="flex items-center space-x-3">
                          <ShoppingBag className={`h-6 w-6 ${values.role === 'buyer' ? 'text-burnt-orange-600' : 'text-gray-400'}`} />
                          <div>
                            <div className="font-medium text-gray-900">Art Buyer</div>
                            <div className="text-sm text-gray-500">Discover and collect art</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 ${
                          values.role === 'artist'
                            ? 'border-deep-coral-500 bg-deep-coral-50'
                            : 'border-gray-200 hover:border-deep-coral-300'
                        }`}
                        onClick={() => setFieldValue('role', 'artist')}
                      >
                        <div className="flex items-center space-x-3">
                          <Palette className={`h-6 w-6 ${values.role === 'artist' ? 'text-deep-coral-600' : 'text-gray-400'}`} />
                          <div>
                            <div className="font-medium text-gray-900">Artist</div>
                            <div className="text-sm text-gray-500">Share and sell your art</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ErrorMessage name="role" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Field
                          as={Input}
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          className={`pl-10 ${
                            touched.firstName && errors.firstName 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'focus:border-burnt-orange-500'
                          }`}
                        />
                      </div>
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Field
                          as={Input}
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          className={`pl-10 ${
                            touched.lastName && errors.lastName 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'focus:border-burnt-orange-500'
                          }`}
                        />
                      </div>
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className={`pl-10 ${
                          touched.email && errors.email 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'focus:border-burnt-orange-500'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Field
                        as={Input}
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className={`pl-10 ${
                          touched.phone && errors.phone 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'focus:border-burnt-orange-500'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Password Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Create a password"
                          className={`pl-10 ${
                            touched.password && errors.password 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'focus:border-burnt-orange-500'
                          }`}
                        />
                      </div>
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Field
                          as={Input}
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          className={`pl-10 ${
                            touched.confirmPassword && errors.confirmPassword 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'focus:border-burnt-orange-500'
                          }`}
                        />
                      </div>
                      <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F9A51D] hover:bg-orange-700 text-primary-foreground font-semibold py-3 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </Button>

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="text-gray-600">
                      Already have an account?{' '}
                      <a 
                        href="/login" 
                        className="font-medium text-burnt-orange-600 hover:text-burnt-orange-700 transition-colors"
                      >
                        Sign in here
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

export default Register;