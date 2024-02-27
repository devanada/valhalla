import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

import {
  CustomFormField,
  CustomFormCheckbox,
} from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import { useAuthStore } from "@/utils/states";
import { LoginSchema, loginSchema } from "@/utils/types/auth";

const Login = () => {
  const login = useAuthStore((state) => state.login);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  return (
    <Layout centerX centerY>
      <div className="mx-auto max-w-md w-full">
        <p className="font-bold mt-2 text-center text-health-blue-dark text-3xl">
          Login
        </p>
      </div>
      <Form {...form}>
        <form
          data-testid="form-login"
          onSubmit={form.handleSubmit(login)}
          className="max-w-sm space-y-4 mt-10 w-full md:max-w-md lg:max-w-lg"
        >
          <CustomFormField control={form.control} name="email" label="Email">
            {(field) => (
              <Input
                {...field}
                data-testid="input-email"
                placeholder="name@mail.com"
                type="email"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
          >
            {(field) => (
              <Input
                {...field}
                data-testid="input-password"
                placeholder="Password"
                type="password"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
          <div className="flex justify-between items-center">
            <CustomFormCheckbox
              control={form.control}
              name="remember"
              label="Remember me"
            />
          </div>
          <div className="flex flex-col mt-20 gap-6">
            <Button
              data-testid="btn-submit"
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="h-4 mr-2 animate-spin w-4" />
                  Please wait
                </>
              ) : (
                "Login"
              )}
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <Button
              data-testid="btn-navigate-register"
              variant="secondary"
              asChild
            >
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </form>
      </Form>
    </Layout>
  );
};

export default Login;
