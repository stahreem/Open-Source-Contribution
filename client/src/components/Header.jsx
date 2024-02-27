import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export default function Header() {
  const dummyData = {
    topics: [
      {
        title: "Test case  1",
        id: 101,
        input:
          "Description for Topic 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        output:
          "Sample code for Topic 1. const example = 'Hello, World!'; console.log(example);",
      },
      {
        title: "Test case  2",
        id: 102,
        input:
          "Description for Topic 2. Vestibulum fermentum elit at turpis varius ullamcorper. In hac habitasse platea dictumst. Maecenas aliquam libero non tincidunt luctus.",
        output:
          "Sample code for Topic 2. function greet(name) { return `Hello, ${name}!`; } console.log(greet('John'));",
      },
      {
        title: "Test case  3",
        id: 103,
        input:
          "Description for Topic 3. Phasellus mattis, felis ut adipiscing tempus, elit odio tincidunt augue, in fermentum nunc odio eu elit. ",
        output:
          "Sample code for Topic 3. const numbers = [1, 2, 3, 4, 5]; const sum = numbers.reduce((acc, num) => acc + num, 0); console.log(sum);",
      },
      {
        title: "Test case  4",
        id: 104,
        input:
          "Description for Topic 4. Etiam sagittis metus sit amet diam rhoncus, id consectetur metus fermentum. Sed vitae rhoncus justo.",
        output:
          "Sample code for Topic 4. const fruits = ['apple', 'banana', 'orange']; fruits.forEach(fruit => console.log(fruit));",
      },
      {
        title: "Test case  5",
        id: 105,
        input:
          "Description for Topic 5. Proin eget laoreet sem. Morbi in arcu id odio vehicula hendrerit vitae eu orci.",
        output:
          "Sample code for Topic 5. const square = (num) => num * num; console.log(square(5));",
      },
      {
        title: "Test case  6",
        id: 106,
        input:
          "Description for Topic 6. Integer consequat justo non elit sagittis, eu sodales libero venenatis. Ut tincidunt posuere libero.",
        output:
          "Sample code for Topic 6. const colors = ['red', 'green', 'blue']; colors.map(color => console.log(color));",
      },
    ],
  };

  const [testcase, setTestcase] = useState(false);
  const [input, setInput] = useState(false);
  const [output, setOutput] = useState(false);
  const [id, setId] = useState(false);
  const handleTestCase = (index) => {
    setTestcase(index);
    setId(true);
    setInput(true);
    setOutput(true);
  };

  return (
    <div className="h-full pl-16 pr-16 text-lg bg-bgBlue w text-textBlue font-raleway">
      <div className="pt-8 text-3xl font-bold text-center">
        VIEW{" "}
        <div>
          <IoIosArrowBack />
        </div>{" "}
      </div>
      <div className="flex justify-end p-5 ">
        <div className="flex items-center text-xl font-bold bg-[#7EE46D] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded mr-6">
          <div>
            <MdModeEdit />
          </div>
          <div className="pl-2"> Edit</div>
        </div>
        <div className="flex items-center text-xl font-bold bg-[#E04E4E] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded">
          <div>
            <MdDelete />
          </div>
          <div className="pl-1"> Delete</div>
        </div>
      </div>
      <div>
        <form action="submit ">
          <div>
            <div className="flex justify-between ">
              <div className="">
                <div className="flex">
                  <div className="text-2xl font-semibold" htmlFor="domainId">
                    Domain ID:
                  </div>
                  <div className="pl-3 text-2xl font-semibold">1</div>
                </div>
                <div className="flex">
                  <div className="text-2xl font-semibold" htmlFor="domainId">
                    Problem ID:
                  </div>
                  <div className="pl-3 text-2xl font-semibold">201</div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="text-2xl font-semibold" htmlFor="domainId">
                    Topic Name :
                  </div>
                  <div className="pl-3 text-2xl font-semibold">
                    Prime Number Problem{" "}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-2xl font-semibold" htmlFor="domainId">
                    Problem Name:
                  </div>
                  <div className="pl-3 text-2xl font-semibold">
                    {" "}
                    Prime Number
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 ">
            <div className="text-2xl font-bold">Heading:</div>

            <div className="rounded-md bg-inputBg  text-[#3D4E74]  p-5 pl-5 pt-5 text-lg custom-scrollbar">
              Designer at work who don't have any content for their product yet
              have the possibility to insert a dummy text into their design to
              judge on the arrangement of text on their site, on readability or
              on fonts and sizes.
            </div>
          </div>
          <div className="mt-14 ">
            <div className="text-2xl font-bold">Discription :</div>
            {/* <br /> */}
            <div className="rounded-md bg-inputBg  text-[#3D4E74]  p-5 pl-5 pt-5 text-lg custom-scrollbar">
              Designer at work who don't have any content for their product yet
              have the possibility to insert a dummy text into their site, on
              readability or fonts and size. dummy text of the printing and
              typesetting industy. lorem Ipsum has been the industry's standart
              dummy text ever since the yoy can use dummy to refer to things
              that are not real
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div>
              <div className="mt-4 text-2xl font-semibold" htmlFor="">
                Difficulty
              </div>
              <div className="px-16 py-5 text-lg rounded-md w-72 min-w-96 h-117 bg-inputBg">
                <div className="p-2 text-center bg-white ">
                  Advance
                  <div> </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-4 text-2xl font-semibold">Points </div>
              <div className="px-16 py-5 text-lg rounded-md w-72 min-w-96 h-117 bg-inputBg">
                <div className="p-2 text-center bg-white ">1</div>
              </div>
            </div>
          </div>

          {/* <div className="text-2xl font-bold mt-14 "> </div> */}
          <div className="w-full h-full p-6 pt-5 pb-10 pl-5 pr-5 text-sm rounded-md mt-7 bg-inputBg">
            <div className="pl-6 pr-4 text-lg font-bold pt-7">
              Test Case{" "}
              <div className="flex flex-wrap justify-between">
                {dummyData.topics.map((topics, index) => (
                  <div
                    key={index}
                    className="flex flex-col py-5 mb-4 mr-1 text-lg font-bold text-center rounded w-72 px-38 bg-bgBlue"
                    onClick={() => handleTestCase(index)}
                  >
                    {topics.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center pl-6 pt-7">
              <div className="pr-4 text-lg font-bold">Test Case Id :</div>
              <div
                className="pt-2 pl-5 text-xl rounded-md w-80 h-11 bg-bgBlue"
                onClick={() => setId(true)}
              >
                {dummyData.topics[testcase]?.id}
              </div>
            </div>
            <div className="pl-6 pt-7">
              <div className="pr-4 text-lg font-bold">Test Case Input :</div>
              {/* <br /> */}
              <div
                className="w-full pt-5 pb-5 pl-5 text-sm rounded-md pr-7 bg-bgBlue"
                onClick={() => setInput(true)}
              >
                {dummyData.topics[testcase]?.input}
              </div>
            </div>
            <div className="pl-6 pt-7">
              <div className="pr-4 text-lg font-bold">Test Case Output :</div>
              <div
                className="pt-5 pb-5 pl-5 text-sm rounded-md bg-bgBlue"
                onClick={() => setOutput(true)}
              >
                {dummyData.topics[testcase]?.output}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="mt-8 text-xl font-bold">Constrain </div>
              <div className="w-full p-6 text-sm rounded-md h-117 bg-inputBg pl-50 pt-30 pr-50 pb-30">
                <div className="flex flex-col w-96 bg-inputBg font-raleway">
                  <ul>
                    <li>1 = piles.length = 100 </li>
                    <li>1 = piles[i] = 104 </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between mt-12 ">
              <div className="">
                <div className="font-bold ">Sample Input :</div>
                {/* <br /> */}
                <div className="h-20 pt-2 pl-5 text-lg rounded-md min-w-96 bg-inputBg">
                  <ul>
                    <li>1</li>
                    <li>1 2 3 4 5 6 7 8 9 </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-12">
              <div className="flex flex-col justify-around">
                <div className="">
                  <div className="text-xl font-bold"> Sample Output :</div>
                  {/* <br /> */}
                  <div className="h-20 pt-2 pl-5 text-lg rounded-md min-w-96 h-117 bg-inputBg">
                    <ul>
                      <li>1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-5/6 m-auto mt-6 border border-slate-400 "></div>
      <div className="pb-16 mt-8 text-xl font-bold text-center">
        Created on: 12:05 AM | 11-25-2023
      </div>
    </div>
  );
}
