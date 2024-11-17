'use client';

import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';


type IFOrm = { 
    type: 'create' | 'update';
    data?: any
}


const schema = z.object({
    username: z
        .string()
        .min(3, { message: 'Must be at least three characters' })
        .max(20, { message: 'Cannot be more than 20 charcaters' }),
    email: z
        .string()
        .email({message: 'Pls enter a  valid email address'}),
    password: z
        .string()
        .min(8, { message: 'Must be at least 8 characters' }),
    firstName: z
        .string()
        .min(1, { message: "First name is required!" }),
    lastName: z
        .string()
        .min(1, { message: "Last name is required!" }),
    phone: z
        .string()
        .min(1, { message: "Phone is required!" }),
    address: z
        .string()
        .min(1, { message: "Address is required!" }),
    bloodType: z
        .string()
        .min(1, { message: "Blood Type is required!" }),
    birthday: z.date({ message: "Birthday is required!" }),
    sex: z.enum(["male", "female"], { message: "Sex is required!" }),
    img: z.instanceof(File, { message: "Image is required" }),
})

const TeacherForm = ({type, data}: IFOrm) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    })
  return (
    <form className='flex flex-col gap-8'>
         <h1 className="text-xl font-semibold">Create a new teacher</h1>
         <span className="text-xs text-gray-400 font-medium">Authentication Information</span>
        TeacherForm
    </form>
  )
}

export default TeacherForm;
 