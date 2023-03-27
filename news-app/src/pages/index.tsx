import Main from '@/root/components/dashboard/Dashboard';
import Head from "next/head";
import {NewItemProps} from "@/root/components/newItem/NewItem"

const fakeNewsData: NewItemProps[] = 
  [
    {title:"First new", description:"First long description with details"},
    {title:"Second new", description:"Second long description with details"},
    {title:"Third new", description:"Third long description with details"},
    {title:"Fourth new", description:"Fourth long description with details"},
    {title:"Fifth new", description:"Fifth long description with details"},
    {title:"Sixth new", description:"Sixth long description with details"},
  ]

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Sample to blog with SSR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main features={fakeNewsData}/>
      </main>
    </>
  );
}
