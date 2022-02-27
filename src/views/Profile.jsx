import { Avatar } from '@mui/material'
import React from 'react'
import { Outlet, useParams, Routes, Route, Link } from 'react-router-dom'
import useStore from '../utlis/customHooks/useStore'
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import Onboarding from '../components/onboarding/Onboarding';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ShareIcon from '@mui/icons-material/Share';

export default function Profile() {
const {id} = useParams()
const store = useStore()
const [step, setStep] = React.useState(2)

  return (
  <div>
      {step === 1 && <div class="p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
          <Onboarding onNext={()=> {
              setStep(2)
          }}/>
      </div>}

      {step === 2 && <div class="p-6 md:w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <div className="max-w-xl ">
          <div className="flex flex-col items-center pb-10">
          <div className="mb-4">
              <Avatar
                  circle
                  className="w-full h-full"
                  style={{ background: '#bfdbfe', color: '#3b82f6', width : '90px', height : '90px' }}
              >
                  <p className="text-6xl font-medium">A</p>
              </Avatar>
          </div>
            <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Akshay Rawat</h3>
            <div className="flex mt-4 space-x-3 lg:mt-6">
              <div className="flex items-center text-green-500 font-bold text-lg">
                  9.3 <StarIcon sx={{fontSize : '22px', marginLeft : '4px'}}/>
              </div>
            </div>
            <div className="flex mt-4 space-x-3 lg:mt-6">
              <Link to="/profile" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><ShareIcon/> Share Rent History</Link>
            </div>
            <div className="flex items-center text-gray-300 text-lg mt-1">
                  <p className="text-sm text-muted">You can share your rental history to get loans!</p>
            </div>
          </div>
        </div>

        <div>

        <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Rental History</h3>
            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
            </a>
            </div>
            <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                {['Jan','Feb','March','April','May','June','July','August','Sept','Oct'].map((i, val) => (
                <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <Avatar
                          circle
                          className="w-full h-full"
                          style={{ background: '#bfdbfe', color: '#3b82f6', width : '40px', height : '40px' }}
                      >
                          <p className="text-2xl font-medium">
                              <CallMadeIcon />
                          </p>
                    </Avatar>
                </div>
                <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                1th {val} 2021
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    { i === 5 && <p className="text-red-500">
                        Unpaid
                    </p>}
                    {i === 1 && <p className="text-blue-500">
                        <Link to="/profile/payments">Payment Due</Link>
                    </p>}

                    {!(i === 1 || i === 5) && <p className="text-green-500"> Paid </p>}
                </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹ 15000
                </div>
                </div>
                </li>
                ))}
            </ul>
            </div>
            </div>

        </div>
      </div>}
  </div>
  )
}
