import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Syllabus = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState({
    topicName: '',
    description: '',
    exampleCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTopic((prevTopic) => ({ ...prevTopic, [name]: value }));
  };

  const handleAddSyllabus = () => {
    const topicToAdd = {
      topicName: newTopic.topicName || `Topic ${topics.length + 1}`,
      description: newTopic.description || '',
      exampleCode: newTopic.exampleCode || '',
    };

    // syllabusData([...topics, topicToAdd]);
    setTopics((prevTopics) => [...prevTopics, topicToAdd]);
    setNewTopic({
      topicName: '',
      description: '',
      exampleCode: '',
    });
  };


    return (
      <div>
       <div className="mt-6 text-2xl font-semibold ">Add Test Case </div>
      <div className='w-full px-16 py-5 text-lg rounded-md min-w-96 h-117 bg-inputBg'>
       
          {/* Topic input section */}
          <div className="mt-10">
            <label className="pr-4 text-lg font-bold" htmlFor="TopicName">
              Test Case ID:
            </label>
            <input
              type="text"
              id="TopicName"
              placeholder="Enter Test Case ID here"
              className="h-16 px-3 ml-4 font-medium border-2 outline-none resize-none w-96 rounded-xl"
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
      </div>
    );
  };

  // return syllabus();


export default Syllabus;
