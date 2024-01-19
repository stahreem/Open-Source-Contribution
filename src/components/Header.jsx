import React from "react";

export default function Header() {
  return (
    <div className="m-2 fs-3">
      <h5 className="text-center">VIEW </h5>
      <div className="flex justify-end  ">
        <button className="m-2 bg-green border border-black-500 p-1 "> Edit </button>
        <button> Delete </button>
      </div>
      <div className="flex justify-between">
        <div>
          <p>Domain ID:1</p>
          <p>Problem ID:201</p>
        </div>
        <div>
          <p>Topic Name: Prime Number problem </p>
          <p>Problem Name: Prime number </p>
        </div>
      </div>
      <div className="">
        <label>Heading: </label>
        <input />
        <label> Description :</label>
        <input/>
      </div>
    </div>
    //     <div class="flex justify-end">
    //   <h5 class="text-center">VIEW</h5>
    //   <div class="ml-5">
    //     <button>Edit</button>
    //     <button>Delete</button>
    //   </div>
    // </div>
  );
}
