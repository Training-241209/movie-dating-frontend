import { createLazyFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '@/components/shared/registerform'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Link } from "@tanstack/react-router"
import reg_bg from "@/assets/AdobeStock_652336191.jpeg"
import logo from "@/assets/cinematchLogo.png"

export const Route = createLazyFileRoute('/_auth/auth/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${reg_bg})` }}>
      <div className='flex justify-center items-center h-full'>
        <Card className="w-[500px] bg-white bg-opacity-80 backdrop-blur-md ">
          <CardHeader>
          <div className='flex items-center justify-between w-full'>
              <CardTitle className="text-4xl font-bold">Welcome!</CardTitle>
              <img src={logo} alt="Logo" className="w-[150px] h-auto self-end ml-auto" />
            </div>
            <CardDescription>Please enter your credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm/>
          </CardContent>
          <CardFooter>
            <p>Have an account? </p>
            <Link to={"/auth/login"} className="underline font-bold text-blue-800 ml-2">Login</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
