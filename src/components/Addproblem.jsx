import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


export default function Addproblem() {
 
  const [formData , setFormData ] = useState({
    dropdown1:'',
    dropdown2:'',
    dropdown3:'',
    problemName:'',
    heading: '',
    discription:'',
    constrain:'',
    sampleInput:'',
    sampleOutput:''
  })

  const [points, setPoints] = useState('3')
  const [difficulty, setDifficulty] = useState('biginner')


  const handleTextarea = (e) =>{
    const{name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value, 
    }))
  }
const handleDropdown = (e) => {
  const{name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value, 
    }))
}

const handleDifficultyClick = (diff) => {
  setDifficulty(diff)
}

 const handlePointsClick = (pt) => {
   setPoints(pt)
 }

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
  console.log('Points:',points);
  console.log('difficulty:', difficulty);
}


  return (
    <div className="h-full pl-16 pr-16 text-lg bg-bgBlue w text-textBlue font-raleway">
      <div className="pt-8 text-3xl font-bold text-center">Add Problem</div>
      <form onSubmit={handleSubmit}>
      <div className="flex justify-between m-7">
        <div>
          <div className="mt-10">
            <label htmlFor="" className="">
              Domain{" "}
            </label>
            <div className="">
              <select
                name="dropdown1"
                value= {formData.dropdown1}
                onChange={handleDropdown}
                
                className="py-3 bg-blue-200 rounded h-11 w-80"
                >
                  <option value="">Domain</option>
                <option className="py-2 bg-blue-100"     value="javaScript ">
                 <div className="flex justify-center ">
                  <div >Java Script</div>
                  <div> ID = 101</div>  </div>
                  </option>
                <option className="py-2 bg-blue-100"   value="java">Java </option>
                <option className="py-2 bg-blue-100"   value="python">Python </option>
                <option className="py-2 bg-blue-100"   value="c">C </option>
                <option className="py-2 bg-blue-100"   value="c++">C++ </option>
                <option className="py-2 bg-blue-100"   value="net"> .NET </option>
                <option className="py-2 bg-blue-100"   value="html">HTML </option>
                <option className="py-2 bg-blue-100"   value="css">CSS </option>
              </select>
            </div>
          </div>

          <div className="mt-10">
            <label htmlFor="" className="">
              Topic{" "}
            </label>
            <div className="">
              <select
                name="dropdown2"
                value= {formData.dropdown2}
                onChange={handleDropdown}
                className="bg-blue-200 rounded text-start h-11 w-80"
                
                >
                 <option className="py-5 bg-blue-100 " value="">Topic</option>
                <option className="py-5 bg-blue-100 " value="topic1">Topic 1</option>
                <option  className="py-2 bg-blue-100"  value="topic2">Topic 2</option> 
                <option  className="py-2 bg-blue-100"  value="topic3">Topic 3</option> <div></div>
                <option  className="py-2 bg-blue-100"  value="topic4">Topic 4</option> <div></div>
                <option  className="py-2 bg-blue-100"  value="topic5">Topic 5</option> <div></div>
                <option  className="py-2 bg-blue-100"  value="topic6">Topic 6</option> <div></div>
                <option  className="py-2 bg-blue-100"  value="topic7">Topic 7</option> <div></div>
                <option  className="py-2 bg-blue-100"  value="topic8">Topic 8</option> <div></div>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="m-10">
            <label htmlFor="dropdown3"> Problem ID </label>
            <div>
              <select
                name="dropdown3"
                value= {formData.dropdown3}
                onChange={handleDropdown}
                className="py-3 bg-blue-200 rounded h-11 w-80"
                
              >
                <option className="py-2 bg-blue-100"  >ID = 101</option>
                <option className="py-2 bg-blue-100"  >ID = 102</option>
                <option className="py-2 bg-blue-100"  >ID = 103</option>
                <option className="py-2 bg-blue-100"  >ID = 104</option>
                <option className="py-2 bg-blue-100"  >ID = 105</option>
                <option className="py-2 bg-blue-100"  >ID = 106</option>
                <option className="py-2 bg-blue-100"  >ID = 107</option>
                <option className="py-2 bg-blue-100"  >ID = 108</option>
              </select>
            </div>
          </div>

          <div>
            <div className="m-10 ">
              <div> Problem Name </div>
              <div className="">
                <input 
                name="problemName"
                value={formData.problemName}
                onChange={handleTextarea}

                  className="w-full pl-5 text-sm rounded-md outline-none resize-none h-11 bg-inputBg border-textBlue focus:placeholder:text-textBlue placeholder-opacity-80"
                  placeholder="Enter Domain ID..."
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <div className="text-2xl font-bold">Heading:</div>

          <div>
            <textarea 
            name="heading"
            value={formData.heading}
            onChange={handleTextarea}
              className="rounded-md resize-none bg-inputBg outline-none w-full text-[#3D4E74]  p-5 pl-5 pt-5 text-lg custom-scrollbar"
              placeholder="Enter heading here..."
            ></textarea>
          </div>
        </div>
        <div className="mt-14 ">
          <div className="text-2xl font-bold">Discription :</div>
          <div>
            <textarea 
             name="discription"
             value={formData.discription}
             onChange={handleTextarea}
              className="rounded-md h-40 outline-none resize-none bg-inputBg w-full text-[#3D4E74]  p-5 pl-5 pt-5 text-lg custom-scrollbar"
              placeholder="Enter your Discription here... "
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div>
          <div className="mt-4 text-2xl font-semibold" htmlFor="">
            Difficulty
          </div>
          <div className="px-16 py-5 text-lg rounded-md w-72 min-w-96 h-117 bg-inputBg">
            <div>
           <div   
            onClick={() => handleDifficultyClick('beginner')}
          className={`w-5/6 bg-bgBlue p-2 rounded font-bold text-center hover:border border-blue-600 text-lg mb-4 mr-1 ${
            difficulty === 'beginner' ? 'selected' : ''
          }`}
          style={{
            boxShadow: difficulty === 'beginner' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
            backgroundColor: difficulty === 'beginner' ? '#699EDB' : '#F2F3FF',
          }}
        >
                Beginner{" "}
              </div>
              <div
          onClick={() => handleDifficultyClick('intermediate')}
          className={`w-5/6 bg-bgBlue p-2 rounded font-bold text-center hover:border border-blue-600 text-lg mb-4 mr-1 ${
            difficulty === 'intermediate' ? 'selected' : ''
          }`}
          style={{
            boxShadow: difficulty === 'intermediate' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
            backgroundColor: difficulty === 'intermediate' ? '#699EDB' : '#F2F3FF',
          }}
        >
          Intermediate
        </div>
        <div
          onClick={() => handleDifficultyClick('advanced')}
          className={`w-5/6 bg-bgBlue p-2 rounded font-bold text-center hover:border border-blue-600 text-lg mb-4 mr-1 ${
            difficulty === 'advanced' ? 'selected' : ''
          }`}
          style={{
            boxShadow: difficulty === 'advanced' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
            backgroundColor: difficulty === 'advanced' ? '#699EDB' : '#F2F3FF',
          }}
        >
          Advanced
        </div>
        <div
          onClick={() => handleDifficultyClick('master')}
          className={`w-5/6 bg-bgBlue p-2 rounded font-bold text-center hover:border border-blue-600 text-lg mb-4 mr-1 ${
            difficulty === 'master' ? 'selected' : ''
          }`}
          style={{
            boxShadow: difficulty === 'master' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
            backgroundColor: difficulty === 'master' ? '#699EDB' : '#F2F3FF',
          }}
        >
          Master
        </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-4 text-2xl font-semibold">Points </div>
          <div className="px-16 py-5 text-lg rounded-md w-52 min-w-96 h-117 bg-inputBg">
            <div>
            <div   onClick={() => handlePointsClick('3')}
          className={`w-5/6 bg-bgBlue p-2 rounded font-bold text-center hover:border border-blue-600 text-lg mb-4 mr-1 ${
            points === '3' ? 'selected' : ''
          }`}
          style={{
            boxShadow: points === '3' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
            backgroundColor: points === '3' ? '#699EDB' : '#F2F3FF',
          }}
        >
                3{" "}
              </div>
              <div
          onClick={() => handlePointsClick('5')}
          className={`w-5/6 bg-bgBlue p-2 rounded font-bold text-center hover:border border-blue-600 text-lg mb-4 mr-1 ${
            points === '5' ? 'selected' : ''
          }`}
          style={{
            boxShadow: points === '5' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
            backgroundColor: points === '5' ? '#699EDB' : '#F2F3FF',
          }}
        >
          5
        </div>
        <div
          onClick={() => handlePointsClick('8')}
          className={`w-5/6 bg-bgBlue p-2 rounded font-bold text-center hover:border border-blue-600 text-lg mb-4 mr-1 ${
            points === '8' ? 'selected' : ''
          }`}
          style={{
            boxShadow: points === '8' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
            backgroundColor: points === '8' ? '#699EDB' : '#F2F3FF',
          }}
        >
          8
        </div>
        <div
          onClick={() => handlePointsClick('12')}
          className={`w-5/6 bg-bgBlue p-2 rounded font-bold text-center hover:border border-blue-600 text-lg mb-4 mr-1 ${
            points === '12' ? 'selected' : ''
          }`}
          style={{
            boxShadow: points === '12' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
            backgroundColor: points === '12' ? '#699EDB' : '#F2F3FF',
          }}
        >
          12
        </div>
            </div>
          </div>
        </div>
      </div>

    <div>
            <div className="mt-6 text-2xl font-semibold ">Add Test Case </div>
        <div className="w-full px-16 py-5 text-lg rounded-md min-w-96 h-117 bg-inputBg">
            <div className="mt-10">
            <label className="mt-10 font-bold">Test Case ID:</label>
            <input className="h-16 px-3 ml-4 font-medium border-2 outline-none resize-none w-96 rounded-xl" placeholder="Enter Test Case ID here "></input>
            </div>
            <div className="mt-5 ">
                <label className="font-bold ">Input:</label>
                <div><textarea 
                 className="w-full border-2 outline-none resize-none h-28 rounded-xl" placeholder="Enter output here "></textarea></div> 
                <div className="mt-5 ">
                <label  className="font-bold">Output:</label>
                <div><textarea 
                className="w-full border-2 outline-none resize-none h-28 rounded-xl"
                 placeholder="Enter output here "></textarea></div> 
                 <div className="flex justify-end p-5 ">
        <div className="flex items-center text-xl font-bold bg-[#7EE46D] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded mr-6">
          <div>
          <FaPlus />
          </div>
          <div className="pl-2">Add Test Cases </div>
        </div> </div>
                </div>
                <div className="w-5/6 m-auto mt-6 border border-slate-400 "></div>
                <div>
                    <div className="mt-4 ">
                    <div className="font-bold ">Test Case </div>
                </div>
            </div>
        </div>
</div>
<div className="mt-10 ">
          <div className="text-2xl font-bold">Constrain :</div>

          <div>
            <textarea
             name="constrain"
             value={formData.constrain}
             onChange={handleTextarea}
            className="rounded-md bg-inputBg  resize-none w-full text-[#3D4E74] outline-none p-5 pl-5 pt-5 text-lg h-32 custom-scrollbar"
              placeholder="Enter constrains  here..."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between">
            <div className="flex flex-col justify-between mt-5">
              <div className="">
                <div className="text-xl font-bold">Sample Input :</div>
                <textarea 
                 name="sampleInput"
                 value={formData.sampleInput}
                 onChange={handleTextarea}
                
                placeholder="Sample input... "
                className="h-20 pt-2 pl-5 text-lg rounded-md outline-none resize-none min-w-96 bg-inputBg">
                </textarea>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-5">
              <div className="flex flex-col justify-around">
                <div className="">
                  <div className="text-xl font-bold"> Sample Output :</div>
                  
                  <textarea 
                  name="sampleOutput"
                  value={formData.sampleOutput}
                  onChange={handleTextarea}
                  placeholder="Sample output..."
                  className="h-20 pt-2 pl-5 text-lg font-medium rounded-md outline-none resize-none min-w-96 h-117 bg-inputBg">
                
                  </textarea>
                </div>
              </div>
        </div>
     </div>
     <div className="flex justify-end p-5 ">
        <div className="flex items-center text-xl font-bold bg-[#7EE46D] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded mr-6">
          <div>
          <FaPlus />
          </div>
          <button type="submit" className="pl-2">Add Problem  </button>
        </div> </div>
                
     </div>
     <div className="w-5/6 m-auto mt-6 border border-slate-400 "></div>
      <div className="pb-16 mt-8 text-xl font-bold text-center">
        Created on: 12:05 AM | 11-25-2023
      </div>
      </form>
     </div>
  );
}
