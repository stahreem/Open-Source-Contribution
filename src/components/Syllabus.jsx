import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Syllabus = () => {
  const [topics, setTopics] = useState([]);

  const syllabus = () => {
    const handleAddSyllabus = () => {
      const newTopic = {
        id: Date.now(),
        name: document.getElementById('TopicName').value || `Topic ${topics.length + 1}`,
        description: document.getElementById('desc').value || "",
        sampleCode: document.getElementById('samplecode').value || "",
      };
  
      setTopics([...topics, newTopic]);
    };

    return (
      <div className='rounded bg-inputBg'>
        <div className="w-full h-full pt-5 pl-5 text-sm rounded-md mt-14 bg-inputBg">
          {/* Topic input section */}
          <div className="pl-6 pt-7">
            <label className="pr-4 text-lg font-bold" htmlFor="TopicName">
              Topic name:
            </label>
            <input
              type="text"
              id="TopicName"
              placeholder="Enter Topic name..."
              className="pl-5 text-sm rounded-md w-80 h-11 bg-bgBlue hover:border-2 border-textBlue focus:placeholder:text-textBlue placeholder-opacity-80"
            />
          </div>
          {/* Description input section */}
          <div className="pl-6 pt-7">
            <label className="pr-4 text-lg font-bold" htmlFor="desc">
              Description:
            </label>
            <br />
            <textarea
              cols="173"
              rows="7"
              id="desc"
              placeholder="Enter Description..."
              className="pt-5 pl-5 text-sm rounded-md bg-bgBlue hover:border-2 border-textBlue focus:placeholder:text-textBlue placeholder-opacity-80"
            ></textarea>
          </div>
          {/* Sample Code input section */}
          <div className="pl-6 pt-7">
            <label className="pr-4 text-lg font-bold" htmlFor="samplecode">
              Sample Code:
            </label>
            <br />
            <textarea
              cols="173"
              rows="7"
              id="samplecode"
              placeholder="Enter Sample Code..."
              className="pt-5 pl-5 text-sm rounded-md bg-bgBlue hover:border-2 border-textBlue focus:placeholder:text-textBlue placeholder-opacity-80"
            ></textarea>
          </div>
          {/* Add Syllabus button */}
          <div className="flex justify-end p-5">
            <div
              className="flex items-center text-xl font-bold bg-[#7EE46D] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded"
              onClick={handleAddSyllabus}
            >
              <div>
                <FaPlus />
              </div>
              <div className="pl-1"> Add Syllabus</div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-5/6 m-auto mt-3 border border-slate-400"></div>

        {/* Syllabus display section */}
        <div className="pl-6 pr-4 text-lg font-bold bg-inputBg pt-7">Syllabus:</div>
        <div className="flex flex-wrap justify-between pl-6 pr-6 mt-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="w-1/4 p-2 mb-4 mr-1 text-lg font-bold text-center rounded bg-bgBlue"
            >
              {topic.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return syllabus();
};

export default Syllabus;
