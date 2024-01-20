import React from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";


export default function Header() {
  // // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/edit')

  // }
  return (
    <div className="h-full pl-16 pr-16 text-lg bg-bgBlue w text-textBlue font-raleway">
      <div className="pt-8 text-3xl font-bold text-center">VIEW </div>
      <div className="flex justify-end p-5 ">
        <link rel="import" href="component.html" />
        {/* onClick={handleClick} */}
        <div className="flex items-center text-xl font-bold bg-[#7EE46D] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded mr-6">
          <div><MdModeEdit /></div>
          <div className="pl-2"> Edit</div>
        </div>
        <div className="flex items-center text-xl font-bold bg-[#E04E4E] w-fit pl-2 p-1 pr-3 border-2 border-textBlue hover:shadow-xl rounded">
          <div><MdDelete /></div>
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
                  <div className="pl-3 text-2xl font-semibold">Prime Number Problem </div>
                </div>
                <div className="flex">
                  <div className="text-2xl font-semibold" htmlFor="domainId">
                    Problem Name:
                  </div>
                  <div className="pl-3 text-2xl font-semibold"> Prime Number</div>
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
                  <div className="mt-4 text-2xl font-semibold" htmlFor="" >
                    Difficulty 
                  </div>
                  <div className="px-16 py-5 text-lg rounded-md w-72 min-w-96 h-117 bg-inputBg">
                  <div className="p-2 text-center bg-white ">Advance
                  <div> </div>
                  </div>
                  </div>
                  </div>
                  <div>
                  <div className="pl-3 text-2xl font-semibold">Points </div>
                  <div className="px-16 py-5 text-lg rounded-md min-w-96 h-117 bg-inputBg">
                  <div className="p-1 text-center bg-white ">1
                   </div>
                  </div>
                  </div>

        </div>




          <div className="text-2xl font-bold mt-14 ">Test Case </div>
          <div className="w-full h-full p-6 pt-5 pb-10 pl-5 pr-5 text-sm rounded-md bg-inputBg">
            <div className="pl-6 pr-4 text-lg font-bold pt-7">Test Case </div>
            <div className="flex flex-wrap justify-between pl-6 pr-6 mt-6">
              <div className="w-1/4 p-2 mb-4 mr-1 text-lg font-bold text-center rounded bg-bgBlue">
                Test Case 1
              </div>
              <div className="w-1/4 p-2 mb-4 mr-1 text-lg font-bold text-center rounded bg-bgBlue">
                Test Case 2
              </div>
              <div className="w-1/4 p-2 mb-4 mr-1 text-lg font-bold text-center rounded bg-bgBlue">
                Test Case 3
              </div>
              <div className="w-1/4 p-2 mb-4 mr-1 text-lg font-bold text-center rounded bg-bgBlue">
                Test Case 4
              </div>
              <div className="w-1/4 p-2 mb-4 mr-1 text-lg font-bold text-center rounded bg-bgBlue">
                Test Case 5
              </div>
              <div className="w-1/4 p-2 mb-4 mr-1 text-lg font-bold text-center rounded bg-bgBlue">
                Test Case 6
              </div>
            </div>
            <div className="w-5/6 m-auto mt-8 mb-8 border border-slate-400 "></div>

            <div className="flex items-center pl-6 pt-7">
              <div className="pr-4 text-lg font-bold">Test Case Id :</div>
              <div className="pt-2 pl-5 text-xl rounded-md w-80 h-11 bg-bgBlue">
                101
              </div>
            </div>
            <div className="pl-6 pt-7">
              <div className="pr-4 text-lg font-bold">Test Case Input :</div>
              {/* <br /> */}
              <div className="w-full pt-5 pb-5 pl-5 text-sm rounded-md pr-7 bg-bgBlue">
                A natural number greater than 1 that is not prime is called a
                composite number. The following are some examples of prime
                numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31.
              </div>
            </div>
            <div className="pl-6 pt-7">
              <div className="pr-4 text-lg font-bold">Test Case Output :</div>
              {/* <br /> */}
              <div className="pt-5 pb-5 pl-5 text-sm rounded-md bg-bgBlue">
                {/* <p>var isPrime = function(n) { if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){ return false; } for(var i = 2; i <= Math. sqrt(n); i += 1){ if(n % i === 0){ return false; } } return true; };</p>   */}
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
