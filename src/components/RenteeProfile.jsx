import { Avatar } from '@mui/material'
import React from 'react'
import { Outlet, useParams, Routes, Route, Link } from 'react-router-dom'
import useStore from '../utlis/customHooks/useStore'
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

export default function RenteeProfile() {
const {id} = useParams()
const store = useStore()

  return (
    <div>

<div class="p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pay rent on time and earn credit score.</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Do you find it hard to convince landlords ? You can now use your previous rental history to convince them.</p>

        <div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
            <div className="flex items-center text-gray-300 text-lg mt-1">
                  <p className="text-sm text-muted">Excellent Rental Score</p>
            </div>
            <div className="flex mt-4 space-x-3 lg:mt-6">
              <Link to="/onboarding" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Your Score</Link>
              <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">Learn More</a>
            </div>
          </div>
        </div>


        <div id="accordion-collapse" data-accordion="collapse" className="my-5 ">
        <h2 id="accordion-collapse-heading-1">
        <button type="button" class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
        <span>What is my score based on?</span>
        <svg data-accordion-icon="" class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        </h2>
        <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
        <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Your rental score is based on how often you pay your rents on time.</p>
        <p class="text-gray-500 dark:text-gray-400">
        If you just pay your rent on time, you will get a high score on a 10 pointer scale which you can use to convince future landlords.
        </p>
        </div>
        </div>

        {/* <div className="flex mt-4 space-x-3 lg:mt-6 mx-auto justify-center">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect Setu</a>
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">Send Alert</a>
          </div> */}

        </div>

        </div>

        {/* <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
              </button>
              <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                  </li>
                </ul>
              </div>
            </div>
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
              <span className="text-sm text-gray-500 dark:text-gray-400">9027282482</span>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <div className="flex items-center text-green-500 font-bold text-lg">
                    9.3 <StarIcon sx={{fontSize : '22px', marginLeft : '4px'}}/>
                </div>
              </div>
              <div className="flex items-center text-gray-300 text-lg mt-1">
                    <p className="text-sm text-muted">Rental Score</p>
              </div>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect Setu</a>
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">Send Alert</a>
              </div>
            </div>
          </div> */}
    </div>
  )
}
