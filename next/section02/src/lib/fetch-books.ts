import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  //로컬에서 띄운 서버에 붙을때
  //let url = `http://localhost:12345/book`;
  //vercel설정
  let url = `https://onebite-books-server-main-plum.vercel.app/book`;

  //q에대한 타입가드
  https: if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
