import { useEffect, useRef } from "react";

export function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  return (
    <form ref={formRef}>
      <input name="model" defaultValue={initialData.model} /> <br />
      <input name="year" defaultValue={initialData.year} /> <br />
      <input name="color" defaultValue={initialData.color} /> <br />
    </form>
  );
}
