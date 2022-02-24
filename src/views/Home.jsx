import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from 'react-router-dom';
import {useStore} from '../utlis/customHooks/useStore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import { Divider } from '@mui/material';
import TotalRentees from '../components/TotalRentees';
import InProgressRentees from '../components/InProgressRentees';

export default function Home() {
    const store = useStore()
    const [isNewStates, setIsNewStates] = React.useState()
    const [step, setStep] = React.useState(1);
    const [data, setData] = React.useState({})

    const handleInProgressRenteeAdd = (e)=> {
        e.preventDefault()
        let object = {}
        let formData = new FormData(e.target);
        formData.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object['mobileNumber'])
        setData(object)
       // store.addInProgressRentee(object['mobileNumber'])
        setStep(2)
    }

    const handleInProgressAmountAdd = (e)=> {
        e.preventDefault()
        let object = {}
        let formData = new FormData(e.target);
        formData.forEach(function(value, key){
            object[key] = value;
        });
        setData({
            ...data,
            'rentPerMonth' : object['rentPerMonth']
        })
        store.addInProgressRentee(data['mobileNumber'])
        setStep(1)
    }


    return (
        <div className="px-5">
           <p className="mb-5">Add Rentees <ArrowForwardIcon /></p>
            {step == 1 && <form onSubmit={handleInProgressRenteeAdd}>
              <div class="mb-6">
                <label for="mobileNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                <input type="number" id="mobileNumber" name='mobileNumber' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Rentee's Mobile" required />
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
            </form>}
            {step === 2 && <form onSubmit={handleInProgressAmountAdd}>
              <div class="mb-6">
                <label for="rentPerMonth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How Much Rent They Have To Pay/Month?</label>
                <input type="number" id="rentPerMonth" name='rentPerMonth' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Rent Amount" required />
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>}
            <Divider />
            <InProgressRentees />
            <TotalRentees/>

        </div>
    )
}
