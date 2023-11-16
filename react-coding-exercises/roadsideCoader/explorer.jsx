// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {

  return (
    <div className="min-h-screen ">
      <h2 className="text-center text-4xl font-bold">Explorer data</h2>
      <Folder data={data}/>
    </div>
  );
};

export default App;


export const Folder = ({data}) => {

  const [open, setOpen] = useState(false)


  const handleOpen = () => {
    setOpen(!open)
  }

  if(data.isFolder){

    return (
      <div className='flex flex-col items-start px-5'>
        <button  
          onClick={handleOpen} 
          className={`cursor-pointer focus:outline-none
           ${open ? 'bg-gray-200' : ''}`}>
          {data.name}
        </button>
        {open ? (
          <div>
            {data.items.map((item) => (
              <Folder data={item} key={item.name}/>
            ))}
          </div>
        ) : ''}
        </div>
    )

  } else {
    return (
      <div className='flex flex-col px-5'>
        {data.name}
        </div>
    )
  }
}

 const data = {
  name: "src",
  isFolder: true,
  items: [
    {
      name: "components",
      isFolder: true,
      items: [
        {
          name: "header.jsx",
          isFolder: false
        },
        {
          name: "footer.jsx",
          isFolder: false
        },
        {
          name: "main.jsx",
          isFolder: false
        },
        {
          name: "avatar.jsx",
          isFolder: false
        }
      ]
    },
    {
      name: "hooks",
      isFolder: true,
      items: [
        {
          name: "useDebounce.jsx",
          isFolder: false
        },
        {
          name: "useModal.jsx",
          isFolder: false
        }
      ]
    }
  ]
};
