import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

import { CustomFormField } from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import { useAuthStore } from "@/utils/states";
import { RegisterSchema, registerSchema } from "@/utils/types/auth";

const Register = () => {
  const register = useAuthStore((state) => state.register);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      repassword: "",
      address: "",
      phone_number: "",
    },
  });

  return (
    <Layout centerX centerY>
      <div className="mx-auto max-w-md w-full">
        <p className="font-bold mt-2 text-center text-health-blue-dark text-3xl">
          Register
        </p>
      </div>
      <Form {...form}>
        <form
          data-testid="form-register"
          onSubmit={form.handleSubmit(register)}
          className="max-w-sm space-y-4 mt-10 w-full md:max-w-md lg:max-w-lg"
        >
          <CustomFormField
            control={form.control}
            name="full_name"
            label="Full Name"
          >
            {(field) => (
              <Input
                data-testid="input-full-name"
                placeholder="John Doe"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                {...field}
              />
            )}
          </CustomFormField>
          <CustomFormField control={form.control} name="email" label="Email">
            {(field) => (
              <Input
                data-testid="input-email"
                placeholder="name@mail.com"
                type="email"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                {...field}
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
                data-testid="input-password"
                placeholder="Password"
                type="password"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                {...field}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="repassword"
            label="Retype Password"
          >
            {(field) => (
              <Input
                data-testid="input-repassword"
                placeholder="Retype Password"
                type="password"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                {...field}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="address"
            label="Address"
          >
            {(field) => (
              <Input
                data-testid="input-address"
                placeholder="Address"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                {...field}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="phone_number"
            label="Phone Number"
          >
            {(field) => (
              <Input
                data-testid="input-phone-number"
                placeholder="Phone Number"
                type="tel"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                {...field}
              />
            )}
          </CustomFormField>
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
                "Register"
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
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </form>
      </Form>
    </Layout>
  );
};

export default Register;
