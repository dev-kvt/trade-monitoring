'use client';
import InputField from "@/components/forms/InputField";
import {useForm} from "react-hook-form";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/forms/SelectField";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import { INVESTMENT_GOALS , RISK_TOLERANCE_OPTIONS , PREFERRED_INDUSTRIES } from "@/lib/constants";
import { Control } from "react-hook-form";
const  Signup =() => {
 const {
    register,
    control,
    handleSubmit,
    formState: { errors  , isSubmitting},
  } = useForm<SignUpFormData>({
     defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
  });

const onSubmit = async(data:SignUpFormData) =>{}

  return (
   <>
   <h1 className="form-title"> Sign Up && Personlize</h1>
   <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >
    <InputField
      name="fullname"
      label="Full Name"
      placeholder="Your Name"
      register = {register}
      error={errors.fullName}
      validation={{ required:"Full Name is Required" , minLength:2}}
    />
    <InputField
      name="email"
      label="Email"
      placeholder="contact@potato-trades.com"
      register = {register}
      error={errors.email}
     validation={{ required: 'Email Address is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }}
    />
    <InputField
      name="password"
      label="Password"
      placeholder="Enter a strong password"
      type="password"
      register={register}
      error={errors.password}
      validation={{ required: 'Password is required', minLength: 8 }}
    />
   <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />

                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />

                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />

   <Button type="submit" disabled={isSubmitting} className="yellow-btn mt-5 w-full ">
      {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
   </Button>

   </form>
   </>
  );
}

export default Signup