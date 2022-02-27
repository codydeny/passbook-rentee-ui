import ArrowForward from '@mui/icons-material/ArrowForward'
import Verified from '@mui/icons-material/Verified'
import { Alert } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../../utlis/customHooks/useStore'

import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import {CircularProgress } from '@mui/material';
import { ArrowBackRounded, ArrowRight } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export default function Onboarding(props) {
    const [step, setStep] = React.useState(1)
    const [provider, setProvider] = React.useState('NONE')
    const [data, setData] = React.useState({})
    const store = useStore()
    const [subStep, setSubStep] = React.useState(1)
  return (
    <div>

    {step === 1 && <div class="p-4 max-w-xl ">
        <form class="space-y-6" onSubmit={(e)=> {
              let formData = new FormData(e.target);
              formData = Object.fromEntries(formData)
            e.preventDefault()
            setData({
                ...data,
                ...formData
            })
            setStep(2)
        }}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
        <div>
        <label for="moileNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Mobile Number</label>
        <input type="number" name="moileNumber" id="moileNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="9027245324" required="" />
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next <ArrowForward sx={{fontSize : '19px'}}/> </button>
        </form>
    </div>}

    {step === 2 && <div class="p-4 max-w-sm ">
        <form class="space-y-6"  onSubmit={async (e)=> {
            e.preventDefault()
            await store.initConsent(data.moileNumber)
            setStep(3)
        }}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">KYC Verification</h3>

        <div>
        <label for="propertyAddress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Full Name</label>
        <input type="text" name="propertyAddress" id="propertyAddress" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Akshay Rawat" required="" />
        </div>

        <div>
        <label for="propertyName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your PAN</label>
        <input type="text" name="propertyName" id="propertyName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ABCTY1234D" required="" />
        </div>
        
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Upload PAN</label>
            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Optionally upload a photo</div>
        </div>

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Complete Verification </button>
        </form>
    </div>}

    {step === 3 &&
          <div className="container text-center my-5">

    <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Provide Consent </h3>
            <ul role="list" class="my-7 space-y-5">
                <li class="flex space-x-3">
               
                    <PlayArrowIcon className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"/>
                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Account Statements of FY </span>
                </li>
                <li class="flex space-x-3">
                    <PlayArrowIcon className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"/>

                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Your Full Name</span>
                </li>
                <li class="flex space-x-3">
                    <PlayArrowIcon className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"/>

                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Mobile Number</span>
                </li>
            </ul>
            {subStep === 1 && <button onClick={(e)=> {
              e.preventDefault()
              setSubStep(2)
              setTimeout(()=>{
                window.location.href = `https://fiu-uat.setu.co/consents/webview/${store.state.consent.consentResponse.url``}`
               console.log(store.state.consent.consentResponse.url)
              }, 1000)
            }}
             class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Provide Consent</button>}
            {subStep === 2 && <Alert icon={false} severity="info" className="flex flex-row justify-center"> <span>Redirecting to Setu</span> <CircularProgress size={14} className="ml-4" sx={{marginBottom : '-2px'}} /></Alert>}
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Didn't request? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Report here</a>
            </div>
            </form>
            </div>

          </div>
          }

    {/* {step === 4 && <div className="container text-center my-5">
          <Verified sx={{fontSize : '96px'}} className="text-green-500 my-5"/>
          <p className='text-sm text-gray-500 mb-5'>KYC Verification Successful</p>
          <Link to="/" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home <ArrowForward sx={{fontSize : '19px'}}/> </Link>
      </div>} */}

    </div>
  )
}
