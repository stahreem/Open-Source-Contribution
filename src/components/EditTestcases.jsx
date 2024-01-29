import React, { useState } from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const EditTestcases = () => {
  const [dummyData, setDummyData] = useState({
    testcase: [
      {
        test:"Test Case-1",
        testcaseID : 101,
        testcaseInput: "this is testcase 101 A natural number greater than 1 that is not prime is called a composite number. The following are some examples of prime numbers:   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31.",
        testcaseOutput: "this is testcase output of 101 var isPrime = function(n) { if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){ return false; } for(var i = 2; i <= Math. sqrt(n); i += 1){ if(n % i === 0){ return false; } } return true; };",
      },
      {
        test:"Test Case-2",
        testcaseID : 102,
        testcaseInput: "this is testcase input of 102 A natural number greater than 1 that is not prime is called a composite number. The following are some examples of prime numbers:   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31.",
        testcaseOutput: "this is testcase output of 102 var isPrime = function(n) { if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){ return false; } for(var i = 2; i <= Math. sqrt(n); i += 1){ if(n % i === 0){ return false; } } return true; };",
      },
    {
      test:"Test Case-3",
      testcaseID : 103,
        testcaseInput: "this is testcase input of 103 A natural number greater than 1 that is not prime is called a composite number. The following are some examples of prime numbers:   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31.",
        testcaseOutput: "this is testcase output of 103 var isPrime = function(n) { if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){ return false; } for(var i = 2; i <= Math. sqrt(n); i += 1){ if(n % i === 0){ return false; } } return true; };",
      },
      {
        test:"Test Case-4",
        testcaseID : 104,
        testcaseInput: "this is testcase input of 104 A natural number greater than 1 that is not prime is called a composite number. The following are some examples of prime numbers:   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31.",
        testcaseOutput: "this is testcase output of 104 var isPrime = function(n) { if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){ return false; } for(var i = 2; i <= Math. sqrt(n); i += 1){ if(n % i === 0){ return false; } } return true; };",
      },
      {
        test:"Test Case-5",
        testcaseID : 105,
        testcaseInput: "this is testcase input of 105 A natural number greater than 1 that is not prime is called a composite number. The following are some examples of prime numbers:   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31.",
        testcaseOutput: "this is testcase output of 105 var isPrime = function(n) { if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){ return false; } for(var i = 2; i <= Math. sqrt(n); i += 1){ if(n % i === 0){ return false; } } return true; };",
      },
      {
        test:"Test Case-6",
        testcaseID : 106,
        testcaseInput: "this is testcase input of 106 A natural number greater than 1 that is not prime is called a composite number. The following are some examples of prime numbers:   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31.",
        testcaseOutput: "this is testcase output of 106 var isPrime = function(n) { if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){ return false; } for(var i = 2; i <= Math. sqrt(n); i += 1){ if(n % i === 0){ return false; } } return true; };",
      },
    ],
  });

  const [selectedTestcaseIndex, setSelectedTestcaseIndex] = useState(null);
  const [editable, setEditable] = useState(false);
  const [newTestcase, setNewTestcase] = useState({
    test:"",
    testcaseID: "",
    testcaseInput: "",
    testcaseOutput: "",
  });

  

  const handleAddTestcase = () => {
    setDummyData((prevData) => {
      const updatedTestcase = [...prevData.testcase, newTestcase];
      return {
        ...prevData,
        testcase: updatedTestcase,
      };
    });
    setNewTestcase({
      test:"",
        testcaseID: "",
      testcaseInput: "",
      testcaseOutput: "",
    });
    setSelectedTestcaseIndex(dummyData.testcase.length); 
    setEditable(false);
  };
  

  const handleEditTestcases = (index) => {
    setEditable(true);
    setSelectedTestcaseIndex(index);
    if (index === dummyData.testcase.length) {
      setNewTestcase({
        test:"",
        testcaseID: "",
        testcaseInput: "",
        testcaseOutput: "",
      });
    } else {
      setNewTestcase(dummyData.testcase[index]);
    }
  };

  const handleOk = () => {
    setEditable(false);
    const updatedTestcase = [...dummyData.testcase];
    if (selectedTestcaseIndex !== null && selectedTestcaseIndex < updatedTestcase.length) {
      updatedTestcase[selectedTestcaseIndex] = newTestcase;
    } 
    setDummyData({
      ...dummyData,
      testcase: updatedTestcase,
    });
    console.log(newTestcase);
};

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setNewTestcase((prevTopic) => ({
      ...prevTopic,
      [field]: value,
    }));
  };

  return (
    <div className="p-2 rounded bg-inputBg">
      {/* <div className="text-2xl font-bold">Test Case</div> */}
      <div className="flex flex-wrap justify-between pt-5 pl-6 pr-6 mt-6 bg-inputBg">
        {[...dummyData.testcase, newTestcase].map((testcase, index) => (
          <div
            key={index}
            className={`w-1/4 p-2 rounded font-bold text-center text-lg mb-4 mr-1 cursor-pointer ${
              selectedTestcaseIndex === index ? "bg-[#699EDB] text-white" : "bg-bgBlue text-textBlue"
            }`}
            onClick={() => handleEditTestcases(index)}
          >
            {editable && selectedTestcaseIndex === index ? (
              <div
                className="w-full h-full bg-[#699EDB] text-textBlue"
                onChange={(e) => handleInputChange(e, 'test')}>
                  {newTestcase.test}
              </div>
            ) : (
              testcase.test
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end p-5">
        <div className="flex items-center text-xl font-bold bg-[#7EE46D] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded" onClick={() => handleAddTestcase()}>
          <div>
            <FaPlus />
          </div>
          <div className="pl-1"> Add Test Case </div>
        </div>
      </div>
      <div className="w-5/6 m-auto mt-6 border border-slate-400 "></div>
      {(editable || selectedTestcaseIndex !== null) && (
        <div className="w-full h-full p-6 pt-5 pb-10 pl-5 pr-5 mt-4 text-sm rounded-md bg-inputBg">
          <div className="pl-6 pr-4 text-lg font-bold pt-7">Test Case ID :
          
            {editable ? (
              <input
                type="text"
                className="h-16 px-3 ml-4 text-lg font-medium border-2 outline-none resize-none w-96 rounded-xl"
                value={newTestcase.testcaseID}
                onChange={(e) => handleInputChange(e, 'testcaseID')}
              />
            ) : (
              dummyData.testcase[selectedTestcaseIndex]?.testcaseID || newTestcase.testcaseID
            )}
          </div>

          <div className="pl-6 pr-4 mt-6 text-lg font-bold pt-7">Test Case  Input:</div>
          <div
            //  className={`rounded-md bg-bgBlue  text-[#3D4E74]  p-5 pl-5 pt-5 text-lg custom-scrollbar border border-textBlue`}
          >
            {editable ? (
              <textarea
                className="w-full p-3 text-lg font-medium border-2 outline-none resize-none h-28 rounded-xl"
                value={newTestcase.testcaseInput}
                onChange={(e) => handleInputChange(e, 'testcaseInput')}
              />
            ) : (
              dummyData.testcase[selectedTestcaseIndex]?. testcaseInput || newTestcase.testcaseInput
            )}
          </div>

          <div className="pl-6 pr-4 mt-6 text-lg font-bold pt-7">Test Case Output:</div>
          <div
            // className={`rounded-md bg-bgBlue  text-[#3D4E74]  p-5 pl-5 pt-5 text-lg custom-scrollbar border border-textBlue`}
          >
            {editable ? (
              <textarea
                className="w-full p-3 text-lg font-medium border-2 outline-none resize-none h-28 rounded-xl"
                value={newTestcase.testcaseOutput}
                onChange={(e) => handleInputChange(e, 'testcaseOutput')}
              />
            ) : (
              dummyData.testcase[selectedTestcaseIndex]?. testcaseOutput || newTestcase.testcaseOutput
            )}
          </div>

          <div className="flex justify-end p-5">
            <div className="flex items-center text-xl font-bold bg-[#7EE46D] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded mr-6" onClick={handleOk}>
              <div>
                <TiTick />
              </div>
              <div className="pl-2"> OK</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTestcases;
