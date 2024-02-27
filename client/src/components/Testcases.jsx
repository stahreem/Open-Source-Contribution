import React, { useState } from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const EditSyllabus = () => {
  const [dummyData, setDummyData] = useState({
    topics: [
      {
        title: "Topic 1",
        description: "Description for Topic 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        sampleCode: "Sample code for Topic 1. const example = 'Hello, World!'; console.log(example);",
      },
      {
        title: "Topic 2",
        description: "Description for Topic 2. Vestibulum fermentum elit at turpis varius ullamcorper. In hac habitasse platea dictumst. Maecenas aliquam libero non tincidunt luctus.",
        sampleCode: "Sample code for Topic 2. function greet(name) { return `Hello, ${name}!`; } console.log(greet('John'));",
      },
      {
        title: "Topic 3",
        description: "Description for Topic 3. Phasellus mattis, felis ut adipiscing tempus, elit odio tincidunt augue, in fermentum nunc odio eu elit. ",
        sampleCode: "Sample code for Topic 3. const numbers = [1, 2, 3, 4, 5]; const sum = numbers.reduce((acc, num) => acc + num, 0); console.log(sum);",
      },
      {
        title: "Topic 4",
        description: "Description for Topic 4. Etiam sagittis metus sit amet diam rhoncus, id consectetur metus fermentum. Sed vitae rhoncus justo.",
        sampleCode: "Sample code for Topic 4. const fruits = ['apple', 'banana', 'orange']; fruits.forEach(fruit => console.log(fruit));",
      },
      {
        title: "Topic 5",
        description: "Description for Topic 5. Proin eget laoreet sem. Morbi in arcu id odio vehicula hendrerit vitae eu orci.",
        sampleCode: "Sample code for Topic 5. const square = (num) => num * num; console.log(square(5));",
      },
      {
        title: "Topic 6",
        description: "Description for Topic 6. Integer consequat justo non elit sagittis, eu sodales libero venenatis. Ut tincidunt posuere libero.",
        sampleCode: "Sample code for Topic 6. const colors = ['red', 'green', 'blue']; colors.map(color => console.log(color));",
      },
    ],
  });

  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);
  const [editable, setEditable] = useState(false);
  const [newTopic, setNewTopic] = useState({
    title: "",
    description: "",
    sampleCode: "",
  });

  

  const handleAddTopic = () => {
    setDummyData((prevData) => {
      const updatedTopics = [...prevData.topics, newTopic];
      return {
        ...prevData,
        topics: updatedTopics,
      };
    });
    setNewTopic({
      title: "",
      description: "",
      sampleCode: "",
    });
    setSelectedTopicIndex(dummyData.topics.length); // Assuming the index of the last added topic
    setEditable(false);
  };
  

  const handleEditSyllabus = (index) => {
    setEditable(true);
    setSelectedTopicIndex(index);
    if (index === dummyData.topics.length) {
      setNewTopic({
        title: "",
        description: "",
        sampleCode: "",
      });
    } else {
      setNewTopic(dummyData.topics[index]);
    }
  };

  const handleOk = () => {
    setEditable(false);
    const updatedTopics = [...dummyData.topics];
    if (selectedTopicIndex !== null && selectedTopicIndex < updatedTopics.length) {
      updatedTopics[selectedTopicIndex] = newTopic;
    } 
    setDummyData({
      ...dummyData,
      topics: updatedTopics,
    });
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setNewTopic((prevTopic) => ({
      ...prevTopic,
      [field]: value,
    }));
  };

  return (
    <div className="p-2 rounded mt-14 bg-inputBg">
      <div className="text-2xl font-bold">Topics:</div>
      <div className="flex flex-wrap justify-between pt-5 pl-6 pr-6 mt-6 bg-inputBg">
        {[...dummyData.topics, newTopic].map((topic, index) => (
          <div
            key={index}
            className={`w-1/4 p-2 rounded font-bold text-center text-lg mb-4 mr-1 cursor-pointer ${
              selectedTopicIndex === index ? "bg-[#699EDB] text-white" : "bg-bgBlue text-textBlue"
            }`}
            onClick={() => handleEditSyllabus(index)}
          >
            {editable && selectedTopicIndex === index ? (
              <div
                className="w-full h-full bg-[#699EDB] text-textBlue"
                onChange={(e) => handleInputChange(e, 'title')}>
                  {newTopic.title}
              </div>
            ) : (
              topic.title
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end p-5">
        <div className="flex items-center text-xl font-bold bg-[#7EE46D] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded" onClick={() => handleAddTopic()}>
          <div>
            <FaPlus />
          </div>
          <div className="pl-1"> Add Topic</div>
        </div>
      </div>
      {(editable || selectedTopicIndex !== null) && (
        <div className="w-full h-full p-6 pt-5 pb-10 pl-5 pr-5 mt-4 text-sm rounded-md bg-inputBg">
          <div className="pl-6 pr-4 text-lg font-bold pt-7">Topic Name:</div>
          <div
            className={`w-80 h-11 rounded-md bg-bgBlue text-xl pt-2 pl-5 border border-textBlue`}
          >
            {editable ? (
              <input
                type="text"
                className="w-full h-full outline-none bg-bgBlue"
                value={newTopic.title}
                onChange={(e) => handleInputChange(e, 'title')}
              />
            ) : (
              dummyData.topics[selectedTopicIndex]?.title || newTopic.title
            )}
          </div>

          <div className="pl-6 pr-4 mt-6 text-lg font-bold pt-7">Description:</div>
          <div
            className={`rounded-md bg-bgBlue  text-[#3D4E74]  p-5 pl-5 pt-5 text-lg custom-scrollbar border border-textBlue`}
          >
            {editable ? (
              <textarea
                className="w-full h-full outline-none bg-bgBlue"
                value={newTopic.description}
                onChange={(e) => handleInputChange(e, 'description')}
              />
            ) : (
              dummyData.topics[selectedTopicIndex]?.description || newTopic.description
            )}
          </div>

          <div className="pl-6 pr-4 mt-6 text-lg font-bold pt-7">Sample Code:</div>
          <div
            className={`rounded-md bg-bgBlue  text-[#3D4E74]  p-5 pl-5 pt-5 text-lg custom-scrollbar border border-textBlue`}
          >
            {editable ? (
              <textarea
                className="w-full h-full outline-none bg-bgBlue"
                value={newTopic.sampleCode}
                onChange={(e) => handleInputChange(e, 'sampleCode')}
              />
            ) : (
              dummyData.topics[selectedTopicIndex]?.sampleCode || newTopic.sampleCode
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

export default EditSyllabus;


