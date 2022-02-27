import React from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import { Alert, CircularProgress } from '@mui/material';
import { ArrowBackRounded, ArrowRight } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function ConsentPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [step, setStep] = React.useState(1)
  return (<div className="my-5 mx-1">

    {<>
      {searchParams.get('success') && searchParams.get('success') == 'true' && <div className="container text-center my-5">
          <VerifiedIcon sx={{fontSize : '96px'}} className="text-green-500 my-5"/>
          <p className='text-sm text-gray-500'>Thank You For Providing Your Consent</p>
          <p><Alert severity="success">Your Consent Id is {searchParams.get('id')}</Alert> </p>
      </div>}

      {searchParams.get('success') && searchParams.get('success') == 'false' && <div className="container text-center my-5">
          <GppMaybeIcon sx={{fontSize : '96px', color : '#f97316'}} className="text-orange-400 my-5"/>
          <p>Some Error Has Occurred</p>
      </div>}

      {searchParams.get('success') && <div className="container text-center mx-auto">
          <Link to="/"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Back <ArrowRight/> </Link>
      </div>}
    </>}



    {searchParams.get('success') == null &&
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
        {step === 1 && <button onClick={(e)=> {
          e.preventDefault()
          setStep(2)
          setTimeout(()=>{
            window.location.href = `https://fiu-uat.setu.co/consents/webview/26366424-7ce1-44db-bed7-fbfe8c960718`
          }, 1000)
        }} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Provide Consent</button>}
        {step === 2 && <Alert icon={false} severity="info" className="flex flex-row justify-center"> <span>Redirecting to Setu</span> <CircularProgress size={14} className="ml-4" sx={{marginBottom : '-2px'}} /></Alert>}
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Didn't request? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Report here</a>
        </div>
        </form>
        </div>

      </div>
      }

    </div>
  )
}
