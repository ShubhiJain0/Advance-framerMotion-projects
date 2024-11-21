import React, { useState } from 'react'
import {motion} from 'framer-motion'
const ProgressSteps = () => {
  
  const steps = [
    {
      title: "step 1",
      description: "this is step one",
    },

    {
      title: "step 2",
      description: "this is step two",
    },
    {
      title: "step 3",
      description: "this is step three",
    },
    {
      title: "step 4",
      description: "this is step four",
    },
  ];
 const [currentStep, setCurrentStep] = useState(0);

const handleNext = ()=>{
  
  setCurrentStep((currentStep+1)<steps.length? currentStep+1 : currentStep)
}

const handlePrev =()=>{
  setCurrentStep(
    currentStep - 1 >= 0 ? currentStep - 1 : currentStep
  );
}

  return (
    <div className="flex flex-col">
      <div>
        {/* rounded  */}

        <div className="w-[30rem] flex flex-col">
          <div className="flex justify-around items-center">
            {steps.map((step, index) => (
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-gray-400 rounded-full flex justify-center items-center">
                    {index < currentStep ? (
                      <div className=" w-8 h-8 bg-blue-900 rounded-full"></div>
                    ) : index == currentStep ? (
                      <div className=" w-8 h-8 bg-blue-500 rounded-full"></div>
                    ) : null}
                  </div>

                  <p>{step.title}</p>
                </div>

                {index < steps.length - 1 && index < currentStep ? (
                  <motion.div
                    className={` h-1 bg-blue-400 mb-5 ml-2`}
                    style={{
                      width: `${(currentStep / (steps.length - 1)) * 120}px`,
                      transition: "width 2s ease",
                    }}
                  ></motion.div>
                ) : null}
              </div>
            ))}
          </div>

          <motion.div className="border border-gray-400 rounded-lg flex justify-center items-center mt-4 p-4">
            <div>
              <h1 className="text-2xl font-bold text-center">
                {steps[currentStep].title}
              </h1>
              <p className="text-xl font-thin text-center">
                {steps[currentStep].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" w-[100%] flex justify-evenly mt-4">
        <div
          className={`py-2 px-4 bg-blue-400 rounded-xl ${
            currentStep === 0 ? "opacity-50" : ""
          }`}
          onClick={handlePrev}
        >
          Previous
        </div>
        <div
          className={`py-2 px-4 bg-blue-400 rounded-xl ${
            currentStep === steps.length-1 ? "opacity-50" : ""
          }`}
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default ProgressSteps