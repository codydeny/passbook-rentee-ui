import React from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import { Alert } from '@mui/material';
import { ArrowBackRounded, ArrowRight } from '@mui/icons-material';

export default function ConsentPage() {
    let [searchParams, setSearchParams] = useSearchParams();
  return (<div className="my-5 mx-1">
    {searchParams.get('success') && searchParams.get('success') == 'true' && <div className="container text-center my-5">
        <VerifiedIcon sx={{fontSize : '96px'}} className="text-green-500 my-5"/>
        <p className='text-sm text-gray-500'>Thank You For Providing Your Consent</p>
        <p><Alert severity="success">Your Consent Id is {searchParams.get('id')}</Alert> </p>
    </div>}

    {searchParams.get('success') && searchParams.get('success') == 'false' && <div className="container text-center my-5">
        <GppMaybeIcon sx={{fontSize : '96px', color : '#f97316'}} className="text-orange-400 my-5"/>
        <p>Some Error Has Occurred</p>
    </div>}

    <div className="container text-center mx-auto">
        <Link to="/"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Back <ArrowRight/> </Link>
    </div>

    </div>
  )
}
