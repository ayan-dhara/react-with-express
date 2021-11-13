import React, {useEffect, useState} from 'react';

const Demo = () => {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch("/api/demo")
      .then(res => res.json())
      .then(json => {
        if (json.data)
          setData(json.data)
      })
  }, [])
  return (
    <>
      data: {data}
    </>
  );
};

export default Demo;
