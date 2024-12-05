import React from 'react';

export default function Labels() {
  // Updated sample data with unique types and valid colors
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  
  const obj = [
    {
      type: 'Savings',
      color: generateRandomColor(),
      percent: 45,
    },
    {
      type: 'Investments',
      color: generateRandomColor(),
      percent: 30,
    },
    {
      type: 'Expenses',
      color: generateRandomColor(),
      percent: 25,
    },
  ];
  
  console.log(obj);
  

  return (
    <>
      {obj.map((item, index) => (
        <LabelComponent key={index} data={item} />
      ))}
    </>
  );
}

function LabelComponent({ data }) {
  if (!data) return null;

  return (
    <div className="labels flex justify-between items-center my-2">
      <div className="flex items-center gap-2">
      
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: data.color ?? '#f9c74f' }}
        ></div>
      
        <h3 className="text-md font-medium">{data.type ?? 'Unknown'}</h3>
      </div>
      
      <h3 className="font-bold text-gray-700">{data.percent ?? 0}%</h3>
    </div>
  );
}
