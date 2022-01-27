import Dropdown from './Dropdown'
import Listbox from './Listbox';
import Switch from './Switch';
import Radio from './Radio';


function FormComponents() {
  
  return (
    <form className=" border-b-white w-1/2 mt-8 rounded-3xl bg-indigo border-r- border border-b-4">
      <div className=" flex flex-row p-6 space-x-4 ">
        <label>input box</label>{" "}
        <input
          className=" bg-gray-700 px-2 w-1/3 text-center py-1 rounded-full text-gray-300 bg-opacity-70"
          placeholder=" text here"
        />
      </div>

      <div className=" flex flex-row p-6 space-x-4 ">
        <label>text Area</label>{" "}
        <textarea
          className=" bg-gray-700 px-2 py-1 w-1/2 rounded-sm text-gray-300 bg-opacity-70"
          placeholder=" text here"
        />
      </div>
      <div className=" flex flex-row p-6 space-x-4 ">
        <label>Dropdown</label>{" "}
        <Dropdown />
      </div>
      <div className=" flex flex-row p-6 space-x-4 ">
        <label>Listbox</label>{" "}
        <Listbox />
      </div>
      <div className=" flex flex-row p-6 space-x-4 ">
        <label>Switch</label>{" "}
        <Switch />
      </div>
      <div className=" flex flex-row p-6 space-x-4 ">
        <label>Radio component</label>{" "}
        <Radio />
      </div>
      <div className=" flex flex-row p-6 space-x-4 ">
        <label>Active Button</label>{" "}
        <button className=' py-2 px-6 rounded-3xl bg-gradient-to-tr from-orange-500 via-pink-500 to-red-500 uppercase hover:shadow-md hover:shadow-pink-500 font-black cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out'>Click Me</button>
      </div>
      <div className=" flex flex-row p-6 space-x-4 ">
        <label>Inactive Button</label>{" "}
        <button className=' py-2 px-6 rounded-3xl border-2 uppercase hover:shadow-md hover:shadow-pink-500 font-black cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out'> Click Me</button>
      </div>
    </form>
  );
}

export default FormComponents;
