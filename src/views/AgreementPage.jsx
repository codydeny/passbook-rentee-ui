import React from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import { Alert } from '@mui/material';
import { ArrowBackRounded, ArrowRight } from '@mui/icons-material';
import useStore from '../utlis/customHooks/useStore';

export default function AgreementPage() {
    let {id} = useParams();
    const [step, setStep] = React.useState(1)
    const store = useStore()

    React.useEffect(()=> {
        store.getAgreeement(id)
    }, [])

  return (<div className="my-5 mx-1">

    {step === 1 && <div class="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Received Rent Agreement</h3>
    <div class="flex items-baseline text-gray-900 dark:text-white">
    <span class="text-3xl font-semibold">₹</span>
    <span class="text-5xl font-extrabold tracking-tight">15000</span>
    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
    </div>

    <ul role="list" class="my-7 space-y-5">
    <li class="flex space-x-3">

    <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">1 BHK</span>
    </li>
    <li class="flex space-x-3">

    <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 People Max</span>
    </li>
    <li class="flex space-x-3">

    <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">3 Months Advanced</span>
    </li>
    <li class="flex space-x-3 line-through decoration-gray-500">

    <svg class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <span class="text-base font-normal leading-tight text-gray-500">Mess or canteen</span>
    </li>
    <li class="flex space-x-3 line-through decoration-gray-500">

    <svg class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <span class="text-base font-normal leading-tight text-gray-500">Terrace Access</span>
    </li>

    <li class="flex space-x-3 line-through decoration-gray-500">

    <svg class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <span class="text-base font-normal leading-tight text-gray-500">24×7 Security</span>
    </li>
    </ul>
    <button type="button" onClick={(e)=> {
        e.preventDefault()
        setStep(2)
    }}  class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Accept Agreement</button>
    </div>}



    {step === 2 && <div class="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Welcome</h3>
        <div className="container text-center my-5">
            <VerifiedIcon sx={{fontSize : '96px'}} className="text-green-500 my-5"/>
            <p className='text-sm text-gray-500 my-5'>You are now a tenet @ Rajeev Lodges</p>
            <p><Alert severity="success">
                Pay your rent on time, it increases your rental score.
                </Alert> </p>
        </div>

        <Link to="/profile" type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Go Back <ArrowRight/> </Link>
        </div>}
    </div>
  )
}
