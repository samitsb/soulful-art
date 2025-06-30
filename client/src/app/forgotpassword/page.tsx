import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Label } from '@radix-ui/react-label'
import { Form } from 'formik'

import { Mail } from 'lucide-react'
import React from 'react'




const forgotPassword = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#FF6F61] via-white to-[#CC5500] flex item-center justify-center pt-30'>
        <div className=" w-full max-w-xl">
        
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm ">
          <CardHeader className="text-center pb-1 pl-2">
            <CardTitle className="text-2xl font-bold text-gray-800">Forgot Password</CardTitle>
          </CardHeader>

          <CardContent>
                        
                <form className="space-y-9">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-0 top-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        
                    </div>
                    
                  </div>
                </form>                
            
            
          </CardContent>
        </Card>
      </div>    
     </div>
  )
}

export default forgotPassword