import * as React from "react";
import { useId } from "react";
import { LockIcon, MailIcon, GithubIcon, GoogleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LoginFormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, className }) => {
  const id = useId();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    } else {
      console.log("Form gönderildi");
    }
  };

  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardHeader className="space-y-1">
        <div className="flex justify-center mb-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border">
            <LockIcon className="h-5 w-5 text-foreground" />
          </div>
        </div>
        <CardTitle className="text-xl text-center">Tekrar Hoşgeldiniz</CardTitle>
        <CardDescription className="text-center">
          Hesabınıza giriş yapmak için bilgilerinizi girin
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`${id}-email`}>E-posta</Label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id={`${id}-email`} 
                placeholder="ad@ornek.com" 
                type="email" 
                className="pl-10"
                required 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${id}-password`}>Şifre</Label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id={`${id}-password`} 
                placeholder="••••••••" 
                type="password" 
                className="pl-10"
                required 
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id={`${id}-remember`} />
              <Label 
                htmlFor={`${id}-remember`} 
                className="text-sm font-normal text-muted-foreground"
              >
                Beni hatırla
              </Label>
            </div>
            <a 
              href="#" 
              className="text-sm text-primary underline-offset-4 hover:underline"
            >
              Şifremi unuttum?
            </a>
          </div>
          <Button type="submit" className="w-full">
            Giriş Yap
          </Button>
        </form>
      </CardContent>
      <div className="relative px-6 py-2">
        <div className="absolute inset-0 flex items-center px-6">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-muted-foreground">
            Veya şununla devam et
          </span>
        </div>
      </div>
      <CardFooter className="flex flex-col gap-2 pt-0">
        <Button variant="outline" className="w-full" type="button">
          <GithubIcon className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button variant="outline" className="w-full" type="button">
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Hesabınız yok mu?{" "}
          <a href="#" className="text-primary underline-offset-4 hover:underline">
            Kaydol
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

const LoginFormDemo = () => {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center p-4 bg-muted/40">
      <LoginForm />
    </div>
  );
};

export default LoginFormDemo;