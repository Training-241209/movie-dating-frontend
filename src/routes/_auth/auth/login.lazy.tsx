import { createLazyFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@/components/shared/loginform'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import logo from '@/assets/cinematchLogo.png'
import bg from '@/assets/AdobeStock_1003020937.jpeg'

export const Route = createLazyFileRoute('/_auth/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex justify-center items-center h-full">
        <Card className="w-[500px] bg-white bg-opacity-80 backdrop-blur-md ml-[1000px]">
          <CardHeader>
            <div className='flex items-center justify-between w-full'>
              <CardTitle className="text-4xl font-bold">Welcome Back!</CardTitle>
              <img src={logo} alt="Logo" className="w-[150px] h-auto self-end ml-auto" />
            </div>
            <CardDescription>Please enter your credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter>
            <p>Don't have an account? </p>
            <Link to="/auth/register" className="underline font-bold text-blue-800 ml-2">Register</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
