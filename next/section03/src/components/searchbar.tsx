"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  //앱라우터는 next/navigation 패키지의 useRouter임
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
