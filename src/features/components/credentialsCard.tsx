// import { useAuth } from "../hooks/use-Auth.ts";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input.tsx";
// import { UsernameSchema,usernameSchema } from "../schemas/usernameCredentialSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema, PasswordSchema } from "../schemas/passwordCredentialsSchema.ts";
// import { useUpdateUsername } from "../hooks/use-updateUsername.ts";
import { useUpdatePassword } from "../hooks/use-updatePassword.ts";
import { Link } from "@tanstack/react-router";
export function CredentialsCard(){
    // const {data: auth} = useAuth();
    // const formUser = useForm<UsernameSchema>({
    //     resolver: zodResolver(usernameSchema),
    //     defaultValues: {
    //       username: "",
    //       newUsername: "",
    //     },
    //   });
    const formPassword = useForm<PasswordSchema>({
        resolver: zodResolver(passwordSchema),
        defaultValues:{
            password: "",
            newPassword: "",
            confirmNewPassword: "",
        }
    })
    // const {mutate: updateUsername} = useUpdateUsername()
    const {mutate: updatePassword} = useUpdatePassword()
    
    // function submitUsername(values:UsernameSchema){
    //     updateUsername(values.newUsername)
    //     console.log("Updated Username: ",values.newUsername)
    //     formUser.reset()
    // }

    function submitPassword(values:PasswordSchema){
        if(values.newPassword !== values.confirmNewPassword){
            formPassword.setError("confirmNewPassword", {
                message: "Passwords do not match.",
            });
            return;
        }
        if(values.password === values.newPassword){
            formPassword.setError("confirmNewPassword", {
                message: "Can not update to same password.",
            });
            return;
        }
        const password = values.newPassword
        console.log("Update Password: ",password)
        updatePassword({password})
        
        formPassword.reset()
    }
    // function clearUsername(){
    //     formUser.reset()
    // }
    function clearPassword(){
        formPassword.reset()
    }
    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-50">    
            <Card className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] shadow-lg rounded-lg bg-white">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Update Credentials</CardTitle>
                        <Link to = '/dashboard'>
                            <Button>Back</Button>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                <Form {...formPassword}>
                    <div className="text-xl font-medium text-gray-700 mb-4">
                        <CardTitle>Update Password</CardTitle> 
                    </div>
                <div>
                        <form onSubmit={formPassword.handleSubmit(submitPassword)}>
                            <div className="mb-2">
                            <FormField
                            control={formPassword.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className = "w-full">
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}/>
                            </div>
                            <div className="mb-2">
                            <FormField
                            control={formPassword.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem className = "w-full">
                                    <FormControl>
                                        <Input type="password" placeholder="New Password" {...field} />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}/>
                            </div>
                            <div className="mb-2">
                            <FormField
                            control={formPassword.control}
                            name="confirmNewPassword"
                            render={({ field }) => (
                                <FormItem className = "w-full">
                                    <FormControl>
                                        <Input type="password" placeholder="Confirm New Password" {...field} />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}/>
                            </div>
                            <div className="flex justify-between">
                                <Button type = 'reset' onClick ={clearPassword}>Reset</Button>
                                <Button type = 'submit' >Submit</Button>
                            </div>
                            
                        </form>
                        
                </div>
                </Form>            
                </CardContent>
            </Card>
        </div>
    )
}